import React, { Component } from 'react';

export default class Breadcrumb extends Component {
	render() {
		return (
			<div>{this.props.category}</div>
		)
	}
}