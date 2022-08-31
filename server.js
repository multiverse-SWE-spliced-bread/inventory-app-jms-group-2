const express = require('express')
const app = express()
const router = require('./inventory-app/server/routes')


app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(3005, function() {
    console.log('express is running on port: 3005')
})