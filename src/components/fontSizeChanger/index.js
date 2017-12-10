import React, { Component } from 'react';
import FontSizeUp from './fontSizeUp';
import FontSizeDown from './fontSizeDown';

const CHANGE_DIRECTION = {
	UP: 'up',
	DOWN: 'down'
};

class FontSizeChanger extends Component {
	constructor() {
		super();
		this.setChangeDirection.bind(this);
		this.state = {
			options: {
				stepSize: 1,
				range: 10
			},
			changeCount: 0,
			changeDirection: null
		};
	}

	componentDidMount() {
		const { options } = this.props;

		this.setState({
			options: Object.assign({}, this.state.options, options)
		});
	}

	applyFontSize(el, up) {
		const { stepSize } = this.state.options;
		const { changeDirection } = this.state;
		const change = changeDirection === CHANGE_DIRECTION.UP ? stepSize : stepSize * (-1);
		const style = window.getComputedStyle(el, null).getPropertyValue('font-size');
		const fontSize = parseFloat(style);
		const newFontSize = fontSize + change;

		el.style.fontSize = newFontSize + 'px';
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

	render() {
		const { style } = this.props;

		return (
			<div className='font-size-changer' style={style}>
				<FontSizeUp onClick={this.onFontSizeUp.bind(this)} />
				<FontSizeDown onClick={this.onFontSizeDown.bind(this)}/>
			</div >
		);
	}
}

export default FontSizeChanger;
