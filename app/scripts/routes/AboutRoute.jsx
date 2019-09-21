import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const AboutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

AboutRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

AboutRoute.defaultProps = {
};

export default AboutRoute;
