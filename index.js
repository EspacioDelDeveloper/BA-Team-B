const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const displayRoutes = require('express-routemap');
const router = require('./router/route');
const path = require('path');

const server = express();

// pug config
server.set('view engine', 'pug');

server.set('views', path.join(__dirname, './views'));

// css config
server.use(express.static('./views/public'));

server.use(cors())
server.use(bodyParser.json())
server.use('/',router());

const port = 4000;
server.listen(port, () => {
    console.log(`API running -> Port ${port}`);
    displayRoutes(server);

});