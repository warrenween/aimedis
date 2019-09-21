import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const InvestorRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

InvestorRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

InvestorRoute.defaultProps = {
};

export default InvestorRoute;
