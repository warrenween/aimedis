import React from 'react';

export default class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      count: 3,
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

  prev = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ active: (prevState.active + prevState.count - 1) % prevState.count }));
  };

  next = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ active: (prevState.active + 1) % prevState.count }));
  };

  content = () => {
    const list = [
      {
        id: 0,
        src: 'ProfHeuer.png',
        description: '"Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick, easy and efficient treatment."',
        name: 'Rizmy Shariff',
        caption: 'Family doctor Solingen Germany',
      },
      {
        id: 1,
        src: 'yang.png',
        description: '"Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick, easy and efficient treatment."',
        name: 'Rizmy Shariff',
        caption: 'Family doctor Solingen Germany',
      },
      {
        id: 2,
        src: 'DrPhilippi.png',
        description: '"Aimedis supports patients and doctors by making data available quickly and reliable which results in a quick, easy and efficient treatment."',
        name: 'Rizmy Shariff',
        caption: 'Family doctor Solingen Germany',
      },
    ];

    const listItems = list.map((item) => (
      <div className="app__carousel__content__inner__item__content" key={item.id.toString()}>
        <img src={require(`assets/media/images/${item.src}`)} alt="No Carousel" />
        <p className="app__carousel__content__inner__item__description">{ item.description }</p>
        <p className="app__carousel__content__inner__item__name">{ item.name }</p>
        <p className="app__carousel__content__inner__item__caption">{ item.caption }</p>
        <p className="app__carousel__content__inner__item__quotation">&ldquo;</p>
      </div>)
    );

    const { active, count } = this.state;
    const result = [];

    result.push(
      <div className="app__carousel__content__inner__item prev" key="prev">
        <div className="app__carousel__content__indicator__prev" onClick={this.prev}>
          <span className="i-long-arrow-left" />
        </div>
        { listItems[(active + count - 1) % count] }
      </div>
    );

    result.push(
      <div className="app__carousel__content__inner__item active" key="active">
        { listItems[active % count] }
      </div>
    );

    result.push(
      <div className="app__carousel__content__inner__item next" key="next">
        { listItems[(active + 1) % count] }
        <div className="app__carousel__content__indicator__next" onClick={this.next}>
          <span className="i-long-arrow-right" />
        </div>
      </div>
    );

    return result;
  };

  render() {
    return (
      <div className="app__carousel">
        <div className="app__carousel__content">
          <div className="app__carousel__content__inner">
            { this.content() }
          </div>
        </div>
      </div>
    );
  }
}
