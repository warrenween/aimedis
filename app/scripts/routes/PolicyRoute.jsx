import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const PolicyRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

PolicyRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

PolicyRoute.defaultProps = {
};

export default PolicyRoute;
