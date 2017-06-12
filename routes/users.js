const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

let {User} = require('../models/User');

router.get('/register', function(req, res) {
	res.render('register');
});
router.post('/register', function(req, res) {
	let {username, email, password} = req.body;
	req.checkBody('username', 'Необходимо указать имя пользователя').notEmpty();
	req.checkBody('email', 'Необходимо указать email').notEmpty();
	req.checkBody('email', 'Необходимо указать правильный email').isEmail();
	req.checkBody('password', 'Необходимо указать пароль').notEmpty();
	req.checkBody('password2', 'Пароли не совпадают').equals(req.body.password);
	let errors = req.validationErrors();
	if (errors){
		res.render('register', {errors});
	}else{
		let newUser = new User({username, email, password});
		bcrypt.getSalt(10, function(err, salt) {
			bcrypt.hash(newUser.password, salt, function(err, hash) {
				if (err){
					console.log(err);
				}else{
					newUser.password = hash;
					newUser.save(function(err) {
						if (err){
							console.log(err);
						}else{
							req.flash('success', 'Вы успешно зарегистрировались!');
							res.redirect('/users/login');
						}
					});
				}
			});
		});
	}
});

module.exports = router;