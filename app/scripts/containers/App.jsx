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
import InstitutionsRoute from 'routes/InstitutionsRoute';
import InvestorRoute from 'routes/InvestorRoute';
import TermsRoute from 'routes/TermsRoute';
import PolicyRoute from 'routes/PolicyRoute';
import BlogRoute from 'routes/BlogRoute';
import BlogDetailRoute from 'routes/BlogDetailRoute';
import CareerRoute from 'routes/CareerRoute';
import CareerDetailRoute from 'routes/CareerDetailRoute';
import ProfileRoute from 'routes/ProfileRoute';

import Home from 'pages/Home';
import Product from 'pages/Product';
import About from 'pages/About';
import Institutions from 'pages/Institutions';
import Investor from 'pages/Investor';
import Terms from 'pages/Terms';
import Policy from 'pages/Policy';
import Profile from 'pages/Profile';
import Blog from 'pages/Blog';
import BlogDetail from 'pages/BlogDetail';
import Career from 'pages/Career';
import CareerDetail from 'pages/CareerDetail';
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
              <ProductRoute isAuthenticated={user.isAuthenticated} path="/product" component={Product} />
              <AboutRoute isAuthenticated={user.isAuthenticated} path="/about" component={About} />
              <InstitutionsRoute isAuthenticated={user.isAuthenticated} path="/institutions" component={Institutions} />
              <InvestorRoute isAuthenticated={user.isAuthenticated} path="/investor" component={Investor} />
              <TermsRoute isAuthenticated={user.isAuthenticated} path="/terms" component={Terms} />
              <PolicyRoute isAuthenticated={user.isAuthenticated} path="/policy" component={Policy} />
              <BlogRoute isAuthenticated={user.isAuthenticated} path="/blog" exact component={Blog} />
              <BlogDetailRoute isAuthenticated={user.isAuthenticated} path="/blog/:id" component={BlogDetail} />
              <CareerRoute isAuthenticated={user.isAuthenticated} path="/career" exact component={Career} />
              <CareerDetailRoute isAuthenticated={user.isAuthenticated} path="/career/:id" component={CareerDetail} />
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
