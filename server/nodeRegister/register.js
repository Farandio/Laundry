const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const Connection = require('mysql/lib/Connection');

const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ukllaundry'
});

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/register.html'));
})

//app.post('/')