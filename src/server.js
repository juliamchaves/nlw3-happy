const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//inicia o express
const server = express()
server
    //utilizar body do req
    .use(express.urlencoded({ extended: true }))
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //cria rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar servidor
server.listen(5500)