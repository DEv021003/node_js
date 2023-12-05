const express = require('express');
const {getHomepage,getUpdatePage,getCreatePage,postCreateUser,postUpdateUser} = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler)

router.get('/', getHomepage);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);


module.exports = router; //export default