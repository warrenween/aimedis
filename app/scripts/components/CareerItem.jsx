import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const CareerItem = ({ item }) => (
  <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
    <div className="app__career__item">
      <div className="app__career__item__content">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <div className="app__career__item__content__info">
            <p className="app__career__item__content__info__title">{ item.title }</p>
            <p className="app__career__item__content__info__subtitle">{ item.subtitle }</p>
            <div className="app__career__item__content__info__icon">
              <span><i className="i-map-marker" /> { item.location }</span>
              <span><i className="i-clock-o" /> { item.availability }</span>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <div className="app__career__item__content__button">
            <Link className="btn btn__primary" to={`/career/${item.id}`}>
              READ MORE
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </ScrollAnimation>
);

CareerItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CareerItem;
