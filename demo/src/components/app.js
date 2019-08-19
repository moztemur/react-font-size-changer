import React, { Component } from 'react';
import Header from './header';
import ExampleOne from './exampleOne';
import ExampleTwo from './exampleTwo';
import ExampleThree from './exampleThree';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="examples">
          <ExampleOne />
          <ExampleTwo />
          <ExampleThree />
        </div>
      </div>
    );
  }
}

export default App;
