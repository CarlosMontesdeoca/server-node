const express = require("express");
const cors = require('cors')

const { mongoose } = require('../database');

const app = express();
app.use(cors())

//settings
app.set( 'port', process.env.PORT || 8080 );

//RUTAS
app.use('/api/quoters', require('../routes/quoter.routes'));

// starting the server
app.listen( app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
