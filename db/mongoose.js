var mongoose = require('mongoose');
var categorySchema = new mongoose.Schema({index: String, id: String, idparent: String, name: String, count: String, idgrand: String});
var Category = mongoose.model('Category',categorySchema);
var lvl1 = [], lvl2 = [], lvl3 = [];
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Salamat', function(){
	console.log('Connected to database');
	Category.find({}).then((docs)=>{
		docs.forEach((item, i, arr)=>{
			if(item.idparent=='@'){
				lvl1.push(item);
			}else if(item.idgrand=='Papa'){
				lvl2.push(item);
			}else{
				lvl3.push(item);
			}
		});
	});
});
module.exports = {lvl1, lvl2, lvl3, Category};