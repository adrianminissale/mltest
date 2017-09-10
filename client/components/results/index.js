import React, { Component } from 'react';
import Search from '../search'

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
				this.setState({ products: result.data.items })
			})
	}

	render() {
		let list
		if (this.state.products !== '') {
			let array = []
			for (let product of this.state.products) {
				array.push(<p key={product.id}><a href={'/items/' + product.id}>{product.title}</a></p>)
			}
			list = array
		} else {
			list = <p>Cargando...</p>
		}
		return (
			<div>
				<div>RESULTADOS</div>
				<Search />
				{list}
			</div>
		)
	}
}