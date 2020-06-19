import React, { useState } from 'react';
import './MainContent.scss';
import Slideshow from '../../slideshow/Slideshow';
import Paginate from '../paginate/Paginate';

function MainContent() {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const images = [
    {
      url: 'https://image.shutterstock.com/z/stock-photo-mountains-during-sunset-beautiful-natural-landscape-in-the-summer-time-407021107.jpg'
    },
    {
      url: 'https://as1.ftcdn.net/jpg/02/12/43/28/500_F_212432820_Zf6CaVMwOXFIylDOEDqNqzURaYa7CHHc.jpg'
    },
    {
      url: 'https://as1.ftcdn.net/jpg/02/27/28/12/500_F_227281209_uAgEbgnOGMxvXbu1CQEmQ031pys5XJSH.jpg'
    },
    {
      url: 'https://as2.ftcdn.net/jpg/01/10/95/89/500_F_110958997_WTelZic9082KUINYhW43xP9dIp78tmQG.jpg'
    }
  ];

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPage={10} paginate={paginate} />
        </div>
      </div>
      {/* display grid component */}
    </div>
  );
}

export default MainContent;
