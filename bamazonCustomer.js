var password = require("./password.js");
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  // password kept private in github
 //  password: password.password, 
  password: "root",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for which product they would like to buy
var start = function() {
   // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, res) {
      for(var i = 0; i < res.length; i++){
          console.log(res[i].item_id +" || "+ res[i].product_name +" ||" + res[i].department_name + " || Unit Price: " + res[i].price +"||  No. of Items in Stock: " + res[i].stock_quantity +"\n");
      }
      askCustomer(res);
    })
}
var askCustomer = function(res) {
    // once you have the items, prompt the user for which they'd like to bid on 
    inquirer
      .prompt([
        {
        name: "selection",
        type: "input",
        message: "Which item would you like to buy?"
    }])
    .then(function(answer){ 
        var correct = false;
        for(var i = 0; i < res.length; i++) {
            if(res[i].product_name === answer.selection) {
                correct = true; 
                var product = answer.selection;
                var id = i;
                inquirer
                    .prompt(
                    {
                    name: "how_much",
                    type: "input",
                    message: "How many units of the product would you like to buy?",
                    validate: function(value) {
                        if (isNaN(value) === false) {
                            return true;
                        } else {
                        return false;
                        }
                    }
                }).then(function(answer){
                    if((res[id].stock_quantity-answer.how_much)>=0) {
                        connection.query("UPDATE products SET stock_quantity='"+(res[id].stock_quantity-answer.how_much)+"'WHERE product_name='" + product+"'",function(err, res){
                            console.log("Your order was successfully placed.")
                            start();
                        })
                    } else {
                        console.log("Sorry. Not enough items in stock. Please try again.")
                        askCustomer(res);
                    }
                })
            }
        }
    })  
}