const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
	email:{

	},
	password:{
		type: String,
		required: true
	}
});
let User = mongoose.model('User', userSchema);
module.exports = {User};