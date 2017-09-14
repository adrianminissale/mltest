const config = require('../config')

module.exports = {
	getResults: {
		method: 'get',
		path: 'https://api.mercadolibre.com/sites/MLA/search?q=:query'
	},
	getDetail: {
		method: 'get',
		path: 'https://api.mercadolibre.com/items/:id'
	},
	getDetailDescription: {
		method: 'get',
		path: 'https://api.mercadolibre.com/items/:id/description'
	}
}