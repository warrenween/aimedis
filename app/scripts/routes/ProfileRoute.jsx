import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProfileRoute = ({ component: Component, isAuthenticated, to, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
        ? (<Component {...props} />)
        : (
          <Redirect
            to={{
              pathname: to,
              state: { redirect: props.location.pathname, isAuthenticated },
            }}
          />
        )
    )}
  />
);

ProfileRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

ProfileRoute.defaultProps = {
  to: '/',
};

export default ProfileRoute;
