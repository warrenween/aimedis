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
        src: 'team1.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 1,
        src: 'team2.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 2,
        src: 'team1.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 3,
        src: 'team3.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 4,
        src: 'team5.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 5,
        src: 'team1.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
      {
        id: 6,
        src: 'team4.png',
        title: 'Dr. Michael J. Kaldasch',
        subTitle: 'CEO, MD & founder',
        facebook: '',
        linkedin: '',
      },
    ];
    const listGroup2 = listGroup1;

    const list = active === 0 ? listGroup1 : listGroup2;
    const result = [];

    for (let i = 0; i < list.length; i++) {
      result.push(
        <div className="col-6 col-lg-3" key={i}>
          <GroupToggleItem
            src={list[i].src}
            title={list[i].title}
            subTitle={list[i].subTitle}
            facebook={list[i].facebook}
            linkedin={list[i].linkedin}
            key={i}
          />
        </div>
      );
    }

    result.push(
      <div className="col-6 col-lg-3" key={7}>
        <GroupToggleItem
          src="team_mask.png"
          title="Join our team"
          subTitle="SEE ALL POSITIONS"
          key={7}
          last={true}
        />
      </div>
    );

    return result;
  };

  activeClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ active: 1 - prevState.active }));
  };

  render() {
    const { active } = this.state;

    return (
      <div className="app__group__toggle">
        <div className="app__group__toggle__button" onClick={this.activeClick}>
          <div className={`app__group__toggle__button__team${active ? ' active' : ''}`}>
            <span>TEAM</span>
          </div>
          <div className={`app__group__toggle__button__board${!active ? ' active' : ''}`}>
            <span>BOARD</span>
          </div>
        </div>
        <div className="app__group__toggle__content">
          <div className="row">
            {this.content()}
          </div>
        </div>
      </div>
    );
  }
}
