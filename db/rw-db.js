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

app.get('/rw-boutiques', (req, res)=>{
	if (!req.query.name && !req.query.salamat && !req.query.salon && !req.query.phone && !req.query.total && !req.query.about && !req.query.logo && !req.query.picts){
		Boutique.find().then(
			(boutiques)=>{
				res.send({
					boutiques
				})
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
		picts: req.query.picts
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