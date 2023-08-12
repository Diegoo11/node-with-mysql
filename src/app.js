// import path from 'path';
// import express from 'express';
// import morgan from 'morgan';
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

// importando rutas
const customerRoutes = require('./routes/customer');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middelwares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '11yenaro11',
  port: '3306',
  database: 'todoDB',
}, 'single'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`server listen in port ${app.get('port')}`);
});
