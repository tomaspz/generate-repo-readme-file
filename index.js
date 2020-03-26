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
    {type: "input", message: questions[4], name: "tableContents", default: `*Project Title\n *Description\n *Installation\n *Usage\n *Contributors\n *Tests\n *Questions`},
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
      const readmeFileText = `
      #Project Title: \n
      ${answer.projectTitle}  \n
      https://img.shields.io/static/v1?label=License&message=${answer.license}&color=brightgreen \n
      ###Project Description: \n
      ${answer.projectDescription} \n
      ###Table of Contents:\n 
      ${answer.tableContents} \n
      ###Installation Instructions: \n
      ${answer.installationInstructions} \n
      ###Usage: \n
      ${answer.usage} \n
      ###Contributors: \n
      ${answer.contributors} \n
      ###Tests: \n
      ${answer.tests} \n
      ###Questions: \n
      ${answer.questions} \n
      ###Author Email: \n
      ${response.data.email} \n
      ###Author Picture: \n
      ${response.data.avatar_url}
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





