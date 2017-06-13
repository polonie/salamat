const express = require('express');
const {Article} = require('../models/Article');
const router = express.Router();


router.get('/', (req, res)=>{
	Article.find({}, (err, articles)=>{
		res.render('articles', {articles, page: 'list'})
	});
});

router.get('/add', (req, res)=>{
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
		let article = new Article({title: req.body.title, description:req.body.description, body: req.body.body});
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
		res.render('article', {article});
	});
});
router.delete('/:id', function(req, res) {
	Article.remove({_id: req.params.id}, function(err) {
		res.send('Success');
	});
});
router.get('/edit/:id', function(req, res) {
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



module.exports = router;