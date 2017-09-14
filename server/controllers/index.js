const app = require('../index')
const service = require('../service')

// API;s

app.get('/api/items', (req, res) => {
  service.getResults(req, res).then(function (data) {
    res.json({ data: data })
  })
  .catch(function (error) {
    console.log(error)
  })
})

app.get('/api/items/:id', (req, res) => {
  service.getDetail(req, res).then(function (data) {
    res.json({ data: data })
  })
  .catch(function (error) {
    console.log(error)
  })
})

// VIEWS

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/items', (req, res) => {
  res.render('results')
})

app.get('/items/:id', (req, res) => {
  res.render('detail')
})