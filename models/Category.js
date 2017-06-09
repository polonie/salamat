var mongoose = require('mongoose');
var categorySchema = new mongoose.Schema({index: String, id: String, idparent: String, name: String, count: String, idgrand: String});
var Category = mongoose.model('Category', categorySchema);

module.exports = {Category};