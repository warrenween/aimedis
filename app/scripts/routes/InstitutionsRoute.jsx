import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const InstitutionsRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

InstitutionsRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

InstitutionsRoute.defaultProps = {
};

export default InstitutionsRoute;
