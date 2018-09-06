import React from 'react';
import PropTypes from 'prop-types';

const StaticItem = ({ icon, title }) => (
  <div className="app__static__item">
    <div className="app__static__item__icon">
      <img className="app__static__item__icon__img" src={require(`assets/media/icons/${icon}.png`)} alt="No Asset"/>
    </div>
    <p className="app__static__item__title">{title}</p>
  </div>
);


StaticItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default StaticItem;
