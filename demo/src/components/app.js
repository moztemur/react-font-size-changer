import React, { Component } from 'react';
import Header from './header';
import ExampleOne from './exampleOne';
import ExampleTwo from './exampleTwo';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="examples">
          <ExampleOne />
          <ExampleTwo />
        </div>
      </div>
    );
  }
}

export default App;
