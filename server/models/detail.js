'use strict'

module.exports = function (data) {
  const product = data[0]
  const description = data[1]
  this.author = {
    'name': 'Adrián',
    'lastname': 'Minissale'
  }
  this.item = {
    'id': product.id,
    'title': product.title,
    'price': {
      'currency': product.currency_id,
      'amount': product.price,
      'decimals': 0
    },
    'picture': product.pictures[0].url,
    'condition': product.condition,
    'free_shipping': product.shipping.free_shipping,
    'sold_quantity': product.sold_quantity,
    'description': description.text
  }
}