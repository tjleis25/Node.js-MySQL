DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("East of Eden", "Books", 19.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Prince of Tides", "Books", 14.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Freewheelin Bob Dylan", "Music", 9.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Portrait in Jazz", "Music", 4.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "Sports", 9.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Football", "Sports", 9.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Multi-Vitamin for Men", "Vitamins & Dietary Supplements", 19.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shampoo", "Beauty & Personal Care", 9.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Diapers", "Toys, Kids & Baby", 49.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Motor Oil", "Automotive & Industrial", 29.99, 35);

