# React Font Size Changer #

React Font Size Changer is a simple React component including two buttons to increae and decrease font size of a target text.

![](https://img.shields.io/npm/v/react-font-size-changer.svg) ![](https://img.shields.io/travis/mhmtztmr/react-font-size-changer.svg)


[Live Demo](https://moztemur.github.io/react-font-size-changer/demo/)

## Install ##

`npm install --save react-font-size-changer`

## Props ##

### targets ###

Array of CSS query selectors for target elements

### options ###

| property      | detail                                                 | default |
| ------------- |:------------------------------------------------------:| ------- |
| stepSize      | Number of px to change for each action (up/down)       | 2       |
| range         | Max number of changes for both increment and decrement | 3       |

### onChange ###

Handle font size change. Triggered each target element separately.

| param         | detail                                                 |
| ------------- |:------------------------------------------------------:|
| element       | DOM element whose font size has changed                |
| newValue      | New font size for the element                          |
| oldValue      | Old font size for the element                          |

### customButtons ###

| property      | detail                                                 | default |
| ------------- |:------------------------------------------------------:| ------- |
| up            | Font size increaser element                            |         |
| down          | Font size decreaser element                            |         |
| style         | Custom style for each button                           |         |
| buttonsMargin | Margin between buttons                                 | 4px     |


## Example Usage ##

```JavaScript
import React, { Component } from 'react';
import FontSizeChanger from 'react-font-size-changer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <FontSizeChanger
          targets={['#target .content']}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            style: {
              backgroundColor: 'red',
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
          }}          
        />
        <div id="target">
          <p className="title">This is the title of my target text</p>
          <p className="content">This is the content of my target text</p>
        </div>
      </div>
    );
  }
}
```
