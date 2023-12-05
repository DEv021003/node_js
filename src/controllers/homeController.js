const connection = require('../config/database');
const { getAllUsers , getUserById, updateUserById} = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs',{listUsers: results})
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
    console.log(">>> req.body: ", req.body)
    let {email, name, city} = req.body
    let[results,fields] = await connection.query(`INSERT INTO Users (email, name, city)VALUES (?, ? , ?)`,[email, name, city]);

    res.send('Create users succeed !')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs',{userEdit : user});
}

const postUpdateUser = async (req, res) => {
    // console.log(">>> req.body: ", req.body)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    await updateUserById(email, city, name, userId);
    // res.send('Update users succeed !');
    res.redirect('/');
}

module.exports = {
    getHomepage, getUpdatePage, getCreatePage,postCreateUser,getUserById, postUpdateUser
}