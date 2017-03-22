var mongoose = require('mongoose');
var async = require('async');


mongoose.Promise = global.Promise;
var categorySchema = new mongoose.Schema({id: String, idparent: String, categoryname: String});
var Category = mongoose.model('Category', categorySchema);

function makeid()
{
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for( var i=0; i < 5; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
};




mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Salamat', function(){
	console.log('Connected to database');
	mongoose.connection.db.dropDatabase(()=>{
		console.log('database has been dropped');
		async.parallel(
		[
			(callback)=>{
				var doc = new Category({id: 'bmat', idparent: '&', categoryname: 'Стройматериалы'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: 'int', idparent: '&', categoryname: 'Интерьер'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: 'sant', idparent: '&', categoryname: 'Сантехника'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: 'tools', idparent: '&', categoryname: 'Инструменты'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: 'electro', idparent: '&', categoryname: 'Электрооборудование'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: 'kanal', idparent: '&', categoryname: 'Отопление и канализация'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: 'services', idparent: '&', categoryname: 'Услуги'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: 'other', idparent: '&', categoryname: 'Другое'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'bmat', categoryname: 'Строительные материалы'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'bmat', categoryname: 'Крепежные материалы'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'bmat', categoryname: 'Лакокрасочные материалы'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'bmat', categoryname: 'Кровельные материалы'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'bmat', categoryname: 'Отделочные материалы'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'int', categoryname: 'Мебель'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'int', categoryname: 'Окна'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'int', categoryname: 'Двери'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'sant', categoryname: 'Туалет'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'sant', categoryname: 'Ванна'})
				doc.save((err)=>{
					callback(err, doc);
				});
			},
			(callback)=>{
				var doc = new Category({id: makeid(), idparent: 'sant', categoryname: 'Кухня'})
				doc.save((err)=>{
					callback(err, doc);
				});
			}
			
		], (err, results)=>{
			console.log('documents have been saved');
			console.log(results);
		});
		mongoose.disconnect((callback)=>{
			console.log('disconnected from database')
		});
	});

});


module.exports = {Category};