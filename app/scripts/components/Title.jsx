import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const Title = ({ subtitle, title }) => (
  <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
    <div className="app__title">
      <p className="app__title__subtitle">{subtitle}</p>
      <p className="app__title__title">{title}</p>
    </div>
  </ScrollAnimation>
);


Title.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
