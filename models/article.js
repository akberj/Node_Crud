const mongoose = require('mongoose');

module.exports = mongoose.model('Article', {

title:{
	
	type: String,
	required: true
},

author:
{
	type: String,
	required: true
},
body:
{
	type: String,
	required: true
}

});