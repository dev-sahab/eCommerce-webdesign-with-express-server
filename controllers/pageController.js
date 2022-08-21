const path = require('path');


//homepage
const home = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}
//homepage alt
const homeAlt = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/home.html'));
}

//homepage 2
const home2 = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-2.html'));
}

//homepage 3
const home3 = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-3.html'));
}

// about page
const about = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'));
}

// contact page
const contact = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
}

// blog Full Width page
const blogFull = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/blog-fullwidth.html'));
}

// blog post page
const blogPost = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/blog-post.html'));
}

// blog page
const blog = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/blog.html'));
}

// category page
const category = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/category-grid.html'));
}

// category page 2
const category2 = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/category-grid-2.html'));
}

// compare page 
const compare = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/compare.html'));
}

// faq page 
const faq = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/faq.html'));
}

// terms page 
const terms = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/terms.html'));
}

// wishlist page 
const wishlist = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/wishlist.html'));
}

//  contact-data
const form_data = (req, res) => {
    res.json(req.body);
}




// redirect page to homepage
const redirect = (req, res) => {
    res.redirect('/')
}


// 404Not Found
const notFound = (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
}

// export
module.exports = {
    home, homeAlt, home2, home3, about, contact, blogFull, blogPost, blog, category, category2, compare, faq, terms, wishlist, form_data,
    redirect, notFound
}