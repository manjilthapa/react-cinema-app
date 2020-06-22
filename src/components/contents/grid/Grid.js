import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rating from '../rating/Rating';
import { IMAGE_URL } from '../../../services/movie.service';

import './Grid.scss';

const Grid = ({ list }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(list);
  }, [list]);

  return (
    <>
      <div className="grid">
        {movies.map((movie, i) => (
          <div key={i}>
            <div className="grid-cell" style={{ backgroundImage: `url(${IMAGE_URL}${movie.poster_path})` }}>
              <div className="grid-read-more">
                <button className="grid-cell-button">Read more</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{movie.title}</span>
                <div className="grid-detail-rating">
                  <Rating rating={movie.vote_average} totalStars={10} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{movie.vote_average}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Grid.propTypes = {
  list: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});
export default connect(mapStateToProps)(Grid);
