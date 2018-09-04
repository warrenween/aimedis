import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title';

export default class InstitutionsItem extends React.PureComponent {
  static propTypes = {
    align: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, subtitle, description, src, align } = this.props;

    const content1 = (
      <div className="col-6 app__institutions__item__content__info">
        <Title title={title} subtitle={subtitle} />
        <p className="app__institutions__item__content__info__description">{description}</p>
        <button className="app__institutions__item__content__info__download btn btn__secondary" type="button">DOWNLOAD THE CASE STUDY (8.4 MB)</button>
      </div>
    );

    const content2 = (<img src={require(`assets/media/images/${src}`)} alt="No Asset" />);

    return (
      <div className="app__institutions__item">
        <div className="app__institutions__item__content">
          <div className="row">
            {align === 'right' && <div className="col-6 direction-rtl app__institutions__item__content__image"> {content2} </div>}
            {content1}
            {align === 'left' && <div className="col-6 app__institutions__item__content__image"> {content2} </div>}
          </div>
        </div>
      </div>
    );
  }
}
