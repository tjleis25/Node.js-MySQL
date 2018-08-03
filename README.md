# Node.js-MySQL
Welcome to Bamazon! The Online Store.

Using MySQL, the first order of business was to create a table of 10 different products and create a node application called bamazonCustomer.js. Please see the first image below. 

![](images/Screenshot%20(31).png)

In Running this application the app will then prompt users with two messages. See Images below. 

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

 Once the customer has placed the order, the application then verifies that the store has enough of the product to meet the customer's request.
 
![](images/Screenshot%20(32).png) 
![](images/Screenshot%20(33).png)

   * If not, the app will log the phrase, "Sorry. Not enough items in stock. Please try again.", and then prevents the order from going through.
   
![](images/Screenshot%20(34).png) 

8. However, if the store does have enough of the product requested, the order is fullfilled and SQL database is updated to reflect the remaining quantity.
   
