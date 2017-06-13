const express = require('express');
const {Article} = require('../models/Article');
const {User} = require('../models/User');
const router = express.Router();


router.get('/', (req, res)=>{
	Article.find({}, (err, articles)=>{
		res.render('articles', {articles, page: 'list'})
	});
});

router.get('/add', ensureAuthenticated, (req, res)=>{
	res.render('add_article', {page: 'new'});
});
router.post('/add', (req, res)=>{
	req.checkBody('title', 'Необходимо ввести заголовок').notEmpty();
	req.checkBody('description', 'Необходимо ввести краткое описание').notEmpty();
	req.checkBody('body', 'Необходимо ввести текст статьи').notEmpty();
	let errors = req.validationErrors();
	if (errors){
		res.render('add_article', {errors});
	}else{
		let article = new Article({title: req.body.title, description:req.body.description, body: req.body.body, author: req.user._id});
		article.save((err)=>{
			if (err){
				console.log(err);
			}else{
				req.flash('success', 'Новость добавлена');
				res.redirect('/articles');
			}
		});
	}
});
router.get('/:id', function(req, res) {
	Article.findById(req.params.id, function(err, article) {
		User.findById(article.author, function(err, user) {
			res.render('article', {article, author: user.name});
		});
	});
});
router.delete('/:id', function(req, res) {
	Article.remove({_id: req.params.id}, function(err) {
		res.send('Success');
	});
});
router.get('/edit/:id', ensureAuthenticated, function(req, res) {
	Article.findById(req.params.id, function(err, article) {
		res.render('edit_article', {article});
	});
});
router.post('/edit/:id', function(req, res) {
	let {title, description, body} = req.body;
	let article = {title, description, body};
	Article.findByIdAndUpdate(req.params.id, {$set: article}, function(err, article) {
		req.flash('success', 'Новость обновлена');
		res.redirect('/articles');
	});
});
router.get('/drop', (req, res)=>{
	Article.remove({}, function(err, result) {
		res.redirect('/articles');
	});
});

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()){
		return next();
	}else{
			req.flash('Пожалуйста, войдите под своей учетной записью');
			res.rediret('/user/login');
	}
};


module.exports = router;