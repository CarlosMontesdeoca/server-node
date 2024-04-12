require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

const app = express()
app.use(cors())
// app.use(express.json());
app.use(express.json({ limit: '20mb' }))
app.use(express.urlencoded({ limit: '20mb', extended: true }))

const routesBi = require('./routes/bi.routes')
const routesQuoter = require('./routes/quoter.routes')
const routesCommissions = require('./routes/commissions.routes')

app.use('/api/bi', routesBi)
app.use('/api/quoters', routesQuoter)
app.use('/api/certificates', routesCommissions)

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
}) 