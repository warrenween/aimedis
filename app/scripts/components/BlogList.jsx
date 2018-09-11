import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import BlogItem from 'components/BlogItem';

class BlogList extends React.PureComponent {
  constructor(props) {
    super(props);
    let list = [];
    const count = 100;
    for (let i = 0; i < count; i++) {
      list.push({
        description: 'Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick supports patients and doctors by',
        id: i,
        src: 'blog1.png',
        title: 'Why Japan, the Tech giant, still needs to improve Health Tech',
      });
    }

    this.state = {
      active: 1,
      count: count,
      list: list,
    };
  }

  activeClick = (index) => {
    this.setState({ active: index });
  };

  prev = () => {
    this.setState((state) => ({ active: (state.active === 1 ? 1 : state.active - 1) }));
  };

  next = () => {
    const { active, count } = this.state;
    const buttonCount = Math.ceil(count / 9);
    this.setState({ active: (active === buttonCount ? buttonCount : active + 1) });
  };

  content = () => {
    const { active, count, list } = this.state;
    const result = [];
    const start = active * 9 - 9;
    const end = active * 9 > count ? count : active * 9;

    for (let i = start; i < end; i++) {
      const item = {
        id: i + 1,
        title: list[i].title,
        description: list[i].description,
        src: list[i].src,
      };
      result.push(
        <div className="col-12 col-lg-4" key={i}>
          <BlogItem
            item={item}
          />
        </div>
      );
    }

    return result;
  };

  item = (active, i) => (<div className={`app__blog__list__pagination__item${active === i ? ' active' : ''}`} key={i} onClick={() => this.activeClick(i)}>{i}</div>);

  pagination = () => {
    const { active, count } = this.state;
    const result = [];
    const buttonCount = Math.ceil(count / 9);
    if (buttonCount === 1) {
      return '';
    }

    result.push(<div className="app__blog__list__pagination__prev" key="prev" onClick={this.prev}>&lt;</div>);
    result.push(this.item(active, 1));

    const prev = <div className="app__blog__list__pagination__abbr abbr" key="prev_abbr">...</div>;
    const next = <div className="app__blog__list__pagination__abbr abbr" key="next_abbr">...</div>;

    if (buttonCount < 8) {
      for (let i = 2; i < buttonCount; i++) {
        result.push(this.item(active, i));
      }
    }
    else if (active < 5) {
      for (let i = 2; i <= 5; i++) {
        result.push(this.item(active, i));
      }
      result.push(next);
    }
    else if (active > buttonCount - 4) {
      result.push(prev);
      for (let i = buttonCount - 4; i < buttonCount; i++) {
        result.push(this.item(active, i));
      }
    }
    else {
      result.push(prev);
      result.push(this.item(active, active - 1));
      result.push(this.item(active, active));
      result.push(this.item(active, active + 1));
      result.push(next);
    }

    result.push(this.item(active, buttonCount));
    result.push(<div className="app__blog__list__pagination__next" key="next" onClick={this.next}>&gt;</div>);
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
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="app__blog__list__pagination d-none d-lg-flex">
            {this.pagination()}
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default BlogList;
