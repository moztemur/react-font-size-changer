import React, { Component } from 'react';

class FontSizeUp extends Component {
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
				className="font-size-up"
				onClick={this.onClick}>
				A+
			</div>
		);
	}
}

export default FontSizeUp;
