import React, { Component } from 'react';
import Search from '../search'

export default class Detail extends Component {
	constructor(props) {
		super(props)
			this.state = { product: '' }
	}

	componentWillMount() {
		const id = this.props.location.pathname.split('/').pop()
		fetch(`/api/items/${id}`)
			.then(response => response.json())
			.then(result => {
				this.setState({ author: result.data.author })
				this.setState({ product: result.data.item })
			})
  }

	render() {
		let list = null
		if (this.state.product !== '') {
			list = <p>{this.state.product.title} | {this.state.product.price.currency}{this.state.product.price.amount}</p>
		} else {
			list = <p>Cargando...</p>
		}
		return (
			<div>
				<div>DETALLE</div>
				<Search />
				{list}
			</div>
		)
	}
}