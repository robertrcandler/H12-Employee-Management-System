-- Drops the cms_db if it exists currently --
DROP DATABASE IF EXISTS CMS_db;
-- Creates the "cms_db" database --
CREATE DATABASE CMS_db;

-- Makes it so all of the following code will affect cms_db --
USE CMS_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NULL,
  -- was having problems with decimal then double, finally worked as int
  salary INT NULL,
  -- department_id references the id from department table
  department_id INT NOT NULL
);

CREATE TABLE employee (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  -- reference role_id to the id in role for what positiion the employee has
  role_id INT NOT NULL, 
  -- returns role id of the manager of the employee
  -- as another employee from the table
  manager_id INT NULL
);

-- create some data to add to tables above
INSERT INTO department(name)
VALUES ("Management"),("Logistics"),("Sales"),("Research");

INSERT INTO role (title,salary,department_id)
VALUES ("CEO",1000,1),
    ("Accountant",70,2),
    ("Salesman",50,3),
    ("Scientist",100,4);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Robert","Candler",1,NULL),
        ("Dustin","Hoffman",2,1),
        ("Dwight","Shrute",3,1),
        ("Gordon","Freeman",4,1)
