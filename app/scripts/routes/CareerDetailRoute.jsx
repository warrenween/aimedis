import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const BlogDetailRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (<Component {...props} />)
    }
  />
);

BlogDetailRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

BlogDetailRoute.defaultProps = {
};

export default BlogDetailRoute;
