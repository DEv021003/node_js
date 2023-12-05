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
    let {email, name, city} = req.body
    console.log(">>> email = " , email , 'name = ' , name, 'city = ' , city)

 

    connection.query(`INSERT INTO Users (email, name, city)
    VALUES (?, ? , ?)`,
    [email, name, city],
    function(err, results) {
        console.log(results);
        res.send(' created user succeed')
    }
    );
}
module.exports = {
    getHomepage, getAnh, getCreate,postCreateUser
}