

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Page Accueil')
})

app.get('/post-item', (req, res) => {
})

app.get('/post-list', (req, res) => {
})
app.get('/authentification', (req, res) => {
})

app.listen(3000, () => {
  console.log('server is running...............')
})