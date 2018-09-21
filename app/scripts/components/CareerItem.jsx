import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const CareerItem = ({ item }) => (
  <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
    <Link to={`/career/${item.id}`}>
      <div className="app__career__item">
        <div className="app__career__item__content">
          <div className="app__career__item__content__info">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
              <p className="app__career__item__content__info__title">{ item.title }</p>
              <p className="app__career__item__content__info__subtitle">{ item.subtitle }</p>
              <div className="app__career__item__content__info__icon">
                <span><i className="i-map-marker" /> { item.location }</span>
                <span><i className="i-clock-o" /> { item.availability }</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="app__career__item__content__button">
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <button className="btn btn__primary" type="button">
                READ MORE
              </button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Link>
  </ScrollAnimation>
);

CareerItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CareerItem;
