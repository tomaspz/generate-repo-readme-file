var fs = require("fs");
var inquirer = require("inquirer");

const questions = ["What is your GitHub username?: ", "What label would you like for your badge?: ", "What message would you like for your badge?: ", "What is the project title?: ", "Please, provide a description of your project: ", "Provide the table of contents: ", "Provide the installation instructions: ", "Provide the usage: ", "What type of license are you using?: ", "Please, list the contributors to the project: ", "Provide information about the tests: ", "Do you want to add any questions?: "
];

inquirer.prompt([
    {type: "input", message: questions[0], name: "userName"},
    {type: "input", message: questions[1], name: "badgeLabel"},
    {type: "input", message: questions[2], name: "badgeMessage" },
    {type: "input", message: questions[3], name: "projectTitle" },
    {type: "input", message: questions[4], name: "projectDescription" },
    {type: "input", message: questions[5], name: "tableContents" },
    {type: "input", message: questions[6], name: "installationInstructions" },
    {type: "input", message: questions[7], name: "usage" },
    {type: "input", message: questions[8], name: "license" },
    {type: "input", message: questions[9], name: "contributors" },
    {type: "input", message: questions[10], name: "tests" },
    {type: "input", message: questions[11], name: "questions" }
    // {type: "checkbox", message: "What technologies do you know?", name: "stack", choices: ["HTML", "CSS", "Javascript", "jQuery"]},
    // {type: "input", message: "What languages do you know?", name: "languages"},
    // {type: "input", message: "What is your preferred method of communciation?", name: "communication", choices: ["email", "phone", "telepathy"]}
  ])
  .then(function(response) {

    console.log("Your name is: " + response.userName);
    console.log("The badge will read: " + response.badgeLabel + " " + response.badgeMessage);
    console.log("The project title: " + response.projectTitle);
    console.log("The project description: " + response.projectDescription);
  });


function writeToFile(fileName, data) {
    filename = response.name.toLowerCase().split(" ").join("") + ".json";
    fs.writeFile(filename, JSON.stringify(response, null, "\t"), function(err){
        if(err) {
            return err;
        }
        else {
            console.log("Success!");
        }
    })
}

function init() {

}

init();





