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
	},
	date:{
		type: Date,
		default: Date.now
	}
});

let Article = mongoose.Model('Article', articleSchema);

module.exports = {Article};