const express = require('express');
const {checkout, cart, trackOrder} = require('../controllers/orderControllers');

//express init
const route = express.Router();

route.get('/checkout', checkout);
route.get('/cart', cart);
route.get('/track-your-order', trackOrder);




// module export
module.exports = route;