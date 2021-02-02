const { prompt } = require("inquirer");
const db = require("./db");

mainPrompts();

function mainPrompts() {
    prompt([
        {
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
                    name: "View all roles",
                    value: "ALL_ROLES"
                },
                {
                    name: "Add a role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Update employee role",
                    value: "UPDATE_EMPLOYEE"
                },
                {
                    name: "quit",
                    value: "QUIT"
                }
            ]
        }
    ])
        .then(res => {
            console.log(res)
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
                    viewRoles();
                    break;
                case "ADD_ROLE":
                    addRole();
                    break;
                case "UPDATE_EMPLOYEE":
                    updateEmployee();
                    break;
                default:
                    quit();
            }
        }).catch(err => {
            console.log(err);
        })
}
// view departments
function viewDepartment() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.table(departments);
        })
        .then(() => mainPrompts());
}
// add department
function addDepartment() {
    prompt([
        {
            name: "name",
            message: "What department are you adding?"
        }
    ])
        .then(res => {
            let name = res
            db.createDepartment(name)
                .then(() => console.log(`${name.name} was added to the database`))
                .then(() => mainPrompts())
        })
}
// view employee
function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.table(employees);
        })
        .then(() => mainPrompts());
}
// add employee
function addEmployee() {
    prompt([
        {
            name: "first_name",
            message: "What is the first name?"
        },
        {
            name: " last_name",
            message: "What is the last name?"
        },
        {
            name: "salary",
            message: "what is the employee's salary?"
        }
    ])
        .then(res => {
            let first_name = res.first_name;
            let last_name = res.last_name;
            let salary = res.salary;

            db.findAllRoles()
                .then(([rows]) => {
                    let roles = rows;
                    const roleChoices = roles.map(({ id, title }) => ({
                        value: id,
                        name: title,
                    }));

                    prompt({
                        type: "list",
                        name: "roleId",
                        message: " What is the employee's role?",
                        choices: roleChoices
                    })
                        .then(res => {
                            let roleId = res.roleId;

                            db.findAllEmployees()
                                .then(([rows]) => {
                                    let employees = rows;
                                    const leaderChoices = employees.map(({ id, first_name, last_name, salary }) => ({
                                        value: id,
                                        name: `${first_name} ${last_name}`,
                                    }));
                                    leaderChoices.unshift({ name: "None", value: null });

                                    prompt({
                                        type: "list",
                                        name: "leaderId",
                                        message: "Who is the employee's leader?",
                                        choices: leaderChoices
                                    })


                                        .then(res => {
                                            let employee = {
                                                leaderId: res.leaderId,
                                                roleId: roleId,
                                                first_name: first_name,
                                                last_name: last_name,
                                                salary: salary,
                                                departments: departments
                                            }
                                            db.creatEmployee(employee);
                                        })
                                        .then(() => console.log(`Added ${first_name} ${last_name} to the database`
                                        ))
                                        .then(() => mainPrompts())
                                });
                        });

                });
        });
};

// view roles
function viewRoles() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles);
        })
        .then(() => mainPrompts());
}

// Add a role
function addRole() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ id, name }) => ({
                name: name,
                value: id
            }));

            prompt([
                {
                    name: "title",
                    message: "What is the name of the role?"
                },
                {
                    name: "salary",
                    message: "What is the salary?"
                },
                {
                    type: "list",
                    name: "department_id",
                    message: "Which department is this role in?",
                    choices: departmentChoices
                }
            ])
                .then(role => {
                    db.createRole(role)
                        .then(() => console.log(`Added ${role.title} to the database`))
                        .then(() => mainPrompts())
                })
        })
}
//update an employee
function updateEmployee() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
                value: id,
                name: `${first_name} ${last_name}`
            }));

            prompt([
                {
                    type: "list",
                    name: "employeeId",
                    message: "Which employee do you want to update?",
                    choices: employeeChoices
                }
            ])
                .then(res => {
                    let employeeId = res.employeeId;
                    db.findAllRoles()
                        .then(([rows]) => {
                            let roles = rows;
                            const roleChoices = roles.map(({ id, title }) => ({
                                value: id,
                                name: title
                            }));

                            prompt([
                                {
                                    type: "list",
                                    name: "roleId",
                                    message: "What is the employees role?",
                                    choices: roleChoices
                                }
                            ])
                                .then(res => db.updateEmployeeRole(employeeId, res.roleId))
                                .then(() => console.log("Updated employee's role"))
                                .then(() => mainPrompts())
                        })
                })
        })
}

// I QUIT!!
function quit() {
    console.log("Thank you! have a GREAT day!");
    process.exit();
}
