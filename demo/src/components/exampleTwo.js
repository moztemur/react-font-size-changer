import React, { Component } from 'react';
import { FontSizeChanger } from '../../../dist/bundle';
import FontAwesome from 'react-fontawesome';
import Highlight from 'react-highlight';

class ExampleTwo extends Component {
  render() {
    return (
      <div className="example">
        <div className="title">2. Custom buttons</ div>
        <div className="code">
          <Highlight>{`
<FontSizeChanger
  targets={['#target-two .content']}
  customButtons={{
    up: <FontAwesome name='search-plus' />,
    down: <FontAwesome name='search-minus' />,
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
<div id="target-two">
  <p className="title">This is the title of my target text</p>
  <p className="content">This is the content of my target text</p>
</div>
          `}</Highlight>
        </ div>
        <FontSizeChanger
          targets={['#target-two .content']}
          customButtons={{
            up: <FontAwesome name='search-plus' />,
            down: <FontAwesome name='search-minus' />,
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
        <div id="target-two">
          <p className="title">This is the title of my target text</p>
          <p className="content">This is the content of my target text</p>
        </div>
      </div>
    );
  }
}

export default ExampleTwo;
