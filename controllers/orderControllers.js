const path = require('path');


// checkout page 
const checkout = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/checkout.html'));
}

// cart page
const cart = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/cart.html'));
}

// track order page
const trackOrder = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/track-your-order.html'));
}


// export
module.exports = {
    checkout,
    cart,
    trackOrder
}