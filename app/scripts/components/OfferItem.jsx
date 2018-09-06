import React from 'react';
import PropTypes from 'prop-types';

const OfferItem = ({ icon, last, title }) => (
  <div className={`app__offer__item${last ? ' active' : ''}`}>
    <div className="app__offer__item__content">
      <div className="app__offer__item__content__icon mx-auto">
        <img className="app__offer__item__content__icon__img" src={require(`assets/media/icons/${icon}.png`)} alt="No Asset" />
        <div className="app__offer__item__content__icon__active">
          <div className="app__offer__item__content__icon__active__circle" />
          <div className="app__offer__item__content__icon__active__triangle" />
        </div>
      </div>
      <p className="app__offer__item__content__title mx-auto">{title}</p>
      <p className="app__offer__item__content__active mx-auto">See full product overview</p>
    </div>
    <div className="app__offer__item__background">
      Image
      <img src={require(`assets/media/icons/${icon}.png`)} alt="No Asset" />
    </div>
  </div>
);

OfferItem.propTypes = {
  icon: PropTypes.string.isRequired,
  last: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default OfferItem;
