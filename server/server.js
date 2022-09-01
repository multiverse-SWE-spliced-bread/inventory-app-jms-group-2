const express = require('express')
const app = express()
const seed = require('./seedData/seed')
const { itemsRouter } = require('./routes')
const port = 3000

seed()

app.use('/items', itemsRouter)

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(port, () =>  {
    console.log(`express is running on port: ${port}`)
})

// npx kill-port "insert port number"