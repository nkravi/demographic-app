var express 	= require('express');
var router 		= express.Router();
var Result 		= require('../models/resultModel');
var TBP			= require('../models/toBeProcessedModel');
//welcome message
router.get('/', function(req, res) {
  res.send('welcome to books home page');
});

//get results
router.get('/getResult/:Id',function(req,res){
	Result.findOne({_id:req.params.Id},function(err,results){
		if(err){
			res.status(500).send(err);
		}else{
			if(results)
				res.status(200).send(results);
			else
				res.status(404).send({message:"No record matched the query"});
		}
	});
});

//put to tbd
router.put('/tbp/:Id',function(req,res){
	var twitterId = req.params.Id;
	var emailId = req.body.emailId;
		
	TBP.findOneAndUpdate({_id:twitterId},
		{'$addToSet':{
        	emailIds: emailId
        }},
        {upsert: true},
        function(err,doc){
        	if(err){
        		console.log(err);
        		res.status(500).send(err);
        	}else{
        		res.status(200).send(doc);
        	}
        }
     );
});

module.exports = router;