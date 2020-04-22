var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Max2003!",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //call other functions here to get what to do
  start();
  
});

//function immediatly called on start
//asks user what they want to do
function start() {
    inquirer.prompt({
        name: "start",
        message: "What would you like to do?",
        type: "list",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View Employees by Manager",
            "Delete Department",
            "Delete Role",
            "Delete Employee",
            "View Budget of Department"
        ]
    }).then(function(answer) {
        if (answer.start === "View All Departments") {
            viewDepartment();
        } else if (answer.start === "View All Roles") {
            viewRole();
        } else if (answer.start === "View All Employees") {
            viewEmployee();
        } else if (answer.start === "Add Department") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Add Role") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Add Employee") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Update Employee Role") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Update Employee Manager") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "View Employees by Manager") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Delete Department") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Delete Role") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Delete Employee") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "View Budget of Department") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else {
            console.log("Something went wrong or nothing selected");
            connection.end();
        }
    });
}

//make a function for each of the choices at the start
//that switches back to start at the end of them

//function to view all departments
function viewDepartment() {
    connection.query("SELECT * FROM role", function(err, res){
        if (err) throw err;
        console.table(res);
        console.log("----------------------");
        start();
    })
}

//function to view all roles
function viewRole() {
    connection.query("SELECT * FROM role", function(err, res){
        if (err) throw err;
        console.table(res);
        console.log("----------------------");
        start();
    })
}

//function to view all employees
function viewEmployee() {
    connection.query("SELECT * FROM employee", function(err, res){
        if (err) throw err;
        console.table(res);
        console.log("----------------------");
        start();
    })
}

