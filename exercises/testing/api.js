const express = require('express')
const morgan = require('morgan')
const { urlencoded, json } = require('body-parser')
const users = require('./users')
const app = express()

app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(json())

app.get('/user/:id', async (req, res) => {
  const id = req.params.id
  // should ge user by given id in route param
  const user = await users.findUser(id)
  res.status(200).send(user)
})

app.delete('/user/:id', async (req, res) => {
<<<<<<< HEAD
  const id = req.params.id
=======
  const id = req.id
>>>>>>> 964352c5164b09d15f03f512cca8c4ef1fc6a600
  await users.deleteUser(id)
  res.status(201).send({id})
})

module.exports = app
