const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const employeeArray = [];
const templateData = (name, id, email, github, school, officeNumber) => {
    return `
<!DOCTYPE html>
<html>

<head>
    <title>Employee Challenge </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>  
            <h1>My Team</h1>
    </header>
    <div class="container">
        ${employeeCards(name, id, email, github, school, officeNumber)}
    </div>
</body>

</html>
    `;
}

const employeeCards = (name, id, email, github, school, officeNumber) => {

    var html = '';
    employeeArray.map(employee => {
        if (employee instanceof Engineer) {
            html += `
    <div class="card">
            <div class="top-blue">
                <h3>${employee.name}</h3>
                <h4>icon & Manager/Engineer/Intern</h4>
            </div>
            <div class="grey-background">
                <div class="row-container">
                    <div class="row">
                        <p>${employee.id}</p>
                    </div>
                    <div class="row">
                        <p>${employee.email}</p>
                    </div>
                    <div class="row">
                        <p>Github: ${employee.github}</p>
                    </div>
                </div>
            </div>
        </div>
    `
        } else if (employee instanceof Intern) {
            html += `
    <div class="card">
            <div class="top-blue">
                <h3>${employee.name}</h3>
                <h4>icon & Manager/Engineer/Intern</h4>
            </div>
            <div class="grey-background">
                <div class="row-container">
                    <div class="row">
                        <p>${employee.id}</p>
                    </div>
                    <div class="row">
                        <p>${employee.email}</p>
                    </div>
                    <div class="row">
                        <p>School: ${employee.school}</p>
                    </div>
                </div>
            </div>
        </div>
    `

        } else if (employee instanceof Manager) {
            html += `
    <div class="card">
            <div class="top-blue">
                <h3>${employee.name}</h3>
                <h4>icon & Manager/Engineer/Intern</h4>
            </div>
            <div class="grey-background">
                <div class="row-container">
                    <div class="row">
                        <p>${employee.id}</p>
                    </div>
                    <div class="row">
                        <p>${employee.email}</p>
                    </div>
                    <div class="row">
                        <p>Office Number: ${employee.officeNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    `

        }
    });

    return html;

};

module.exports = { templateData, employeeArray, employeeCards };