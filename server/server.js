const express = require('express')
const app = express()
const {itemsRt} = require('./routes')

app.use(express.json())
app.use('/item', itemsRt)

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

app.listen(1234, function() {
    console.log('express is running on port: 1234')
})