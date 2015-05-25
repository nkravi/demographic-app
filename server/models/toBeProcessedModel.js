var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	db 	= mongoose.connect('mongodb://localhost/twitterDemoAPI');

var tbpModel = new Schema({
	_id:{
		type:String
	},
	emailIds:[String]
});

module.exports  = mongoose.model('tbp',tbpModel);