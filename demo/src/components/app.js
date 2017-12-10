import React, { Component } from 'react';
import { FontSizeChanger } from '../../../dist/bundle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Change the whole text</ div>
        <FontSizeChanger
          targets={['#target']}
          options={{
            stepSize: 2,
            range: 3
          }}
        />
        <div id="target">
          <p style={{'fontSize': '20px', 'fontWeight': 'bold' }}>This is the title of my target text</p>
          <p className="content" style={{'fontSize': '14px'}}>This is the content of my target text</p>
        </div>
        <div>Change content only</ div>
        <FontSizeChanger
          targets={['#target .content']}
          options={{
            stepSize: 2,
            range: 3
          }}
        />
      </div>
    );
  }
}

export default App;
