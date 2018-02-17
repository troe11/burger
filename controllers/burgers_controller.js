var burger = require('../models/burger.js');
var express = require('express');

var app = express();

var router = express.Router();

router.get('/',function(req,res){
	burger.all(function(data){
		var burgerObj = {
			burgers:data
		};
		res.render('index',burgerObj);
	});
});

router.post('/api/burgers',function(req,res){
	//the follwoing is pulled from cat activity on 14-handlebars
	burger.insert(['name','devoured'],
		[req.body.name,req.body.devoured],function(result){
			res.json({ id: result.insertID})
			//not sure how insertID is being created
		})
})

module.exports = router;