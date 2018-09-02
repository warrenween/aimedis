import React from 'react';
import BlogItem from 'components/BlogItem';

export default class BlogList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
      count: 100,
    };
  }

  activeClick = (index, e) => {
    e.preventDefault();
    this.setState(() => {
      return { active: index };
    });
  };

  prev = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { active: (prevState.active === 1 ? 1 : prevState.active - 1) };
    });
  };

  next = (e) => {
    e.preventDefault();
    const { active, count } = this.state;
    const buttonCount = Math.ceil(count / 9);
    this.setState({ active: (active === buttonCount ? buttonCount : active + 1) });
  };

  content = () => {
    const list = [
      {
        id: 0,
        title: 'Why Japan, the Tech giant, still needs to improve Health Tech',
        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
        src: 'blog1.png',
      },
      {
        id: 1,
        title: 'Why diagnosing leprosy in the Philippines is not a big problem any more: Learns',
        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
        src: 'blog2.png',
      },
      {
        id: 2,
        title: 'Why diagnosing leprosy in the Philippines is not a big problem any more: Learns',
        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
        src: 'blog3.png',
      },
      {
        id: 3,
        title: 'Why Japan, the Tech giant, still needs to improve Health Tech',
        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
        src: 'blog1.png',
      },
      {
        id: 4,
        title: 'Why diagnosing leprosy in the Philippines is not a big problem any more: Learns',
        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
        src: 'blog2.png',
      },
      {
        id: 5,
        title: 'Why diagnosing leprosy in the Philippines is not a big problem any more: Learns',
        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
        src: 'blog3.png',
      },
      {
        id: 6,
        title: 'Why Japan, the Tech giant, still needs to improve Health Tech',
        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
        src: 'blog1.png',
      },
      {
        id: 7,
        title: 'Why diagnosing leprosy in the Philippines is not a big problem any more: Learns',
        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
        src: 'blog2.png',
      },
      {
        id: 8,
        title: 'Why diagnosing leprosy in the Philippines is not a big problem any more: Learns',
        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
        src: 'blog3.png',
      },
    ];

    const { active } = this.state;
    let result = [];

    for (let i = 0; i < 9; i++) {
      result.push(
        <div className="col-12 col-lg-4" key={i}>
          <BlogItem item={{
            id: i + 1,
            title: list[i + (active - 1) * 9].title,
            description: list[i + (active - 1) * 9].description,
            src: list[i + (active - 1) * 9].src,
          }}/>
        </div>
      );
    }

    return result;
  };

  pagination = () => {
    const { active, count } = this.state;
    let result = [];
    result.push(<div className="app__blog__list__pagination__item prev" key='prev' onClick={this.prev}>&lt;</div>);

    const buttonCount = Math.ceil(count / 9);

    if (buttonCount === 1) {
      return '';
    }

    if (buttonCount < 8) {
      for (let i = 1; i <= buttonCount; i++) {
        result.push(<div className="app__blog__list__pagination__item" key={i} onClick={(e) => this.activeClick(i, e)}>{i}</div>);
      }
    } else if (active < 5) {
      for (let i = 1; i <= 5; i++) {
        result.push(<div className={"app__blog__list__pagination__item" + (active === i ? ' active' : '')} key={i} onClick={(e) => this.activeClick(i, e)}>{i}</div>);
      }
      result.push(<div className="app__blog__list__pagination__item abbr" key='next_abbr'>...</div>);
      result.push(<div className="app__blog__list__pagination__item" key={buttonCount} onClick={(e) => this.activeClick(buttonCount, e)}>{buttonCount}</div>);
    } else if (active > buttonCount - 4) {
      result.push(<div className="app__blog__list__pagination__item" key={1} onClick={(e) => this.activeClick(1, e)}>1</div>);
      result.push(<div className="app__blog__list__pagination__item abbr" key='prev_abbr'>...</div>);
      for (let i = buttonCount - 4; i <= buttonCount; i++) {
        result.push(<div className={"app__blog__list__pagination__item" + (active === i ? ' active' : '')} key={i} onClick={(e) => this.activeClick(i, e)}>{i}</div>);
      }
    } else {
      result.push(<div className="app__blog__list__pagination__item" key={1} onClick={(e) => this.activeClick(1, e)}>1</div>);
      result.push(<div className="app__blog__list__pagination__item abbr" key='prev_abbr'>...</div>);
      for (let i = active - 1; i <= active + 1; i++) {
        result.push(<div className={"app__blog__list__pagination__item" + (active === i ? ' active' : '')} key={i} onClick={(e) => this.activeClick(i, e)}>{i}</div>);
      }
      result.push(<div className="app__blog__list__pagination__item abbr" key='next_abbr'>...</div>);
      result.push(<div className="app__blog__list__pagination__item" key={buttonCount} onClick={(e) => this.activeClick(buttonCount, e)}>{buttonCount}</div>);
    }

    result.push(<div className="app__blog__list__pagination__item next" key='next' onClick={this.next}>&gt;</div>);
    return result;
  };

  render() {
    return (
      <div className="app__blog__list">
        <div className="app__blog__list__content">
          <div className="row">
            {this.content()}
          </div>
        </div>
        <div className="app__blog__list__pagination d-none d-lg-flex">
          {this.pagination()}
        </div>
      </div>
    );
  }
}
