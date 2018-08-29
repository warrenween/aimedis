import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const BlogRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

BlogRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

BlogRoute.defaultProps = {
};

export default BlogRoute;
