import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ src }) => (
  <div className="app__avatar">
    <img className="app__avatar__image" src={require(`assets/media/icons/${src}`)} alt="No Avatar" />
  </div>
);

Avatar.propTypes = {
  src: PropTypes.string,
};

Avatar.defaultProps = {
  src: 'fhir.png',
};

export default Avatar;
