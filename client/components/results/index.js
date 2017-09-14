import React, { Component } from 'react';
import Search from '../search'
import Breadcrumb from '../breadcrumb'

import styles from './index.sass'

export default class Results extends Component {
	constructor(props) {
		super(props)
			this.state = { products: '' }
	}

	componentWillMount() {
		const query = this.props.location.search.split('=').pop()
		fetch(`/api/items?q=${query}`)
			.then(response => response.json())
			.then(result => {
				this.setState({ author: result.data.author })
				this.setState({ categories: result.data.categories })
				this.setState({ products: result.data.items })
			})
	}

	render() {
		const products = this.state.products
		let list = null
		if (products !== '') {
			let array = []
			for (let product of products) {
				array.push(<ShowDetail product={product} key={product.id} />)
			}
			list = array
		} else {
			list = <p>Cargando...</p>
		}
		return (
			<div>
				<Search />
				<Breadcrumb category={this.state.categories} />
				<div id='results'>
					<div className='wrapper'>
						<div className='content'>
							{list}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class ShowDetail extends Component {
  render () {
    return (
			<div className='result'>
				<a href={'/items/' + this.props.product.id} className='table'>
					<img src={this.props.product.picture} />
					<div className='text'>
						<div className='price'>
							{this.props.product.price.currency} {this.props.product.price.amount}
							<div className={'shipping-' + this.props.product.free_shipping}></div>
						</div>
						<div className='title'>{this.props.product.title}</div>
					</div>
				</a>
			</div>
		)
  }
}