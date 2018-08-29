import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const CareerRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

CareerRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

CareerRoute.defaultProps = {
};

export default CareerRoute;
