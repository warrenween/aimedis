import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { login, logOut } from 'actions';
import Logo from 'components/Logo';

export class Header extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleLogIn = () => {
    const { dispatch } = this.props;
    dispatch(login());
  };

  handleLogOut = () => {
    const { dispatch } = this.props;
    dispatch(logOut());
  };

  closeClick = () => {
    window.scroll(0, 0);
  };

  list = (type) => {
    const { router } = this.props;
    const path = router.location.pathname;
    const list = [
      {
        link: '/',
        title: 'Home',
      },
      {
        link: '/product',
        title: 'Product',
      },
      {
        link: '/blog',
        title: 'Blog',
      },
      {
        link: '/about',
        title: 'About us',
      },
      {
        link: '/institutions',
        title: 'Institutions',
      },
      {
        link: '/token-sale',
        title: 'Token sale',
      },
      {
        link: '/contact',
        title: 'Contact us',
      },
      {
        link: '/career',
        title: 'Career',
      },
      {
        link: '/investor',
        title: 'For investors',
      },
      {
        link: '/support',
        title: 'Support',
      },
    ];
    const result = [];

    if (type === 'web') {
      for (let i = 0; i < 6; i++) {
        result.push(
          <li className={`nav-item${list[i].link === path ? ' active' : ''}`} key={list[i].title}>
            <Link className="nav-link" to={list[i].link}>{list[i].title}</Link>
          </li>
        );
      }
    }

    if (type === 'mobile') {
      for (let i = 0; i < 10; i++) {
        result.push(
          <li className={`nav-item${i === 6 && ' mt-5'}`} key={list[i].title}>
            <a className="nav-link" href={list[i].link}>
              {list[i].title}
              {(i === 7) && <span className="separator">|</span>}
              {(i === 7) && <span className="hire">We are hiring!</span>}
            </a>
          </li>
        );
      }
    }

    return result;
  };

  render() {
    const { user } = this.props;

    return (
      <header className="app__header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>
          <button
            className="navbar-toggler" type="button" data-toggle="collapse"
            data-target=".app__header__menubar" aria-controls="app__header__menubar" aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end app__header__menubar">
            <ul className="justify-content-between navbar-nav d-none d-lg-flex">
              { this.list('web') }
            </ul>
            <form className="form-inline app__header__menubar__form">
              { user.isAuthenticated && <button type="button" className="btn btn__secondary app__header__menubar__form__logout mx-xl-3" onClick={this.handleLogOut}>LogOut</button> }
              { !user.isAuthenticated && <button type="button" className="btn btn__secondary app__header__menubar__form__login mx-xl-3" onClick={this.handleLogIn}>LogIn</button> }
              <button
                className="navbar-toggler app__header__menubar__form__close" type="button" data-toggle="collapse"
                data-target=".app__header__menubar" aria-controls="app__header__menubar" onClick={this.closeClick}
              >
                <i className="i-close" />
              </button>
            </form>
            <div className="app__header__menubar__footer d-block d-lg-none">
              <hr />
              <ul>
                { this.list('mobile') }
              </ul>
            </div>
          </div>
        </nav>

      </header>
    );
  }
}

export default Header;
