var fs = require("fs");
var inquirer = require("inquirer");

const questions = [
    "What is your GitHub username?: ", 
    "What type of license are you using?: ", 
    "What is the project title?: ", 
    "Please, provide a description of your project: ", 
    "Provide the table of contents: ", 
    "Provide the installation instructions: ", 
    "Provide the usage: ",  
    "Please, list the contributors to the project: ", 
    "Provide information about the tests: ", 
    "Do you want to add any questions?: "
];

inquirer.prompt([
    {type: "input", message: questions[0], name: "userName"},
    {type: "list", message: questions[1], name: "license", choices: ["MIT", "Public", "GNU", "Copyleft", "Proprietary"]},
    {type: "input", message: questions[2], name: "projectTitle" },
    {type: "input", message: questions[3], name: "projectDescription" },
    {type: "input", message: questions[4], name: "tableContents", default: "Project Title Description Installation Usage Contributors Tests Questions"},
    {type: "input", message: questions[5], name: "installationInstructions", default: "Run npm install" },
    {type: "input", message: questions[6], name: "usage", default: "Follow instructions" },
    {type: "input", message: questions[7], name: "contributors", default: "No contributors" },
    {type: "input", message: questions[8], name: "tests", default: "No tests" },
    {type: "input", message: questions[9], name: "questions", default: "No questions" }
  ])
  .then(function(answer) {
    console.log(answer);
    // `https://img.shields.io/static/v1?label=License&message=${license}&color=brightgreen`
  })
  .catch(err => {
      if(err) throw err;
      console.log("No errors in the answers")
  });


function writeToFile(fileName, answer) {
    fileName = answer.name.toLowerCase().split(" ").join("") + ".json";
    fs.writeFile(fileName, JSON.stringify(answer, null, "\t"), function(err){
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





