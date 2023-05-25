const express = require('express');
const mongoose = require('mongoose');
const quoters = require('../routes/quoter.routes');

//---MODELOS-----


require('dotenv').config();

//---------------Conexion  con Base de Datos ---------------------------//
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
//----------------------------------------------------------------------//

const app = express();

app.use('/api/quoters', quoters)

app.use(express.json());

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})