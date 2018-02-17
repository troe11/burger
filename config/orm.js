var connection = require("./connection.js");

var orm = {
	selectAll: function(table){
		var queryString = 'SELECT * FROM ??';
		connection.query(queryString,[table],function(err,res){
			if(err)throw err;
			return res
		})
	},
	insertOne: function(table,burger_name,devoured){
		var queryString = 'insert into ?? (burger_name,devoured) values (?,?)';
		connection.query(queryString,[table,burger_name,devoured],function(err,result){
			if(err)throw err;
			return res;
		})
	},
	updateOne: function(table,devoured,id){
		var queryString = 'update ?? set devoured = ? where id = ?';
		connection.query(queryString,[table,devoured,id],function(err,result){
			if(err)throw err;
			return res;
		})
	}
}

module.exports = orm;