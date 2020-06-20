import React, { useState, useEffect, Fragment, useRef } from 'react';
import PropTypes from 'prop-types';

import './Rating.scss';

const Rating = ({ rating, totalStars, className }) => {
  const [numberOfStar, setNumberOfStar] = useState();
  const ratingRef = useRef();

  useEffect(() => {
    const starArray = [...Array(totalStars).keys()].map((i) => i + 1);
    setNumberOfStar(starArray);
    /* const percentage = (rating / totalStars) * 100; */
    let percentage;
    if (rating <= 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }

    const startPercentage = `${Math.floor(percentage)}%`;
    ratingRef.current.style.width = startPercentage;
  }, [rating, totalStars]);
  return (
    <div className="star-rating">
      <div className={`back-stars ${className}`}>
        {numberOfStar &&
          numberOfStar.map((i) => (
            <Fragment key={i}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}
        <div className={`front-stars ${className}`} ref={ratingRef}>
          {numberOfStar &&
            numberOfStar.map((i) => (
              <Fragment key={i}>
                <i className="fa fa-star" aria-hidden="true"></i>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Rating;
