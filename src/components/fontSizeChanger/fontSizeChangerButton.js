import React, { Component } from 'react';
import { CHANGE_DIRECTION } from '../../consts/consts';

// const MySvg = require('../../icons/letter.svg');

class FontSizeChangerButton extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick } = this.props;

    onClick();
  }

  getDefaultButtonContent() {
    const { direction } = this.props;
    const size = direction === CHANGE_DIRECTION.UP ? '36px' : '20px';

    // return <MySvg width={size} height={size} />;
    return <span style={{'fontSize': size}}>A</span>;
  }

  render() {
    const { direction } = this.props;
    const {
      style = {},
      customButton = this.getDefaultButtonContent()
    } = this.props;

    return (
      <div
        className={`font-size-${direction}`}
        style={style}
        onClick={this.onClick}>
        {customButton}
      </div>
    );
  }
}

export default FontSizeChangerButton;
