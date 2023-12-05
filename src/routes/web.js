const express = require('express');
const {getHomepage,getAnh,getAbout} = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler)

router.get('/', getHomepage);
router.get('/1', getAbout);
router.get('/2', getAnh);

module.exports = router;