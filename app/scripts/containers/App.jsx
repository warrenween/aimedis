import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Helmet from 'react-helmet';
import cx from 'classnames';
import treeChanges from 'tree-changes';
import history from 'modules/history';

import config from 'config';
import { showAlert } from 'actions';

import HomeRoute from 'routes/HomeRoute';
import ProductRoute from 'routes/ProductRoute';
import AboutRoute from 'routes/AboutRoute';
import ProfileRoute from 'routes/ProfileRoute';

import Home from 'pages/Home';
import Product from 'pages/Product';
import About from 'pages/About';
import Profile from 'pages/Profile';
import NotFound from 'pages/NotFound';

import SystemAlerts from 'containers/SystemAlerts';

import Header from 'components/Header';
import Footer from 'components/Footer';

export class App extends React.Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { changedTo } = treeChanges(this.props, nextProps);

    /* istanbul ignore else */
    if (changedTo('user.isAuthenticated', true)) {
      dispatch(showAlert('Welcome!', { type: 'success', icon: 'i-trophy' }));
    }
  }

  render() {
    const { app, dispatch, user } = this.props;

    return (
      <ConnectedRouter history={history}>
        <div
          className={cx('app', {
            'app--private': user.isAuthenticated,
          })}
        >
          <Helmet
            defer={false}
            htmlAttributes={{ lang: 'pt-br' }}
            encodeSpecialCharacters={true}
            defaultTitle={config.title}
            titleTemplate={`%s | ${config.name}`}
            titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
          />
          <Header dispatch={dispatch} user={user} />
          <main className="app__main">
            <Switch>
              <HomeRoute isAuthenticated={user.isAuthenticated} path="/" exact component={Home} />
              <ProductRoute isAuthenticated={user.isAuthenticated} path="/product" exact component={Product} />
              <AboutRoute isAuthenticated={user.isAuthenticated} path="/about" exact component={About} />
              <ProfileRoute isAuthenticated={user.isAuthenticated} path="/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
          <SystemAlerts alerts={app.alerts} dispatch={dispatch} />
        </div>
      </ConnectedRouter>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
