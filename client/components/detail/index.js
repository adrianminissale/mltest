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
		const product = this.state.product
		let list = null
		if (product !== '') {
			list = <ShowDetail product={product} />
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

class ShowDetail extends Component {
  render () {
    return (
			<div>
				<img src={this.props.product.picture} /><br/>
				<div>{this.props.product.condition} - {this.props.product.sold_quantity} vendidos</div>
				<div>{this.props.product.title}</div>
				<div>{this.props.product.price.currency} {this.props.product.price.amount} {this.props.product.price.decimals}</div>
				<div>Comprar</div>
				<div>Descripción del producto</div>
				<div>{this.props.product.description}</div>
			</div>
		)
  }
}