// version avec nodejs
/*
const http = require('http')

const server = http.createServer((req, res) => {
  res.write('<h1>Un premier Bonjour </h1>')
  res.end('<p>Bonjour Master !</p>')
})

server.listen(3000, '127.0.0.1', () => {
  console.log('server is running...............')
})
*/

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