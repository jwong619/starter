import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <h1> Hello Julia </h1>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));