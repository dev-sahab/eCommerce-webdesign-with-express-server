const express = require('express');
const {home, home3, about, contact, blogFull, blogPost, blog, category, category2, compare, faq, terms, wishlist, form_data, redirect, notFound} = require('../controllers/pageController');

//express init
const route = express.Router();


//route init
route.get('/', home);
route.get('/home', redirect);
route.get('/home-2', redirect);
route.get('/home-3', home3);
route.get('/about', about);
route.get('/contact', contact);
route.get('/blog-fullwidth', blogFull);
route.get('/blog-post', blogPost);
route.get('/blog', blog);
route.get('/category-grid', category);
route.get('/category-grid-2', category2);
route.get('/compare', compare);
route.get('/faq', faq);
route.get('/terms', terms);
route.get('/wishlist', wishlist);
route.post('/contact-data', form_data);




// 404 Not Found
route.get('*', notFound);


// export
module.exports = route;