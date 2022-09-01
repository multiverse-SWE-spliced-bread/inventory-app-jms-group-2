const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const seed = require('./seedData/seed')
const { itemsRouter } = require('./routes')
const port = 3000

seed()

app.use('/items', itemsRouter)

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello!')
})


app.listen(port, () =>  {
    console.log(`express is running on port: ${port}`)
})

// npx kill-port "insert port number"