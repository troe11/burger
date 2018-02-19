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
	burger.insert(req.body.burger_name,req.body.devoured,function(result){
			res.render(result)
		});
});

router.put('/api/burgers/:id',function(req,res){	
	console.log(req.params.id)
	burger.update(1,req.params.id,function(result){
		res.render(result)
	})
})


module.exports = router;