import React from 'react';
import PropTypes from 'prop-types';
import { Player } from 'video-react';
import ScrollAnimation from 'react-animate-on-scroll';

class ProductItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  play = () => {
    this.setState({ active: true });
    this.player.play();
  };

  stop = () => {
    this.setState({ active: false });
    this.player.load();
  };

  render() {
    const { active } = this.state;
    const { align, description, link, src, title } = this.props;
    const content1 = (
      <div>
        <p className="app__product__item__content__info__title">{title}</p>
        <div className="app__product__item__content__info__image d-block d-lg-none">
          <img src={require('assets/media/images/mobile.png')} alt="No Asset"/>
        </div>
        <p className="app__product__item__content__info__description">{description}</p>
        <div className="app__product__item__content__info__button" onClick={this.play}>
          <div className="app__product__item__content__info__button__icon">
            <div className="app__product__item__content__info__button__icon__triangle"/>
          </div>
          <p className="app__product__item__content__info__button__text">PLAY VIDEO</p>
        </div>
      </div>
    );

    const content2 = (<img src={require(`assets/media/images/${src}`)} alt="No Asset"/>);

    let content = '';
    let player = (
      <div className={!active ? ' d-none' : ' d-flex'}>
        <div className="app__product__item__content__player">
          <Player
            autoplay
            ref={(element) => this.player = element}
            src={link}
          />
          <div onClick={this.stop} className="app__product__item__content__player__close">
            <i className="i-close" />
          </div>
        </div>
      </div>
    );

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
    }
    else {
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
          {content}
        </div>
        {player}
      </div>
    );
  }
}

ProductItem.propTypes = {
  align: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductItem;
