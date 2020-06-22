import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './MainContent.scss';
import Slideshow from '../../slideshow/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';
import {IMAGE_URL} from '../../../services/movie.service'

function MainContent(props) {
  const {list} = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0,4);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const imageArray = [
    {
      url: 'https://image.shutterstock.com/z/stock-photo-mountains-during-sunset-beautiful-natural-landscape-in-the-summer-time-407021107.jpg',
      rating: 7.5
    },
    {
      url: 'https://as1.ftcdn.net/jpg/02/12/43/28/500_F_212432820_Zf6CaVMwOXFIylDOEDqNqzURaYa7CHHc.jpg',
      rating: 6.4
    },
    {
      url: 'https://as1.ftcdn.net/jpg/02/27/28/12/500_F_227281209_uAgEbgnOGMxvXbu1CQEmQ031pys5XJSH.jpg',
      rating: 9
    },
    {
      url: 'https://as2.ftcdn.net/jpg/01/10/95/89/500_F_110958997_WTelZic9082KUINYhW43xP9dIp78tmQG.jpg',
      rating: 5
    }
  ];


  useEffect(()=>{
    if(randomMovies.length){
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`
        },
        {
          id: 2,
          url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`
        },
        {
          id: 3,
          url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`
        },
        {
          id: 4,
          url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}`
        }
      ];
      setImages(IMAGES);
    }
    
  },[])

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPage={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={imageArray} />
    </div>
  );
}

MainContent.propTypes = {
  list: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  list: state.movies.list
})
export default connect(mapStateToProps,{})(MainContent);
