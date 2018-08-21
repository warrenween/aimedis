import React from 'react';

export default class Carousel extends React.PureComponent {
  render() {
    return (
      <div className="app__carousel">
        <div className="app__carousel__content">
          <div id="testimonialsIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require(`assets/media/images/yang.png`)} alt='First Slide' />
                <p className="carousel-item__description title">"Aimedis supports patients and doctors by making data available quickly and reliable which results in
                  a quick, easy and efficient treatment."</p>
                <p className="carousel-item__name subheader">Rizmy Shariff</p>
                <p className="carousel-item__caption body">Family doctor Solingen Germany</p>
              </div>
              <div className="carousel-item">
                <img src={require(`assets/media/images/ProfHeuer.png`)} alt='Second Slide' />
                <p className="carousel-item__description title">"Aimedis supports patients and doctors by making data available quickly and reliable which results in
                  a quick, easy and efficient treatment."</p>
                <p className="carousel-item__name subheader">Rizmy Shariff</p>
                <p className="carousel-item__caption body">Family doctor Solingen Germany</p>
              </div>
              <div className="carousel-item">
                <img src={require(`assets/media/images/DrPhilippi.png`)} alt="Third Slide" />
                <p className="carousel-item__description title">"Aimedis supports patients and doctors by making data available quickly and reliable which results in
                  a quick, easy and efficient treatment."</p>
                <p className="carousel-item__name subheader">Rizmy Shariff</p>
                <p className="carousel-item__caption body">Family doctor Solingen Germany</p>
              </div>
            </div>
            <a className="carousel-control-prev" href="#testimonialsIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#testimonialsIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
