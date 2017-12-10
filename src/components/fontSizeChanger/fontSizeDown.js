import React, { Component } from 'react';

class FontSizeDown extends Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		const { onClick } = this.props;

		onClick();
	}

	render() {
		return (
			<div
				className="font-size-down"
				onClick={this.onClick}>
				a-
			</div>
		);
	}
}

export default FontSizeDown;
