const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const pageRoutes = require('./routes/pageRoutes');
const userRoutes = require('./routes/userRoutes');
const odererRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');


// express init
const app = express();

// data manage
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));

// environment variable
dotenv.config();
const PORT = process.env.PORT || 4000;

// static folder
app.use("/public", express.static('public'))


// router init
app.use('/user', userRoutes);
app.use('/order', odererRoutes); 
app.use('/products', productRoutes); 
app.use(pageRoutes);




// server listen
app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`.bgGreen.black);
})