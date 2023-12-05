
const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('hello')
}

const getAbout = (req, res) => {
    res.send('haha')
}

const getAnh = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getAnh, getAbout
}