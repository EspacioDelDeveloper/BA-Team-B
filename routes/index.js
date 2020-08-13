const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('Hello from Express!');
  });

  router.get('/about', (req, res) => {
    res.send('This is about');
  });

  router.get('/projects', (req, res) => {
    res.send('This is projects');
  });

  router.get('/blog', (req, res) => {
    res.send('This is blog');
  });

  router.get('/contact', (req, res) => {
    res.send('This is contact');
  });

  return router;
};
