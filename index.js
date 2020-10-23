const app = require('express')()
const db = require('./config/db') //knex
const consign = require('consign')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db


app.get('/', (req, res) => {
    res.status(200).send('<h3>API da IEADI</h3>')
})

app.listen(3000)