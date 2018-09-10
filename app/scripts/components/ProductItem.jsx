import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const ProductItem = ({ align, description, src, title }) => {
  const content1 = (
    <div>
      <p className="app__product__item__content__info__title">{title}</p>
      <div className="app__product__item__content__info__image d-block d-lg-none">
        <img src={require('assets/media/images/mobile.png')} alt="No Asset" />
      </div>
      <p className="app__product__item__content__info__description">{description}</p>
      <div className="app__product__item__content__info__button">
        <div className="app__product__item__content__info__button__icon">
          <div className="app__product__item__content__info__button__icon__triangle" />
        </div>
        <p className="app__product__item__content__info__button__text">PLAY VIDEO</p>
      </div>
    </div>
  );

  const content2 = (<img src={require(`assets/media/images/${src}`)} alt="No Asset" />);

  let content = '';

  if (align === 'right') {
    content = (
      <div className="row">
        <div className="col-6 d-none d-lg-flex direction-rtl">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            {content2}
          </ScrollAnimation>
        </div>
        <div className="col-12 col-lg-6 p-lg-0 app__product__item__content__info">
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            {content1}
          </ScrollAnimation>
        </div>
      </div>
    );
  } else if (align === 'left') {
    content = (
      <div className="row">
        <div className="col-12 col-lg-6 p-lg-0 app__product__item__content__info">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            {content1}
          </ScrollAnimation>
        </div>
        <div className="col-6 d-none d-lg-flex">
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            {content2}
          </ScrollAnimation>
        </div>
      </div>
    );
  }

  return (
    <div className="app__product__item">
      <div className="app__product__item__content">
        { content }
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  align: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductItem;
