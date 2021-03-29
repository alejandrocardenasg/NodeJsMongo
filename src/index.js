const express = require('express');
const path =  require('path');
const morgan = require('morgan');
const mongose = require('mongoose');


const App = express();

//Conectando a mongodb

mongose.connect('mongodb://192.168.1.101:27017/test')
    .then(db => console.log('DB conectada'))
    .catch(err => console.log(err));


//Importar rutas

const indexRoutes = require('./routes/index.js');
const { MongoServerSelectionError } = require('mongodb');

//Configuración

App.set('port',process.env.PORT || 3000);
App.set('views', path.join(__dirname + '/views'));
App.set('view engine', 'ejs');

//middlewares

App.use(morgan('dev'));
App.use(express.urlencoded({extended:false}));

//Rutas

App.use('/', indexRoutes);

// Server starting

App.listen(App.get('port'),()=>{
    console.log("Escuchando por el puerto ",App.get('port'));
});