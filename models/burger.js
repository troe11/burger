var orm = require('../config/orm.js');

var burger = {
	all: function(cb){
		orm.selectAll('burgers',function(res){
			cb(res);
		})
	},
	insert: function(name,dev,cb){
		orm.insertOne('burgers',name,dev,function(res){
			cb(res);
		})
	},
	update: function(dev,id,cb){
		orm.updateOne('burgers',dev,id,function(res){
			cb(res);
		})
	}
}

module.exports = burger;