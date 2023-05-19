const express = require('express')
const app = express()

const  mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/cotizador')
    .then(db => console.log('Db is connected'))
    .catch(error => console.error(error));

app.get('/test', (req, res) => res.json({
    message: "conection succes",
    status: 200,
}))
app.listen(8080, () => console.log('Server is listening'))