const { request, response } = require('express')
const express = require('express')
const path = require('path')

const app = express()

const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

app.get('', (request, response) =>{
    response.send('Hello Expess!')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

app.get('/help', (request, response) => {
    response.send('Help page')
})