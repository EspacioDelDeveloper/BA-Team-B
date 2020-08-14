const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes');
const navlinks = ['Home', 'About', 'Blog', 'Projects', 'Contact'];
const styles = {
  navbarColor: 'navbar-dark bg-dark',
  containerSize: 'main-container',
};

app.set('view engine', 'ejs');

app.use('/', router(navlinks, styles));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
