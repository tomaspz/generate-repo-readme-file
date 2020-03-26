const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

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
    {type: "input", message: questions[4], name: "tableContents", 
        default: `<li>Project Title</li><li>Description</li><li>Installation</li><li>Usage</li><li>Contributors</li><li>Tests</li><li>Questions</li>`},
    {type: "input", message: questions[5], name: "installationInstructions", default: "Run npm install" },
    {type: "input", message: questions[6], name: "usage", default: "Follow instructions" },
    {type: "input", message: questions[7], name: "contributors", default: "No contributors" },
    {type: "input", message: questions[8], name: "tests", default: "No tests" },
    {type: "input", message: questions[9], name: "questions", default: "No questions" }
  ])
  .then(answer => {

    axios
    .get(`https://api.github.com/users/${answer.userName}`)
    .then(function(response) {
      console.log(response.data);
      const readmeFileText = `<h1>Project Title: ${answer.projectTitle}</h1>
      <hr>
      <img src="https://img.shields.io/static/v1?label=License&message=${answer.license}&color=brightgreen" alt="License badge"/>
      <img src="https://cdn.rawgit.com/jongracecox/anybadge/master/examples/awesomeness.svg" alt="Awesome badge"/>
      <hr>
      <h4>Project Description:</h4>
      <p>${answer.projectDescription}</p>
      <hr>
      <h4>Table of Contents:</h4>
      <ol>${answer.tableContents}</ol>
      <hr>
      <h4>Installation Instructions:</h4>
      <p>${answer.installationInstructions}</p>
      <hr>
      <h4>Usage:</h4>
      <p>${answer.usage}</p>
      <hr>
      <h4>Contributors:</h4>
      <p>${answer.contributors}</p>
      <hr>
      <h4>Tests:</h4>
      <p>${answer.tests}</p>
      <hr>
      <h4>Questions:</h4>
      <p>${answer.questions}</p>
      <hr>
      <h4>Author Email:</h4><p>${response.data.email}</p>
      <hr>
      <h4>Author Picture:</h4>
      <img src="${response.data.avatar_url}" alt="User avatar"/>
      `;

      fs.appendFile("README.md", readmeFileText, err => {
          if (err) {
            return console.log(err);
          }
          console.log("The README.md file has been written!");
      })
    })
    .catch(function(err){
      console.log(err);
    });
  })
  .catch(err => {
      if(err) throw err;
      console.log("No errors in the answers")
  });


// function writeToFile(fileName, data) {
//     fileName = data.name.toLowerCase().split(" ").join("") + ".json";
//     fs.writeFile(fileName, JSON.stringify(data, null, "\t"), function(err){
//         if(err) {
//             return err;
//         }
//         else {
//             console.log("Success!");
//         }
//     })
// }

// function init() {

// }

// init();





