import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import Title from 'components/Title';

const InstitutionsItem  = ({ align, description, src, subtitle, title }) => {
  const content1 = (
    <div>
      <Title title={title} subtitle={subtitle} />
      <p className="app__institutions__item__content__info__description">{description}</p>
      <button className="app__institutions__item__content__info__download btn btn__secondary" type="button">DOWNLOAD THE CASE STUDY (8.4 MB)</button>
    </div>
  );

  const content2 = (<img src={require(`assets/media/images/${src}`)} alt="No Asset" />);

  let content = '';

  if (align === 'right') {
    content = (
      <div className="row">
        <div className="col-6 d-none d-lg-flex direction-rtl app__institutions__item__content__image">
          <div className="app__institutions__item__content__image__content">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
              {content2}
            </ScrollAnimation>
          </div>
        </div>
        <div className="col-6 app__institutions__item__content__info">
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
        <div className="col-6 app__institutions__item__content__info">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            {content1}
          </ScrollAnimation>
        </div>
        <div className="col-6 d-none d-lg-flex app__institutions__item__content__image">
          <div className="app__institutions__item__content__image__content">
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              {content2}
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app__institutions__item">
      <div className="app__institutions__item__content">
        {content}
      </div>
    </div>
  );
};

InstitutionsItem.propTypes = {
  align: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default InstitutionsItem;
