import React from 'react';
import Logo from 'components/Logo';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="app__footer">
    <div className="container">
      <div className="app__footer__content">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="app__footer__content__logo">
              <Link to='/'>
                <Logo />
              </Link>
            </div>
            <div className="app__footer__content__copyright">
              Copyright 2018 Aimedis B.V.
            </div>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className="app__footer__content__menu">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/product">product</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                    <li><Link to="/about">about us</Link></li>
                    <li><Link to="/institutions">institutions</Link></li>
                    <li><Link to="/token-sale">Token sale</Link></li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/career">Career<span className="separator">|</span><span className="hire">We are hiring!</span></Link></li>
                    <li><Link to="/investor">For investors</Link></li>
                    <li><Link to="/support">Support</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 offset-lg-1">
            <div className="app__footer__content__social">
              <div className="app__footer__content__social__icon">
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/facebook.png')} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/Group 9.png')} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/Group 10.png')} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/Group 11.png')} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/btc.png')} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/medium.png')} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/insta.png')} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/In.png')} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/reddit.png')} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/youtube.png')} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require('assets/media/social/mail.png')} alt='No Image'/>
                </div>
              </div>
              <div className="app__footer__content__social__terms">
                <Link to="/terms">Terms</Link>
                <Link to="/policy">Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
