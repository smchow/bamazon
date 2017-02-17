
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon_db'
});
 
connection.connect();
 
connection.query('select * from products, departments where products.department_id = departments.id;', function (error, results, fields){
  if (error) throw error;
  console.log(results);
  for (var i =0 ; i < results.length ; i++){
  	  console.log(results[i].department_name);
  }
});
 
/*function insertIntoBeers(name, type, abv){
  connection.query("INSERT INTO beers SET ?", {
      name: name,
      type: type,
      abv: abv
    }, function(err, res) { console.log('completed!')});
}

funtion deleteFromTable(id, table){
	connection.query("DELETE FROM" + table + "WHERE ?", {
      id: id
     
    }, function(err, res) { console.log('Delete completed!')});
}
}

deleteFromTable ('1', 'beers');
*/
/*updateTable('name', 'Special Beer'  , '1' , 'breweries');

function updateTable(col , value, id, table){
var qryStr = 'UPDATE ' + table + 'SET ' + col + ' = '  + value + ' where id = ' + id;
connection.query(qryStr, function (error, results, fields){
  if (error) throw error;
//update  breweries set name = where id =1 ; 
});
}*/
//insertIntoBeers('mikes vodka', 'vodka beer', 200);
connection.end();