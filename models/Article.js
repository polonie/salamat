let mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	body:{
		type: String,
		required: true
	}
});

let Article = mongoose.model('Article', articleSchema);

module.exports = {Article};