import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const ProductRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

ProductRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

ProductRoute.defaultProps = {
};

export default ProductRoute;
