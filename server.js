const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('./db/mongoose');
var Category = require('./db/mongoose').Category;
var {Boutique} = require('./models/Boutique');
var {Article} = require('./models/Article');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.use(express.static('public'));
const port = process.env.PORT || 3000;
// var numbofpages;

const {checkLink, links, floors, categories, footer} = require('./db/data/data');

var _data = {lvl1: mongoose.lvl1, lvl2: mongoose.lvl2, lvl3: mongoose.lvl3, links, categories, footer};

app.get('/article/edit/:id', function(req, res) {
	Article.findById(req.params.id, function(err, article) {
		res.render('edit_article', {article});
	});
});

app.post('/article/edit/:id', function(req, res) {
	let {...article} = req.body;
	console.log(article);
});

app.get('/article/:id', function(req, res) {
	Article.findById(req.params.id, function(err, article) {
		res.render('article', {article});
	});
});



app.get('/drop/article', (req, res)=>{
	Article.remove({}, function(err, result) {
		res.redirect('/article-list');
	});
})

app.get('/articles/add', (req, res)=>{
	res.render('add_article', {page: 'new'});
});
app.post('/articles/add', (req, res)=>{
	let article = new Article({title: req.body.title, description:req.body.description, body: req.body.body});
	article.save((err)=>{
		if (err){
			console.log(err);
		}else{
			res.redirect('/articles');
		}
	})
});

app.get('/articles', (req, res)=>{
	Article.find({}, (err, articles)=>{
		res.render('articles', {articles, page: 'list'})
	});
});

app.use('/newplan', (req, res)=>{
	res.render('newplan');
});

// ****************************************     WRITE/READ DATA     ***********************************
app.get('/rw-boutiques', (req, res)=>{
	if (!req.query.name && !req.query.salamat && !req.query.salon && !req.query.phone && !req.query.total && !req.query.about && !req.query.logo && !req.query.picts && !req.query.site && !req.query.email && !req.query.son && !req.query.etazh){
		Boutique.find().then(
			(boutiques)=>{
				res.send(boutiques);
			},
			(err)=>{
				res.status(400).send(err)
			}
		);
		return;
	}
	var boutique = new Boutique({
		name: req.query.name,
		salamat: req.query.salamat,
		salon: req.query.salon,
		phone: req.query.phone,
		total: req.query.total,
		about: req.query.about,
		logo: req.query.logo,
		picts: req.query.picts,
		son: req.query.son,
		email: req.query.email,
		site: req.query.site,
		etazh: req.query.etazh
	});
	boutique.save().then(
		(bot)=>{
			res.send('document has been saved');
		},
		(err)=>{
			res.status(400).send(err);
		}
	);
});


app.get('/rw-categories', (req, res)=>{
	if (!req.query.index && !req.query.id && !req.query.idparent && !req.query.name && !req.query.count && !req.query.idgrand){
		Category.find().then(
			(categories)=>{
				res.send({
					categories
				})
			},
			(err)=>{
				res.status(400).send(err)
			}
		);
		return;
	};
	var category = new Category({
		index: req.query.index,
		id: req.query.id,
		idparent: req.query.idparent,
		name: req.query.name,
		count: req.query.count,
		idgrand: req.query.idgrand
	});
	category.save().then(
		(doc)=>{
			res.send('document has been saved');
		},
		(err)=>{
			res.status(400).send(err);
		}
	);
});



app.get('/delbot', (req, res)=>{
	Boutique.remove({}).then((result)=>{
	res.send('Все удалено!')
	});
});

app.get('/delcat', (req, res)=>{
	Category.remove({}).then((result)=>{
	res.send('Все удалено!')
	});
});
// ****************************************     WRITE/READ DATA     ***********************************





// *************************************************************   R   O    U    T    E    S   ************************************************************
app.get('/search', (req, res)=>{
	res.send(mongoose.lvl3);
});


// *************************************************  MAP QUERIES  ********************************************
app.get('/getboutique', (req, res)=>{
	var boutique = req.query.boutique;
	var salamat = req.query.salamat;
	Boutique.find({salamat:salamat, salon:boutique})
	.then((docs)=>{
		res.send(docs);
	})
});
app.get('/boutiquelist', (req, res)=>{
	var boutique = req.query.boutique;
	var salamat = req.query.salamat;
	Boutique.find({salamat: salamat, salon: boutique}).then((docs)=>{
		var data = _data;
		data.docs = docs;
		data.pages = false;
		res.render('boutiques', data);
	});
});
// *************************************************  MAP QUERIES  ********************************************

