const express = require('express');
const router = express.Router();

let {User} = require('../models/User');

router.get('/register', function(req, res) {
	res.render('register');
});