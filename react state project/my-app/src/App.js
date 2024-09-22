import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Software Engineer',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer'
      },
      shows: false,
      mountedAt: new Date().getTime()
    };
  }

  componentDidMount() {
    this.setState({
      mountedAt: new Date().getTime()
    });
  }

  toggleShow = () => {
    this.setState({
      shows: !this.state.shows
    });
  }

  render() {
    const { person, shows, mountedAt } = this.state;
    const timeInterval = new Date().getTime() - mountedAt;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time interval since last component was mounted: {timeInterval} ms</p>
      </div>
    );
  }
}

export default App;