var connection = require("./connection.js");

var orm = {
	selectAll: function(table,cb){
		var queryString = 'SELECT * FROM ??';
		connection.query(queryString,table,function(err,res){
			if(err)throw err;
			return cb(res)
		})
	},
	insertOne: function(table,burger_name,devoured){
		var queryString = 'insert into ?? (burger_name,devoured) values (?,?)';
		connection.query(queryString,[table,burger_name,devoured],function(err,result){
			if(err)throw err;
			return result;
		})
	},
	updateOne: function(table,devoured,id){
		var queryString = 'update ?? set devoured = ? where id = ?';
		connection.query(queryString,[table,devoured,id],function(err,result){
			if(err)throw err;
			return result;
		})
	}
}

module.exports = orm;