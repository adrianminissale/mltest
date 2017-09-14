import React, { Component } from 'react';

import styles from './index.sass'

export default class Breadcrumb extends Component {
	render() {
		return (
			<div id='breadcrumb'>
				<div className='wrapper'>
					<div className='content'>
						{this.props.category}
					</div>
				</div>
			</div>
		)
	}
}