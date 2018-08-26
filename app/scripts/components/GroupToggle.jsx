import React from 'react';
import GroupToggleItem from 'components/GroupToggleItem';

export default class GroupToggle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  content = () => {
    const { active } = this.state;
    const listGroup1 = [
      {
        id: 0,
        src: 'ProfHeuer.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 1,
        src: 'ProfHeuer.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 2,
        src: 'ProfHeuer.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 3,
        src: 'ProfHeuer.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 4,
        src: 'ProfHeuer.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 5,
        src: 'ProfHeuer.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 6,
        src: 'ProfHeuer.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
    ];
    const listGroup2 = listGroup1;

    const list = active === 0 ? listGroup1 : listGroup2;
    let result = [];

    for (let i = 0; i < list.length; i++) {
      result.push(
        <div className="col-6 col-lg-3">
          <GroupToggleItem src={list[i].src}
                         title={list[i].title}
                         subTitle={list[i].subTitle}
                         facebook={list[i].facebook}
                         linkedin={list[i].linkedin}
          />
        </div>
      );
    }

    return result;
  };

  activeClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { active: 1 - prevState.active };
    });
  };

  render() {
    return (
      <div className="app__group__toggle">
        <div className="app__group__toggle__button" onClick={this.activeClick}>
        </div>
        <div className="app__group__toggle__content">
          <div className="row">
            { this.content() }
          </div>
        </div>
      </div>
    );
  }
}
