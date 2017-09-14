import React, { Component } from 'react';

import styles from './index.sass'

export default class Search extends Component {
	render() {
		return (
			<header id='search'>
				<div className='wrapper'>
					<nav className='content table'>
						<div className='logo'>
							<a href='/'><img src='/public/Logo_ML@2x.png' /></a>
						</div>
						<form action='/items' method='get'>
							<input type='text' name='search' placeholder='Nunca dejes de buscar' />
							<button type='submit' />
						</form>
					</nav>
				</div>
			</header>
		)
	}
}