const path = require('path');

//  user authentication
const authen = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/authentication.html'));
}


// export
module.exports = {
    authen
}

