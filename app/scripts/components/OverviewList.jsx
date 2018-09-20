import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Overview from 'components/Overview';
import PropTypes from 'prop-types';

class OverviewList extends React.PureComponent {
  constructor(props) {
    super(props);
    const list = props.list;

    this.state = {
      active: 1,
      list,
    };
  }

  content = () => {
    const { active, list } = this.state;
    const result = [];

    for (let i = 0; i < list.length; i++) {
      result.push(
        <div
          key={i}
          onClick={() => this.activeClick(i + 1)}
          className="app__overview__list__content__item"
        >
          <Overview
            active={active === list[i].id}
            order={list[i].id}
            src={list[i].src}
            subtitle={list[i].subtitle}
            title={list[i].title}
          />
        </div>
      );
    }

    return result;
  };

  activeClick = (index) => {
    this.setState({ active: index });
  };

  render() {
    const { active, list } = this.state;
    const { header, button } = this.props;
    return (
      <div className="app__overview__list">
        <div className="app__overview__list__content">
          <div className="row">
            <div className="col-12 col-lg-5 left">
              {header && <p className="app__overview__list__content__title">{header}</p>}
              {this.content()}
              {button && (
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                  <div className="app__overview__list__content__mobile d-none d-lg-flex">
                    <div className="app__overview__list__content__mobile__button">
                      <img src={require('assets/media/icons/apple-icon.png')} alt="No Asset"/>
                      <div className="app__overview__list__content__mobile__button__title">
                        <p className="app__overview__list__content__mobile__button__title__small">Available on
                          the</p>
                        <p className="app__overview__list__content__mobile__button__title__big">App Store</p>
                      </div>
                    </div>
                    <div className="app__overview__list__content__mobile__button">
                      <img src={require('assets/media/icons/google_play.png')} alt="No Asset"/>
                      <div className="app__overview__list__content__mobile__button__title">
                        <p className="app__overview__list__content__mobile__button__title__small">Available on
                          the</p>
                        <p className="app__overview__list__content__mobile__button__title__big">Google Play</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              )
              }
            </div>
            <div className="col-lg-7 right d-none d-lg-block app__overview__list__content__mobile__image">
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <img src={require(`assets/media/images/${list[active - 1].right}`)} alt="No Asset" />
                <div className="mask">
                  <img src={require('assets/media/images/Group 2.png')} alt="No Asset" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OverviewList.propTypes = {
  button: PropTypes.bool,
  header: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default OverviewList;
