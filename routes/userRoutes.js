const express = require('express');
const {authen} = require('../controllers/userControllers');


// express route init
const routers = express.Router();

// authentication page route
routers.get('/authentication', authen);


// export 
module.exports = routers;