import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontSizeChanger } from '../../../dist/bundle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FontSizeChanger
          targets={['#target']}
          options={{
            stepSize: 2,
            range: 3
          }}
        />
        <div id="target" style={{'fontSize': '3em'}}>
          This is my target text
        </div>
      </div>
    );
  }
}

export default App;
