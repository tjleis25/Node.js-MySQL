# Node.js-MySQL
Welcome to Bamazon! The Online Store.

Using MySQL, the first order of business was to create a table of 10 different products and create a node application called bamazonCustomer.js. Please see the first image below. 

![](images/Screenshot%20(31).png)

In Running this application the app will then prompt users with two messages. See Images below. 

   * Which item would you like to buy?
   * How many units of the product would you like to buy?

 Once the customer has placed the order, the application then verifies that the store has enough of the product to meet the customer's request.
 
![](images/Screenshot%20(32).png) 
![](images/Screenshot%20(33).png)

   * If so, a message will appear saying "You're order was successfully placed"and the SQL database is updated to reflect the remaining quantity.
    
   * If not, the app will log the phrase, "Sorry. Not enough items in stock. Please try again.", and then prevents the order from going through.
   
![](images/Screenshot%20(34).png) 


