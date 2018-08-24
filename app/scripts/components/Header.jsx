import React from 'react';
import PropTypes from 'prop-types';

import { login, logOut } from 'actions';
import Logo from 'components/Logo';
import { connect } from 'react-redux';

export class Header extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleClick = (e) => {
    e.preventDefault();
    const { user, dispatch } = this.props;

    if (user.isAuthenticated) {
      dispatch(logOut());
    } else {
      dispatch(login());
    }
  };

  render() {
    const { user } = this.props;

    return (
      <header className="app__header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <Logo />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target=".app__header__menubar" aria-controls="app__header__menubar" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end app__header__menubar">
            <ul className="justify-content-between navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/institutions">Institutions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/token-sale">Token sale</a>
              </li>
            </ul>
            <form className="form-inline">
              <button className="btn btn__secondary app__header__login mx-xl-3 mx-auto" onClick={this.handleClick}>{user.isAuthenticated ? 'LogOut' : 'LogIn'}</button>
            </form>
          </div>

        </nav>
      </header>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Header);
