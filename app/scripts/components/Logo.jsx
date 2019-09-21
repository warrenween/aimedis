import React from 'react';
import PropTypes from 'prop-types';

import config from 'config';

const Logo = ({ file }) => (
  <div className="app__logo">
    <img src={require(`assets/media/brand/${file}.png`)} alt={config.title} />
  </div>
);

Logo.propTypes = {
  file: PropTypes.string,
};

Logo.defaultProps = {
  file: 'logo_new',
};

export default Logo;
