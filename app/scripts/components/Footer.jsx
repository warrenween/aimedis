import React from 'react';
import Logo from 'components/Logo';

const Footer = () => (
  <footer className="app__footer">
    <div className="container">
      <div className="app__footer__content">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="app__footer__content__logo">
              <Logo />
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
                    <li>home</li>
                    <li>product</li>
                    <li>blog</li>
                    <li>about us</li>
                    <li>institutions</li>
                    <li>Token sale</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Contact us</li>
                    <li>Career<span className="separator">|</span><span className="hire">We are hiring!</span></li>
                    <li>For investors</li>
                    <li>Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 offset-lg-1">
            <div className="app__footer__content__social">
              <div className="app__footer__content__social__icon">
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/facebook.png`)} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/Group 9.png`)} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/Group 10.png`)} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/Group 11.png`)} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/btc.png`)} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/medium.png`)} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/insta.png`)} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/In.png`)} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/reddit.png`)} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/youtube.png`)} alt='No Image'/>
                </div>
                <div className="app__footer__content__social__icon__item">
                  <img src={require(`assets/media/social/mail.png`)} alt='No Image'/>
                </div>
              </div>
              <div className="app__footer__content__social__terms">
                <span>Terms</span>
                <span>Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
