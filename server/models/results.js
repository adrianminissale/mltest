'use strict'

module.exports = function (data) {
  this.author = {
    'name': 'Adrián',
    'lastname': 'Minissale'
  }
  this.categories = []
  for (let category of data.available_filters[0].values) {
    this.categories.push(category.name)
    break
  }
  this.items = []
  let i = 0
  for (let item of data.results) {
    this.items.push({
      'id': item.id,
      'title': item.title,
      'price': {
        'currency': item.currency_id,
        'amount': item.price,
        'decimals': 0
      },
      'picture': item.thumbnail,
      'condition': item.condition,
      'free_shipping': item.shipping.free_shipping,
      'state_name': item.address.state_name
    })
    if (i++ === 3) {
      break
    }
  }
}