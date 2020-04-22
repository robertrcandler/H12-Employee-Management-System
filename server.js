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
        type: "list",
        choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View All Roles",
            "Add New Role",
            "Remove Roll"
        ]
    }).then(function(answer) {
        if (answer.start === "View All Employees") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "View All Employees By Department") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "View All Employees By Manager") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Add Employee") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Remove Employee") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Update Employee Role") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Update Employee Manager") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "View All Roles") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Add New Role") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else if (answer.start === "Remove Roll") {
            //call function for that here
            console.log("Function not available yet, sorry!");
        } else {
            console.log("Something went wrong or nothing selected");
            connection.end();
        }
    });
}
