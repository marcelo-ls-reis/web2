const express = require('express')
const consign = require('consign')
const path = require('path')
const body = require('body-parser');
const { dirname } = require('path');

app = express();

app.set('url', 'http://localhost:')
app.set('porta', 3000)
app.set(express.json())

// diretório estático
app.set('views', path.join(__dirname,'../api/views'))
app.set('view engine', 'ejs')

// diretório estático - pubrico
app.use('/static', express.static(__dirname +'/public'))
app.use(express.static('public'))
app.use(express.static('estilos'))
app.use(express.static('imagens'))

consign({cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

module.exports = app

