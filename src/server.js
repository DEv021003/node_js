require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');


const app = express();
const port = process.env.PORT || 8888;//port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//config req.body
app.use(express.json());//for json
app.use(express.urlencoded({extended:true}));//for form data

//khai bao route
app.use('/', webRoutes);

//simple query
// connection.query(
//     'SELECT * FROM Persons u ;',
//     function(err, results,){
//         console.log(results)
//     }
// );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});