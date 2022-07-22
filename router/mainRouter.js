const express = require('express');
const router = express.Router();
const { randomControler, getCar, postInfo, register, login, sendObject, getUsers } = require('../controlers/mainControler');
const { checkInputs } = require('../middleware/checkInputs');
const { addUser } = require('../modules/addUsersList');
const { checkUser } = require('../middleware/checkUser');


router.get('/random', randomControler);
router.get('/car', getCar);
router.post('/post', postInfo);
router.post('/register', register);
router.post('/login', login);
router.post('/middleware', checkInputs, sendObject);
router.get('/users', getUsers);
router.post('/adduser', checkUser, addUser);

module.exports = router;