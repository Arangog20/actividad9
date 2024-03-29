const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config/database');
const routes = require('./rute/rute');

const app = express();
const port = 4000;

// Conecta a la base de datos MongoDB
connectDB();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


// Configura las rutas
app.use('/', routes);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
