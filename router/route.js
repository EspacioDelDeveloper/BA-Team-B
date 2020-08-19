const express = require("express");
const router = express.Router();


module.exports = function () {

    router.get('/', (req,res) => {
        res.render('index');

    });
    
    router.get('/about', (req,res) => {
        res.render('about');

    });

    router.get('/projects', (req,res) => {
        res.render('projects');

    });

    router.get('/blog', (req,res) => {
        res.render('blog');

    });

    router.get('/contactus', (req,res) => {
        res.render('contactus');

    });
    
    return router;
};