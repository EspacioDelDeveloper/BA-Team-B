const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes');
const navlinks = ['Home', 'About', 'Blog', 'Projects', 'Contact'];

app.set('view engine', 'ejs');

app.use('/', router(navlinks));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
