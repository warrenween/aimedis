import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const OfferItem = ({ icon, last, title }) => {
  let html = '';
  if (last) {
    html = (
      <Link className="app__offer__item__content" to="/product">
        <p className="app__offer__item__content__active mx-auto">See full product overview</p>
      </Link>
    );
  }
  else {
    html = (
      <div className="app__offer__item__content">
        <div className="app__offer__item__content__icon mx-auto">
          <img className="app__offer__item__content__icon__img" src={require(`assets/media/icons/${icon}.png`)} alt="No Asset" />
          <div className="app__offer__item__content__icon__active">
            <div className="app__offer__item__content__icon__active__circle" />
            <div className="app__offer__item__content__icon__active__triangle" />
          </div>
        </div>
        <p className="app__offer__item__content__title mx-auto">{title}</p>
      </div>
    );
  }
  return (
    <div className={`app__offer__item${last ? ' active' : ''}`}>
      <ScrollAnimation animateIn="flipInY" animateOnce={true}>
        <div className="app__offer__item__background">
          <img src={require('assets/media/images/blog1.png')} alt="No Asset" />
        </div>
        { html }
      </ScrollAnimation>
    </div>
  );
};

OfferItem.propTypes = {
  icon: PropTypes.string.isRequired,
  last: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default OfferItem;
