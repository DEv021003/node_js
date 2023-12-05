const express = require('express');
const {getHomepage,getAnh,getCreate,postCreateUser} = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler)

router.get('/', getHomepage);
router.get('/1', getCreate);
router.get('/2', getAnh);

router.post('/create-user', postCreateUser);

module.exports = router; //export default