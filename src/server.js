require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8888;//port => hardcode
const hostname = process.env.HOST_NAME;

// console.log(">>> check:" , process.env);

// app.set('views', './src/views/');
//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//config static files: images/css/js
app.use(express.static (path.join(__dirname, 'public')));

//khai bao route
app.get('/', (req, res) => {
	res.send('hello	')
});
app.get('/1', (req, res) => {
    res.send('check 1')
});

app.get('/2', (req, res) => {
    // res.send('<h1>Check 1</h1>')
    res.render('sample.ejs')
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});