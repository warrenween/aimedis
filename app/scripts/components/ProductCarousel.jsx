import React from 'react';
import ProductItem from 'components/ProductItem';

export default class ProductCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: 2,
      count: 6,
    };
  }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.next(),
    //   5000
    // );
  }

  componentWillUnmount() {
    // clearInterval(this.timerID);
  }

  activeClick = (index, e) => {
    e.preventDefault();
    this.setState(() => ({ active: index }));
  };

  content = () => {
    const list = [
      {
        id: 0,
        src: 'Product1.png',
        title: 'Your health data in one place.',
        description: 'Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.',
        align: 'left',
      },
      {
        id: 1,
        src: 'Product2.png',
        title: 'Video chat with doctor.',
        description: 'Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.',
        align: 'right',
      },
      {
        id: 2,
        src: 'Product1.png',
        title: 'Independent Second Opinion.',
        description: 'Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.',
        align: 'left',
      },
      {
        id: 3,
        src: 'Product2.png',
        title: 'Video chat with doctor.',
        description: 'Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.',
        align: 'right',
      },
      {
        id: 4,
        src: 'Product1.png',
        title: 'Independent Second Opinion.',
        description: 'Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.',
        align: 'left',
      },
      {
        id: 5,
        src: 'Product2.png',
        title: 'Video chat with doctor.',
        description: 'Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.',
        align: 'right',
      },
    ];

    const listItems = list.map((item) => (
      <ProductItem
        title={item.title}
        description={item.description}
        src={item.src}
        align={item.align}
        key={item.title}
      />
    ));

    const { active, count } = this.state;
    const result = [];

    for (let i = 0; i < count; i++) {
      let flag = '';
      if (i === (active + count - 1) % count) {
        flag = ' prev';
      }

      if (i === active) {
        flag = ' active';
      }

      if (i === (active + 1) % count) {
        flag = ' next';
      }

      result.push(
        <div className={`app__product__carousel__content__inner__item${flag}`} key={i}>
          { listItems[i] }
        </div>
      );
    }

    return result;
  };

  indicator = () => {
    const { active, count } = this.state;
    const result = [];

    for (let i = 0; i < count; i++) {
      result.push(
        <div className={`app__product__carousel__content__external__content__item${active === i ? ' active' : ''}`} key={i} onClick={(e) => this.activeClick(i, e)} />
      );
    }

    return result;
  };

  render() {
    return (
      <div className="app__product__carousel">
        <div className="app__product__carousel__content">
          <div className="app__product__carousel__content__inner">
            { this.content() }
          </div>
          <div className="app__product__carousel__content__external d-block d-lg-none">
            <div className="app__product__carousel__content__external__content">
              { this.indicator() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
