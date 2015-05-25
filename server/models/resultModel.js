var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	//db 	= mongoose.connect('mongodb://localhost/twitterDemoAPI');


var resultsModel = new Schema({
	_id:{
		type:String
	},
	education:{
		'nocollege':{type:Number,min:0,max:100},
		'college':{type:Number,min:0,max:100},
		'gradschool':{type:Number,min:0,max:100}
	},
	income:{
		'0to50k':{type:Number,min:0,max:100},
		'50to100k':{type:Number,min:0,max:100},
		'100to150k':{type:Number,min:0,max:100},
		'150ormore':{type:Number,min:0,max:100}
	},
	age:{
		'18to24':{type:Number,min:0,max:100},
		'25to34':{type:Number,min:0,max:100},
		'35to44':{type:Number,min:0,max:100},
		'45to54':{type:Number,min:0,max:100},
		'55to64':{type:Number,min:0,max:100},
		'65ormore':{type:Number,min:0,max:100}
	},
	ethnicity:{
		'caucasian':{type:Number,min:0,max:100},
		'hispanic':{type:Number,min:0,max:100},
		'africanamerican':{type:Number,min:0,max:100},
		'asian':{type:Number,min:0,max:100}
	},
	gender:{
		'male':{type:Number,min:0,max:100},
		'female':{type:Number,min:0,max:100}
	},
	family:{
		'kids':{type:Number,min:0,max:100},
		'nokids':{type:Number,min:0,max:100}
	}

});

module.exports = mongoose.model('results',resultsModel);