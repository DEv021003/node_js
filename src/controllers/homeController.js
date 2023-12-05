const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getAbout = (req, res) => {
    res.send('haha')
}

const getAnh = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getAnh, getAbout
}