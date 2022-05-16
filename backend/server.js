/* 
Ich musste einen kleinen Server aifsetzen, da springerprofessional.de ansonten einen CORS-Fehlermehldung rausgibt*/

import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 5000

const getDocument = async url => {
  const response = await fetch(url)
  const data = await response.text()
  return data
}

app.get('/search', async (req, res) => {
  const doc = await getDocument(req.query.url)
  res.send(doc)
})

app.get('/', (req, res) => {
  res.send('server working')
})

app.listen(port)
