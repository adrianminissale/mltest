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
		let list = product !== '' ? <ShowDetail product={product} /> : <p>Cargando...</p>

		return (
			<div>
				<Search />
				<Breadcrumb category='Breadcrumb' />
				<main>
					<section id='detail'>
						<div className='wrapper'>
							<div className='content'>
								{list}
							</div>
						</div>
					</section>
				</main>
			</div>
		)
	}
}

class ShowDetail extends Component {
  render () {
		const description = this.props.product.description_plain !== '' ? this.props.product.description_plain : this.props.product.description
    return (
			<article className='detail' itemscope itemtype="http://schema.org/Product">
				<div className='table'>
					<img src={this.props.product.picture} itemprop="image" />
					<div className='text'>
						<div className='sale-info'>
							{this.props.product.condition === 'new' ? 'nuevo' : 'usado'} - {this.props.product.sold_quantity} vendidos
						</div>
						<h1 className='title' itemprop="name">{this.props.product.title}</h1>
						<div className='price' itemprop="offers" itemscope itemtype="http://schema.org/Offer">
							<div itemprop="price"><span data-currency-code={this.props.product.price.currency}>$</span> {this.props.product.price.amount} {/*this.props.product.price.decimals */}</div>
						</div>
						<div className='btn'>Comprar</div>
					</div>
				</div>
				<div className='description' itemprop="description">
					<h2 className='title'>Descripción del producto</h2>
					<div className='html' dangerouslySetInnerHTML={{ __html: description}}></div>
				</div>
			</article>
		)
  }
}