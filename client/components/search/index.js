import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		return (
			<div>
				<div>SEARCH</div>
				<form action="/items" method="get">
					<input type='text' name='search' placeholder='No dejes de buscar' />
				</form>
			</div>
		)
	}
}