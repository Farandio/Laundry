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

//localhost:3000/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'));
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname + '/register.html'));
})

//localhost:3000/auth
app.post('/auth', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(username && password) {
        conn.query('SELECT * FROM member WHERE username = ? AND password = ?', [username, password], (err, result, field) => {
            if(err) throw err;
            if(result.length>0){
                req.session.loggedin = true;
                req.session.username = username;

                res.redirect('/home');
            }else{
                res.send('Incorrect username and/or password!');
            }
            res.end();
        });
    }else{
        res.send('Please enter username and password!');
        res.end();
    }
});

//localhost:3000/register
app.post('/signup', (req, res) => {
    let data = {
        nama : req.body.nama,
        alamat : req.body.alamat,
        jenis_kelamin : req.body.jenis_kelamin,
        tlp : req.body.tlp,
        username : req.body.username,
        password : req.body.password
    }

    })


//localhost:3000/home
app.get('/home', (req, res) => {
    if(req.session.loggedin){
        res.send('Welcome, '+ req.session.username + ' !');
    }else{
        res.send('Please login to view this page!');
    }
    res.end();
});

app.listen(3000);