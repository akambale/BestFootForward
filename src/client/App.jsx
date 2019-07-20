import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleState: 'this is some example state',
    };
  }

  render() {
    return <div className='sassyDiv'>{`React is working ${this.state.exampleState}`}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
