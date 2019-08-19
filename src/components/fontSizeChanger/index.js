import React, { Component } from 'react';
import FontSizeChangerButton from './fontSizeChangerButton';
import { CHANGE_DIRECTION } from '../../consts/consts';

import '../../styles/main.scss';

const defaultButtonWidth = '40px';
const defaultButtonHeight = '40px';
const defaultButtonsMargin = 4;

class FontSizeChanger extends Component {
  constructor() {
    super();
    this.handleChange.bind(this);
    this.setChangeDirection.bind(this);
    this.state = {
      options: {
        stepSize: 2,
        range: 3
      },
      changeCount: 0,
      changeDirection: null
    };
  }

  handleChange(element, newSize, oldSize) {
    if (this.props.onChange) {
      const { onChange } = this.props;
      onChange(element, newSize, oldSize);
    }
  }

  componentDidMount() {
    const { options } = this.props;

    this.setState({
      options: Object.assign({}, this.state.options, options)
    });
  }

  getFontSizeDetails(fontSize) {
    const value = parseFloat(fontSize);
    const unit = fontSize.toString().replace(value.toString(), '');

    return {
      value,
      unit
    };
  }

  applyFontSize(el) {
    const { stepSize } = this.state.options;
    const { changeDirection } = this.state;
    const change = changeDirection === CHANGE_DIRECTION.UP ? stepSize : stepSize * (-1);
    const style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    const { value } = this.getFontSizeDetails(style);
    const newFontSize = value + change;

    el.style.fontSize = newFontSize + 'px';

    if (newFontSize !== value) {
      this.handleChange(el, newFontSize, value);
    }
  }

  iterateChildren(element) {
    this.applyFontSize(element);
    if (!element.children || element.children.length === 0) return;

    for (let child of element.children) {
      this.iterateChildren(child);
    }
  }

  updateChangeCount() {
    const { changeCount, changeDirection } = this.state;
    const change = changeDirection === CHANGE_DIRECTION.UP ? 1 : -1;

    this.setState({
      changeCount: changeCount + change
    });
  }

  iterateElementsAndApplyFontSizeChange() {
    const { targets } = this.props;

    for (let target of targets) {
      const elements = document.querySelectorAll(target);

      for (let element of elements) {
        this.iterateChildren(element);
      }
    }

    this.updateChangeCount();
  }

  validateChangePerRange() {
    const { changeCount, changeDirection } = this.state;
    const { range } = this.state.options;
    let isValid = true;

    if (changeDirection === CHANGE_DIRECTION.UP && changeCount >= range) {
      isValid = false;
    }
    if (changeDirection === CHANGE_DIRECTION.DOWN && changeCount <= range * (-1)) {
      isValid = false;
    }

    return isValid;
  }

  initFontSizeChange() {
    this.validateChangePerRange() && this.iterateElementsAndApplyFontSizeChange();
  }

  setChangeDirection(up, cb) {
    const changeDirection = up ? CHANGE_DIRECTION.UP : CHANGE_DIRECTION.DOWN;

    this.setState({
      changeDirection: changeDirection
    }, cb);
  }

  onFontSizeUp() {
    this.setChangeDirection(true, this.initFontSizeChange);
  }

  onFontSizeDown() {
    this.setChangeDirection(false, this.initFontSizeChange);
  }

  getFontSizeChangerStyle(customButtons) {
    const {
      style = {},
      verticalAlignment = false,
      buttonsMargin = defaultButtonsMargin
    } = customButtons;

    const buttonWidth = this.getFontSizeDetails(style.width || defaultButtonWidth);
    const buttonHeight = this.getFontSizeDetails(style.height || defaultButtonHeight);
    const containerWidth =
      (verticalAlignment === false ?
        buttonWidth.value * 2 + buttonsMargin :
        buttonWidth.value) + buttonWidth.unit;

    const containerHeight =
      (verticalAlignment === false ?
        buttonHeight.value :
        buttonHeight.value * 2 + buttonsMargin) + buttonHeight.unit;

    return {
      width: containerWidth,
      height: containerHeight
    };
  }

  getFontSizeChangerButtonStyle(direction, customButtons) {
    const {
      style = {},
      verticalAlignment = false,
      reverseOrder = false,
      buttonsMargin = defaultButtonsMargin
    } = customButtons;
    const buttonWidth = this.getFontSizeDetails(style.width || defaultButtonWidth);
    const buttonHeight = this.getFontSizeDetails(style.height || defaultButtonHeight);
    const buttonStyle = {
      width: buttonWidth.value + buttonWidth.unit,
      height: buttonHeight.value + buttonHeight.unit
    };

    const marginUnit = verticalAlignment === false ? buttonWidth.unit : buttonHeight.unit;
    const margin = buttonsMargin + marginUnit;

    if ((direction === CHANGE_DIRECTION.UP && reverseOrder === false) ||
      (direction === CHANGE_DIRECTION.DOWN && reverseOrder === true)) {
      if (verticalAlignment === false) {
        buttonStyle.marginRight = margin;
      } else {
        buttonStyle.marginBottom = margin;
      }
    }

    return Object.assign({}, style, buttonStyle);
  }

  render() {
    const { customButtons = {} } = this.props;
    const {
      up,
      down
    } = customButtons;

    const fontSizeChangerStyle = this.getFontSizeChangerStyle(customButtons);
    const fontSizeChangerUpButtonStyle = this.getFontSizeChangerButtonStyle(CHANGE_DIRECTION.UP, customButtons);
    const fontSizeChangerDownButtonStyle = this.getFontSizeChangerButtonStyle(CHANGE_DIRECTION.DOWN, customButtons);

    return (
      <div className='font-size-changer' style={fontSizeChangerStyle}>
        {/* {
          label && <div className='font-size-changer-label'>{label}</div>
        } */}
        <div className="font-size-changer-buttons" style={fontSizeChangerStyle}>
          <FontSizeChangerButton
            direction={CHANGE_DIRECTION.UP}
            customButton={up}
            onClick={this.onFontSizeUp.bind(this)}
            style={fontSizeChangerUpButtonStyle}
          />
          <FontSizeChangerButton
            direction={CHANGE_DIRECTION.DOWN}
            customButton={down}
            onClick={this.onFontSizeDown.bind(this)}
            style={fontSizeChangerDownButtonStyle}
          />
        </div>
      </div >
    );
  }
}

export default FontSizeChanger;
