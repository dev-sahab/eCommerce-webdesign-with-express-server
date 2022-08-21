const express = require('express');
const {single, singleSidebar} = require('../controllers/productConstrollers');

//express route init
const routes = express.Router();


routes.get('/single-product', single);
routes.get('/single-product-sidebar', singleSidebar);



//export
module.exports = routes;