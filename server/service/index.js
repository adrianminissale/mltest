'use strict'

const endpoints = require('../endpoints')
const detailModel = require('../models/detail')
const resultsModel = require('../models/results')
const request = require('request-promise')

class indexService {
  static getResults(req, res) {
    const params = { method: endpoints.getResults.method }
    const query = req.query.q
    params.url = endpoints.getResults.path.replace(':query', query)

    return new Promise((resolve, reject) => {
      request[params.method](params.url)
        .then((response) => {
          let resolved = {}
          resolved = new resultsModel(JSON.parse(response))
          resolve(resolved)
        }, (error) => {
          reject(error)
        })
    })
  }

  static getDetail(req, res) {
    const getProductDetail = new Promise((resolve, reject) => {
      const params = { method: endpoints.getDetail.method }
      const id = req.url.split('/').pop()
      params.url = endpoints.getDetail.path.replace(':id', id)

      request[params.method](params.url)
        .then((response) => {
          resolve(JSON.parse(response))
        }, (error) => {
          reject(error)
        })
    })

    const getProductDetailDescription = new Promise((resolve, reject) => {
      const params = { method: endpoints.getDetailDescription.method }
      const id = req.url.split('/').pop()
      params.url = endpoints.getDetailDescription.path.replace(':id', id)

      request[params.method](params.url)
        .then((response) => {
          resolve(JSON.parse(response))
        }, (error) => {
          reject(error)
        })
    })

    const productRequests = [getProductDetail, getProductDetailDescription]

    return Promise.all(productRequests).then(function (response) {
      let resolved = {}
      resolved = new detailModel(response)
      return resolved
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

module.exports = indexService