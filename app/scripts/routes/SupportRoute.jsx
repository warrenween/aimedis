import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const SupportRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

SupportRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

SupportRoute.defaultProps = {
};

export default SupportRoute;
