const express = require('express')

const app = express()

const PORT = 3333

app.use(express.json())

app.listen(3333, () => {
    console.log(`filipe ${PORT}`)
})