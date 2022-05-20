const express = require('express')
const router = express.Router()

// import contoller methods 

const {create} = require('../controllers/post');


router.get('/post', create);

module.exports = router;




