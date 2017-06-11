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
	let article = new Article({title: req.body.title, description:req.body.description, body: req.body.body});
	article.save((err)=>{
		if (err){
			console.log(err);
		}else{
			res.redirect('/articles');
		}
	})
});
router.get('/:id', function(req, res) {
	Article.findById(req.params.id, function(err, article) {
		res.render('article', {article});
	});
});
router.delete('/:id', function(req, res) {
	Article.remove(req.params.id, function(err) {
		res.send('Success');
	});
});
router.get('/edit/:id', function(req, res) {
	Article.findById(req.params.id, function(err, article) {
		res.render('edit_article', {article});
	});
});
router.post('/edit/:id', function(req, res) {
	let article = {};
	article.title = req.body.title;
	article.description = req.body.description;
	article.body = req.body.body;
	Article.findByIdAndUpdate(req.params.id, {$set: article}, function(err, article) {
		res.redirect('/articles');
	});
});
router.get('/drop', (req, res)=>{
	Article.remove({}, function(err, result) {
		res.redirect('/articles');
	});
})



module.exports = router;