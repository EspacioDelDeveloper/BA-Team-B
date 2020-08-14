const express = require('express');
const router = express.Router();

module.exports = (navlinks, styles) => {
  const { navbarColor, containerSize } = styles;

  router.get('/', (req, res) => {
    res.render('index', {
      title: 'Home',
      navlinks,
      navbarColor,
      containerSize,
    });
  });

  router.get('/home', (req, res) => {
    res.render('index', {
      title: 'Home',
      navlinks,
      navbarColor,
      containerSize,
    });
  });

  router.get('/about', (req, res) => {
    res.render('about', {
      title: 'About',
      navlinks,
      navbarColor,
      containerSize,
    });
  });

  router.get('/projects', (req, res) => {
    res.render('projects', {
      title: 'Projects',
      navlinks,
      navbarColor,
      containerSize,
    });
  });

  router.get('/blog', (req, res) => {
    res.render('blog', {
      title: 'Blog',
      navlinks,
      navbarColor,
      containerSize,
    });
  });

  router.get('/contact', (req, res) => {
    res.render('contact', {
      title: 'Contact',
      navlinks,
      navbarColor,
      containerSize,
    });
  });

  return router;
};
