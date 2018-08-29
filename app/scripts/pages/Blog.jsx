import React from 'react';
import BlogList from 'components/BlogList';

export default class Blog extends React.PureComponent {
  render() {
    return (
      <div key="Blog" className="app__blog app__route">
        <div className="container">
          <section className="app__blog__section1">
            <div className="app__blog__section1__mobile d-block d-lg-none">
              <p className="app__blog__section1__mobile__subtitle">Featured post</p>
              <p className="app__blog__section1__mobile__title">AR and VR are the new tools in your doctor’s bag</p>
            </div>
            <div className="app__blog__section1__content">
              <div className="row">
                <div className="col-12 col-lg-8 app__blog__section1__content__image">
                  <img src={require('assets/media/images/featrued_blog.png')} alt='No Image'/>
                </div>
                <div className="col-12 col-lg-4 app__blog__section1__content__info">
                  <p className="app__blog__section1__content__info__subtitle d-none d-lg-block">Featured post</p>
                  <p className="app__blog__section1__content__info__title d-none d-lg-block">AR and VR are the new tools in your doctor’s bag</p>
                  <p className="app__blog__section1__content__info__description">Medicine has always been an obscure discipline to practise. A doctor has been looking at with awe and respect.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="app__blog__section2">
            <BlogList />
          </section>
        </div>
      </div>
    );
  }
}
