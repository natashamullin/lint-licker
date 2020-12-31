const { prompt } = require("inquirer");
const db = require("./db");

require("console.table");

init();

function mainPrompts() {
    prompt([{
        type: "list",
        name: "choice",
        message: "what do you want to do?",
        choices: [
            {
                name: "View all departments",
                value: "VIEW_ALL_DEPARTMENTS"
            },
            {
                name: "Add a department",
                value: "ADD_DEPARTMENT"
            },
            {
                name: "View all employee",
                value: "VIEW_EMPLOYEES"
            },
            {
                name: "Add an employee",
                value: "ADD_EMPLOYEE"
            },
            {
                name: "View all roles?",
                value: "ALL_ROLES"
            },
            {
                name: "Update employee role",
                value: "UPDATE_EMPLOYEE"
            },
            {
                name: "quit",
                value: "QUIT"
            },
        ]
    }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "VIEW_ALL_DEPARTMENTS":
                viewDepartment();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "ALL_ROLES":
                addRole();
                break;
            case "UPDATE_EMPLOYEE":
                updateEmployee();
                break;
            case "QUIT":
                quit();
                break;


        }
    })
}