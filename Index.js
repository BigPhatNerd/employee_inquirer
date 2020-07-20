const inquirer = require("inquirer");
//const generatePage = require("./src/page-template");
const fs = require("fs");
const { writeFile, copyFile } = require("./utils/generate-site.js");
const { templateData, employeeArray, employeeCards } = require("./src/page-template");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//const employeeArray = [];

const whatType = () => {
    inquirer
        .prompt([{
            type: "list",
            name: "memberChoice",
            message: "Which type of employee are you creating?",
            choices: [
                "Engineer",
                "Intern",
                "Manager"

            ]
        }]).then(answers => {
            switch (answers.memberChoice) {
                case "Engineer":
                    addEngineer(answers);
                    break;
                case "Intern":
                    addIntern(answers);
                    break;
                case "Manager":
                    addManager(answers);
                    break;
                default:
                    console.log("not sure what to do here");
            }
        })
}

const addIntern = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is your name?",

            },
            {
                type: "input",
                name: "id",
                message: "What is your id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?",
            },
            {
                type: "input",
                name: "school",
                message: "What is your school name?"

            },
            buildAnother()
        ]).then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            employeeArray.push(intern);
            if (response.continue) {
                console.log("employeeArray: ", employeeArray);
                whatType();
            } else {

                console.log("generatePage(engineer): ", templateData(intern));
                writeFile(templateData(employeeCards));

                copyFile();

            }
        })
}




const addEngineer = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is your name?",

            },
            {
                type: "input",
                name: "id",
                message: "What is your id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is your github name?"

            },
            buildAnother()
        ]).then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            employeeArray.push(engineer);
            if (response.continue) {
                console.log("employeeArray: ", employeeArray);
                whatType();
            } else {

                console.log("generatePage(engineer): ", templateData(engineer));
                writeFile(templateData(employeeCards));

                copyFile();

            }
        })
}
const addManager = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is your name?",

            },
            {
                type: "input",
                name: "id",
                message: "What is your id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?"

            },
            buildAnother()
        ]).then(response => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            employeeArray.push(manager);
            if (response.continue) {
                console.log("employeeArray: ", employeeArray);
                whatType();
            } else {

                console.log("generatePage(engineer): ", templateData(manager));
                writeFile(templateData(employeeCards));

                copyFile();

            }
        })
}

const buildAnother = () => {
    return {
        type: "confirm",
        name: "continue",
        message: "Would you like to build another employee?"
    }
}


whatType()





//