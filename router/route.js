const express = require("express");
const router = express.Router();


module.exports = function () {

    router.get('/', (req,res) => {
        res.render('index');

    });
    
    router.get('/about', (req,res) => {
        res.send('About');

    });

    router.get('/projects', (req,res) => {
        res.send('Projects');

    });

    router.get('/blog', (req,res) => {
        res.send('Blog');

    });

    router.get('/contactus', (req,res) => {
        res.send('Contact us');

    });
    
    return router;
};