const express = require('express');

const app = express();
const port = 8081;

app.set('views', './src/views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.send('hello	')
})
app.get('/1', (req, res) => {
    res.send('check 1')
})

app.get('/2', (req, res) => {
    // res.send('<h1>Check 1</h1>')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})