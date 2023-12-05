require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8888;//port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',// default : empty
    password: '123456',
    database: 'tudeptrai',
    port: 3307 //default 3306
});

//simple query
connection.query(
    'SELECT * FROM Users u ;',
    function(err, results, fields){
        console.log(results);
        console.log(fields);
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});