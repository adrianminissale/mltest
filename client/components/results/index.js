import React, { Component } from 'react';
import Search from '../search'
import Breadcrumb from '../breadcrumb'

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
				<div>RESULTADOS</div>
				<Breadcrumb category={this.state.categories} />
				<Search />
				{list}
			</div>
		)
	}
}

class ShowDetail extends Component {
  render () {
    return (
			<div>
				<a href={'/items/' + this.props.product.id}>
					<img src={this.props.product.picture} /><br/>
					<div>{this.props.product.price.currency} {this.props.product.price.amount} {this.props.product.free_shipping}</div>
					<div>{this.props.product.title}</div>
				</a>
			</div>
		)
  }
}