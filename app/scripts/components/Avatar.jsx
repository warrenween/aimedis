import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const Avatar = ({ src }) => (
  <div className="app__avatar">
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <img className="app__avatar__image" src={require(`assets/media/icons/${src}`)} alt="No Avatar" />
    </ScrollAnimation>
  </div>
);

Avatar.propTypes = {
  src: PropTypes.string,
};

Avatar.defaultProps = {
  src: 'fhir.png',
};

export default Avatar;
