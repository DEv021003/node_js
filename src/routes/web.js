const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('hello	')
});
router.get('/1', (req, res) => {
    res.send('check 1')
});

router.get('/2', (req, res) => {
    // res.send('<h1>Check 1</h1>')
    res.render('sample.ejs')
});

module.exports = router;