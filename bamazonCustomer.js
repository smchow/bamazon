
var mysql      = require('mysql');
var inquirer   = require('inquirer');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon_db'
});
 
connection.connect();
 
connection.query('select products.id as id, product_name, price  from products, departments where products.department_id = departments.id;', function (error, results, fields){
  if (error) throw error;
  console.log(results);
  /*for (var i =0 ; i < results.length ; i++){
  	  console.log(results[i].department_name);
  }
});*/
inquirer.prompt([
  {type: "input",
    name: "product_id",
    message: "Enter the id of the product you want to purchase"},
    {type: "input",
    name: "quantity",
    message: "How many do you want to purchase"}
  ]).then(function(data){
    var product_id = data.product_id;
    var quantity = data.quantity;
//INSERT INTO departments (department_name, over_head_costs) VALUES ("Appliances",  5000);

    connection.query('INSERT INTO sales SET ?', {
      product_id:producti_id,
      quantity: quantity
      },function (error, results, fields) {
        console.log(error);
        console.log('insert complete');
     /* console.log(results);
      console.log('\n');
      inquirer.prompt([
      {type: "input",
        name: "beer_id",
        message: "Put the id of the beer that you want."}
      ]).then(function(data){
        //do an insert into mysql 
        /*connection.query('INSERT into dranken_beers SET ?', {
          beer_id : data.beer_id,
          dranker_id : dranker
        }, function (error, results, fields) {
          console.log('insert complete')
        });
      });*/
    });

  });
});


// //write update function
// function updateTable(id, table){
//  connection.query("UPDATE " + table + " SET ? WHERE ?", [{

 
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