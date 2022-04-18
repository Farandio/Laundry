const conn = require('./db.js')
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const db = mysql.createConnection(conn) 

const port = 3000;
const app = express();
app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/views/style')));
db.connect((err) => {
    if (err) console.log(err.message);
    else console.log("Database Connected!");
});

app.get("/", (req, res) => {
    res.render('home');
})

app.get("/login", (req, res) => {
    res.render('login');
})

app.get("/signup", (req, res) => {
    res.render('signup');
})

app.get("/homeLoggedIn", (req, res) => {
    res.render('homeLoggedIn');
})

app.post('/loginSubmit', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(username && password) {
        db.query('SELECT * FROM member WHERE username = ? AND password = ?', [username, password], (err, result, field) => {
            if(err) throw err;
            if(result.length>0){
                req.session.loggedin = true;
                req.session.username = username;

                res.redirect('homeLoggedIn');
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

app.post("/signupSubmit", (req, res) => {
    let regData = {
        nama : req.body.nama,
        alamat : req.body.alamat,
        jenis_kelamin : req.body.jenis_kelamin,
        tlp : req.body.tlp,
        username : req.body.username,
        password : req.body.password
    }

    db.query('INSERT INTO member (nama, alamat, jenis_kelamin, tlp, username, password) VALUES (?, ?, ?, ?, ?, ?)')
    if(err) throw err;
    res.send('Data has been inserted!');
    res.redirect('login');
    res.end();
})

app.get('/profile/:id', (req, res) => {
    let id = req.params.id;
    let profie = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        jenis_kelamin: req.body.jenis_kelamin,
        tlp: req.body.tlp
    }
    db.orders.find(id, (err, dat) => {
        if(err) throw err;

        res.render('profile', {})
    })
})


















app.listen(port, () => {
    console.log(`Server run on port ${port}`)
})