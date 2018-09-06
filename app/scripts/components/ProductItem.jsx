import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ align, description, src, title }) => {
  const content1 = (
    <div className="col-12 col-lg-6 p-lg-0 app__product__item__content__info">
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

  return (
    <div className="app__product__item">
      <div className="app__product__item__content">
        <div className="row">
          {align === 'right' && <div className="col-6 d-none d-lg-flex direction-rtl"> {content2} </div>}
          {content1}
          {align === 'left' && <div className="col-6 d-none d-lg-flex"> {content2} </div>}
        </div>
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
