# React Font Size Changer #

React Font Size Changer is a simple React component including two buttons to increae and decrease font size of a target text.

## Props ##

### targets ###

Array of CSS query selectors for target elements

### options ###

| option        | detail                                                 | default |
| ------------- |:------------------------------------------------------:| ------- |
| stepSize      | Number of px to change for each action (up/down)       | 2       |
| range         | Max number of changes for both increment and decrement | 3       |

## Example Usage ##

```JavaScript
import React, { Component } from 'react';
import { FontSizeChanger } from 'react-font-size-changer';

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
```