app.use('/category', (req,res)=>{
	const categoryID = req.query.dataid;
	Boutique.count({total: new RegExp(categoryID, "i")}, (err, numb)=>{
		var numbofpages = (numb % 10)==0 ? (numb/10) : (Math.floor(numb/10)+1); 
		if (numbofpages == 1){
			numbofpages = false;
		};
		Boutique
		.find({total: new RegExp(categoryID, "i")})
		.limit(10)
		.exec((err, docs)=>{
			var data = _data;
			data.docs = docs;
			data.pages = numbofpages;
			data.page = 1;
			data.categoryID = categoryID;
			res.render('boutiques', data);
		});

	})
})


app.use('/boutiques', (req, res)=>{
	var page = +req.query.pagenumber;
	var categoryID = req.query.categoryID;
	var offset = (page - 1) * 10;
	Boutique
		.find({total: new RegExp(categoryID, "i")})
		.skip(offset)
		.limit(10)
		.exec((err, docs)=>{
			// res.send(docs);
			var data = _data;
			data.docs = docs;
			data.page = page;
			data.pages = numbofpages;
			data.categoryID = categoryID;
			res.render('boutiques', data);
		});
});


app.use('/editboutique', (req, res)=>{
	var query = req.query, findQueries={}, updateQueries={};
	console.log(query);
	for(key in query){
		if (key !== 'newvalue' && key!=='field'){
			findQueries[key]= query[key];
		}else if(key!=='field'){
			updateQueries[query.field] = req.query[key];
		}
	};
	Boutique.findOneAndUpdate(findQueries, {$set:updateQueries}, {new:true})
		.then((doc)=>{
			res.send(doc);
		}, (err)=>{
			res.send(err);
		});
});


app.use('/docedit', (req, res)=>{
	var obj = req.query, findQueries={}, updateQueries={};
	for(key in obj){
		if (key!='salamat' && key!='salon' && key!='name'){
			if (key =='newsalon'){
				updateQueries.salon = obj[key];
			}else{
				updateQueries[key] = obj[key];
			}
		}else{
			findQueries[key]= obj[key];
		}
	};
	Boutique.findOneAndUpdate(findQueries, {$set:updateQueries}, {new:true})
		.then((doc)=>{
			res.send(doc);
		}, (err)=>{
			res.send(err);
		});
	
});

app.use('/boutique', (req, res)=>{
	Boutique.find({salamat: req.query.data_salamat, salon: req.query.data_salon}, (err, docs)=>{
		var boutique = docs[0], picts, data;
		var pictsjpg = [];
		if (boutique.picts != 'noimage'){
			pictsjpg = boutique.picts.split(',');
		}else{
			picts = boutique.son.split(',');
			for (i=0; i<picts.length; i++){
				pictsjpg[i] = picts[i] + '.jpg';
			};
		};
		data = _data;
		data.boutique = boutique;
		data.picts = pictsjpg;
		res.render('boutique', data);
	});
});

app.get('/findboutique', (req,res)=>{
	if (Object.keys(req.query).length === 0){
		res.render('findboutique');
	}else{
		console.log(req.query);
		var salamat = req.query.salamat;
		var salon = req.query.salon;
		var data;
		Boutique.find({salamat, salon}).
			then(
				(docs)=>{
					if (docs){
						data = {docs};
					}else{
						data = {message: 'Ничего не найдено'};
					}
					res.render('editboutique', data);
				}, (err)=>{
					res.redirect('/');
				}
			);
	};
})

app.use('/:page?', (req, res, next)=>{
	var page = req.params.page, data = _data;
	if (!page){
		page = 'home';
	}else if (page.substr(0, 7) == 'salamat'){
		data.salamat = {salamat_numb: page.substr(7,1), floor: page.substr(9,1), floors: floors};
	}else if(page == 'rent'){
		data.rent_imgs = ['rent1.jpg', 'rent2.jpg', 'rent3.jpg', 'rent4.jpg', 'rent5.jpg']
	}else if(page == 'dbedit' || page == 'newplan' || page == 'findboutique' || page=='editboutique'){
		data = {};
	}else if(!checkLink[page]){
		res.redirect('/');
	};
	res.render(page, data);
});
// *************************************************************   R   O    U    T    E    S   ************************************************************



app.listen(port, ()=>{
	console.log('Server is running...');
});
