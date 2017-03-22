const express = require('express');
const app = express();
var mongoose = require('./db/mongoose');
// var {Category} = require('./models/Category');
var Category = require('./db/mongoose').Category;
var {Boutique} = require('./models/Boutique');
const port = process.env.PORT || 3000;
var category;
var links = [{link: 'home', linktitle: 'Главная'}, {link: 'categories', linktitle: 'Категории'}, {link: 'rent', linktitle: 'Аренда'}, {link: 'salamat1-1', linktitle: 
'План'}, {link: 'company', linktitle: 'О нас'}, {link: 'contacts', linktitle: 'Контакты'}];


app.set('view engine', 'pug');
app.use(express.static('public'));


// app.get('/boutiques', (req, res)=>{
// 	if (!req.query.name && !req.query.salamat && !req.query.salon && !req.query.phone && !req.query.total && !req.query.about && !req.query.logo && !req.query.picts){
// 		Boutique.find().then(
// 			(boutiques)=>{
// 				res.send({
// 					boutiques
// 				})
// 			},
// 			(err)=>{
// 				res.status(400).send(err)
// 			}
// 		);
// 		return;
// 	}
// 	var boutique = new Boutique({
// 		name: req.query.name,
// 		salamat: req.query.salamat,
// 		salon: req.query.salon,
// 		phone: req.query.phone,
// 		total: req.query.total,
// 		about: req.query.about,
// 		logo: req.query.logo,
// 		picts: req.query.picts
// 	});
// 	boutique.save().then(
// 		(bot)=>{
// 			res.send('document has been saved');
// 		},
// 		(err)=>{
// 			res.status(400).send(err);
// 		}
// 	);
// });

// app.get('/categories', (req, res)=>{
// 	if (!req.query.index && !req.query.id && !req.query.idparent && !req.query.name && !req.query.count && !req.query.idgrand){
// 		Category.find().then(
// 			(categories)=>{
// 				res.send({
// 					categories
// 				})
// 			},
// 			(err)=>{
// 				res.status(400).send(err)
// 			}
// 		);
// 		return;
// 	};
// 	var category = new Category({
// 		index: req.query.index,
// 		id: req.query.id,
// 		idparent: req.query.idparent,
// 		name: req.query.name,
// 		count: req.query.count,
// 		idgrand: req.query.idgrand
// 	});
// 	category.save().then(
// 		(doc)=>{
// 			res.send('document has been saved');
// 		},
// 		(err)=>{
// 			res.status(400).send(err);
// 		}
// 	);
// });



// app.get('/delbot', (req, res)=>{
// 	Boutique.remove({}).then((result)=>{
// 	res.send('Все удалено!')
// 	});
// });

// app.get('/delcat', (req, res)=>{
// 	Category.remove({}).then((result)=>{
// 	res.send('Все удалено!')
// 	});
// });




// *************************************************************   R   O    U    T    E    S   ************************************************************
app.get('/search', (req, res)=>{
	res.send(mongoose.lvl3);
});

app.get('/getboutique', (req, res)=>{
	var boutique = req.query.boutique;
	var salamat = req.query.salamat;
	Boutique.find({salamat:salamat, salon:boutique})
	.then((docs)=>{
		res.send(docs);
	})
});

app.get('/boutique', (req, res)=>{
	var boutique = req.query.boutique;
	var salamat = req.query.salamat;
	Boutique.find({salamat: salamat, salon: boutique}).then((docs)=>{
		// res.render('boutiques', {item: docs[0], links: links});
		res.render('boutiques', {docs: docs, lvl1: mongoose.lvl1, lvl2: mongoose.lvl2, lvl3: mongoose.lvl3, links: links})
	});
});

app.use('/category', (req, res)=>{
	category = req.query.dataid;
	Boutique.count({total: new RegExp(category, "i")}, (err, numb)=>{
		console.log(numb);
		var numbofpages = (numb % 5)==0 ? (numb/5) : (Math.floor(numb/5)+1); 
		if (numbofpages == 1){
			numbofpages = false;
		};
		Boutique
		.find({total: new RegExp(category, "i")})
		.limit(5)
		.exec((err, docs)=>{
			res.render('boutiques', {docs: docs, lvl1: mongoose.lvl1, lvl2: mongoose.lvl2, lvl3: mongoose.lvl3, pages: numbofpages, links: links})
		});
	});
});


app.use('/boutiques', (req, res)=>{
	var offset = (+req.query.pagenumber - 1) * 5;
	Boutique
		.find({total: new RegExp(category, "i")})
		.skip(offset)
		.limit(5)
		.exec((err, docs)=>{
			res.send(docs);
		});
});

app.use('/:page?', (req, res, next)=>{
	var page = req.params.page, data;
	if (!page || page == 'home'){
		page = 'home';
		data = {lvl1: mongoose.lvl1, lvl2: mongoose.lvl2, lvl3: mongoose.lvl3, links: links};
	}else if(page == 'categories'){
		data = {lvl1: mongoose.lvl1, lvl2: mongoose.lvl2, lvl3: mongoose.lvl3, links: links}
	}else{
		data = {links: links};
	}
	res.render(page, data);
});
// *************************************************************   R   O    U    T    E    S   ************************************************************



app.listen(port, ()=>{
	console.log('Server is running...');
});
