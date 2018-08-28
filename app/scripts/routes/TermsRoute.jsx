import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const TermsRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

TermsRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

TermsRoute.defaultProps = {
};

export default TermsRoute;
