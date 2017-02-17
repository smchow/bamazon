/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database  and specified it for use.
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- Create the table actors.
CREATE TABLE departments (
  id int AUTO_INCREMENT,
  department_name varchar(30) NOT NULL,
  over_head_costs int NOT NULL,
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO departments (department_name, over_head_costs) VALUES ("Appliances",  5000);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Baby", 1000);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Clothing", 2500);
INSERT INTO departments (department_name, over_head_costs) VALUES ("Health", 4000);


CREATE TABLE products (
  id int AUTO_INCREMENT,
  product_name varchar(30) NOT NULL,
  department_id int,
  price decimal(10,2) NOT NULL,
  stock_quantity int,
  PRIMARY KEY(id),
  FOREIGN KEY(department_id) REFERENCES departments(id)
);

INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Iron",  1, 28.99, 15);
INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Alarm Clock", 1 , 9.99 , 20);
INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Thermometer", 4, 9.99, 25);
INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES ("Teether", 2, 4.99, 20);


CREATE TABLE sales(
id int AUTO_INCREMENT,
product_id int,
quantity_purchased int,
created_at  datetime,
PRIMARY KEY(id),
  FOREIGN KEY(product_id) REFERENCES products(id)
)

