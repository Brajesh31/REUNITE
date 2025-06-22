const express = require('express');
const pageRouter = express.Router();

pageRouter.get('/', (req, res) => {

    // CHECK IF JWT IS VALID, REDIRECT TO HOME PAGE ELSE REDIRECT TO LOGIN PAGE

    res.render('home');
});

pageRouter.get('/upload', (req, res) => {
    res.render('upload');
});

pageRouter.get('/login', (req, res) => {
    res.render('login');
});

pageRouter.get('/register', (req, res) => {
    res.render('register');
});

pageRouter.get('/success', (req, res) => {
    res.render('success');
});

module.exports = pageRouter;




