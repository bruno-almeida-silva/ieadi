const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).send('<h3>API da IEADI</h3>')
})

app.listen(3000)