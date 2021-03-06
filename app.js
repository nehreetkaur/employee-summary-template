const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const createTeam = [];
const empId = []



const managerQuestion = [
    {

        type: "input",
        name: "managerName",
        message: "What is the manager's name",
        validate: function (input) {
            if (!input) {
                console.log("Invalid input ");
                return false;
            }
            return true;
        }
    },




    {
        type: "input",
        name: "managerId",
        message: "What is manager's ID",
        validate: function (input) {
            if (isNaN(input)) {
                console.log("Invalid input ");
                return false;
            }
            return true;
        }
    },

    {
        type: "input",
        name: "managerEmail",
        message: "What is manager's email",



    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is manager's office number"

    }

];

function managerInfo() {
    console.log("Let's build our team");
    inquirer.prompt(managerQuestion).then(function (data) {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
        createTeam.push(manager);
        empId.push(data.managerId);
        teamMember();

    });
};

function teamMember() {

    inquirer.prompt([

        {
            type: "list",
            name: "member",
            message: "Which type of member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add team members"]
        }



    ]).then(function (data) {
        if (data.member === "Engineer") {
            createEngineer();
        } else if (data.member === "Intern") {
            createIntern();
        } else (makeTeam());
    });

};




//engineer

function createEngineer() {
    inquirer.prompt([

        {
            type: "input",
            name: "engineerName",
            message: "What is engineer's name",
            validate: function (input) {
                if (!input) {
                    console.log("Invalid input ");
                    return false;
                }
                return true;
            }

        },

        {
            type: "input",
            name: "engineerId",
            message: "What is engineer's ID",
            validate: function (input) {
                if (isNaN(input)) {
                    console.log("Invalid input ");
                    return false;
                }
                return true;
            }





        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is engineer's email",
        },

        {

            type: "input",
            name: "engineerGithub",
            message: "What is engineer's github username",

        }
    ]).then(function (data) {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        createTeam.push(engineer);
        empId.push(data.engineerId);
        teamMember();
    });
};

// Intern

function createIntern() {

    inquirer.prompt([

        {


            type: "input",
            name: "internName",
            message: "What is the intern's name",
            validate: function (input) {
                if (!input) {
                    console.log("Invalid input ");
                    return false;
                }
                return true;
            }


        },

        {
            type: "input",
            name: "internId",
            message: "What is intern's ID",
            validate: function (input) {
                if (isNaN(input)) {
                    console.log("Invalid input ");
                    return false;
                }
                return true;
            }
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is intern's email",



        },
        {
            type: "input",
            name: "internSchool",
            message: "What is intern's school"

        }

    ]).then(function (data) {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        createTeam.push(intern);
        empId.push(data.internId);
        teamMember();

    });
};


function makeTeam() {
    const finalTeam = render(createTeam);
    console.log(finalTeam);

    fs.writeFile(outputPath, finalTeam, "utf8", (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });




}
managerInfo();











// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
