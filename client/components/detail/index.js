import React, { Component } from 'react';
import Search from '../search'
import Breadcrumb from '../breadcrumb'

import styles from './index.sass'

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
				<Search />
				<Breadcrumb category='Breadcrumb' />
				<div id='detail'>
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
			<div className='detail'>
				<div className='table'>
					<img src={this.props.product.picture} />
					<div className='text'>
						<div className='sale-info'>
							{this.props.product.condition} - {this.props.product.sold_quantity} vendidos
						</div>
						<div className='title'>{this.props.product.title}</div>
						<div className='price'>
							{this.props.product.price.currency} {this.props.product.price.amount} {/*this.props.product.price.decimals */}
						</div>
						<div className='btn'>Comprar</div>
					</div>
				</div>
				<div className='description'>
					<div className='title'>Descripción del producto</div>
					<div className='html' dangerouslySetInnerHTML={{ __html: this.props.product.description}}></div>
				</div>
			</div>
		)
  }
}