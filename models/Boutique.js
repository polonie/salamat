var mongoose = require('mongoose');
var Boutique = mongoose.model('Boutique', {
	name: String,
	salamat: String,
	salon: String,
	phone: String,
	total: String,
	about: String,
	logo: String,
	picts: String,
	son: String,
	email: String,
	site: String,
	etazh: String
});

module.exports = {Boutique};