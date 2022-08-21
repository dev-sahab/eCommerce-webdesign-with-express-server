const path = require('path');

// single product controller
const single = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/single-product.html'))
}
// single product sidebar controller
const singleSidebar = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/single-product-sidebar.html'))
}


//export
module.exports = {
    single, 
    singleSidebar
}