const connection = require('../config/database');
const { post } = require('../routes/web');

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getAnh = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    console.log(">>> req.body: ", req.body)
    // let {email, name, city} = req.body
    console.log(">>> email = " , email , 'name = ' , name, 'city = ' , city)

    // connection.query(`INSERT INTO Users (email, name, city)VALUES (?, ? , ?)`,[email, name, city],
    // function(err, results){
    //     res.send('Create users succeed !')
    // });

  
    let[results,fields] = await   connection.query(`INSERT INTO Users (email, name, city)VALUES (?, ? , ?)`,[email, name, city]);


    // const [results, fields] = await connection.query('SELECT * FROM Users u ');
    // console.log(">>> check" , results)
    res.send('Create users succeed !')
}
module.exports = {
    getHomepage, getAnh, getCreatePage,postCreateUser
}