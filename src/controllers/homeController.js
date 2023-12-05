const connection = require('../config/database');
const { post } = require('../routes/web');

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getCreate = (req, res) => {
    res.render('sample.ejs')
}

const getAnh = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log(">>> req.body: ", req.body)
    res.send('create a new user')
}

module.exports = {
    getHomepage, getAnh, getCreate,postCreateUser
}