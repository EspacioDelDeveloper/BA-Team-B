const express = require('express');
const router = express.Router();

module.exports = (navlinks) => {
  router.get('/', (req, res) => {
    res.render('index', { title: 'Home', navlinks });
  });

  router.get('/home', (req, res) => {
    res.render('index', { title: 'Home', navlinks });
  });

  router.get('/about', (req, res) => {
    res.render('about', { title: 'About', navlinks });
  });

  router.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects', navlinks });
  });

  router.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog', navlinks });
  });

  router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact', navlinks });
  });

  return router;
};
