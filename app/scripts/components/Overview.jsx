import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const Overview = ({ active, link, order, src, subtitle, title }) => (
  <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
    <div className={`app__overview${active ? ' active' : ''}`}>
      <div className="app__overview__internal">
        <div className="app__overview__internal__content">
          <div className="app__overview__internal__content__order">
            <p className="app__overview__internal__content__order__text body">{order}</p>
          </div>
          <div className="app__overview__internal__content__paragraph">
            <p className="app__overview__internal__content__paragraph__title title">{title}</p>
            <p className="app__overview__internal__content__paragraph__subtitle body">{subtitle}</p>
          </div>
          <div className="app__overview__internal__content__next ml-auto">
            <span className="i-long-arrow-right d-none d-lg-inline" />
            <span className="i-long-arrow-down d-inline d-lg-none" />
          </div>
        </div>
      </div>
      <div className="app__overview__external">
        <div className="app__overview__external__image">
          <img src={require(`assets/media/images/${src}`)} alt="No Asset" />
        </div>
        {link && <button className="app__overview__external__download body btn btn__secondary ml-0" type="button">DOWNLOAD THE CASE STUDY (8.4 MB)</button> }
      </div>
    </div>
  </ScrollAnimation>
);

Overview.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
  order: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Overview;
