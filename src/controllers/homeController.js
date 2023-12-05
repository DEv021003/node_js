const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs',{listUsers: results})
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
    console.log(">>> req.body: ", req.body)
    // let {email, name, city} = req.body
    let[results,fields] = await   connection.query(`INSERT INTO Users (email, name, city)VALUES (?, ? , ?)`,[email, name, city]);

    res.send('Create users succeed !')
}

const getAnh = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomepage, getAnh, getCreatePage,postCreateUser,
}