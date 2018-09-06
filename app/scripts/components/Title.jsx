import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ subtitle, title }) => (
  <div className="app__title">
    <p className="app__title__subtitle">{subtitle}</p>
    <p className="app__title__title">{title}</p>
  </div>
);


Title.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
