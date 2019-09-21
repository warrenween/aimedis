import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

HomeRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

HomeRoute.defaultProps = {
};

export default HomeRoute;
