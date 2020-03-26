const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [];

inquirer.prompt([ 
    {type: "input", message: "What is your GitHub username?: ", name: "userName"},
    {type: "list", message: "What type of license are you using?: ", name: "license", choices: ["MIT", "Public", "GNU", "Copyleft", "Proprietary"]},
    {type: "input", message: "What is the project title?: ", name: "projectTitle" },
    {type: "input", message: "Please, provide a description of your project: ", name: "projectDescription" },
    {type: "input", message: "Provide the table of contents: ", name: "tableContents", 
        default: ``},
    {type: "input", message: "Provide the installation instructions: ", name: "installationInstructions", default: "Run npm install" },
    {type: "input", message: "Provide the usage: ", name: "usage", default: "Follow instructions" },
    {type: "input", message: "Please, list the contributors to the project: ", name: "contributors", default: "No contributors" },
    {type: "input", message: "Provide information about the tests: ", name: "tests", default: "No tests" },
    {type: "input", message: "Do you want to add any questions?: ", name: "questions", default: "No questions" }
  ])
  .then(answer => {
      // console.log(answer);
      const readmeFileInquirerText = generateMarkdown(answer);
      fs.appendFile(`${answer.userName}-README.md`, readmeFileInquirerText, err => {
        if (err) {
          return console.log(err);
        }
        console.log("The inquirer text has been written!");
    });

    axios
    .get(`https://api.github.com/users/${answer.userName}`)
    .then(function(response) {
      //console.log(response.data);
      
      const readmeFileAxiosText = generateAxiosText(response.data);

      fs.appendFile(`${answer.userName}-README.md`, readmeFileAxiosText, err => {
        if (err) {
            return console.log(err);
          }
          console.log("The axios text has been written!");
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



function generateAxiosText(data){
    return `
- - -
## Email:\n
${data.email}
- - -
## Picture:\n
![User Avatar](${data.avatar_url})
`;
};

// function generateTableOfContents(){
//     var contentSections = ["Title", "Description", "Installation", "Usage", "Contributors", "Tests", "Questions", "Email", "Picture"];
    
//     for(var i=0; i<contentSections; i++){
//         var liEl = $("<li>");
//         liEL = contentSections[i];
//         var id = contentSections[i];
//         liEl.attr("href", `#${id}`)
//         $("#tc").append(liEl);
//     }
// }
//   <li href="#pt">Project Title</li><li href="#pd">Project Description</li><li href="#iu">Installation</li><li href="#use">Usage</li><li href="#cont">Contributors</li><li href="#test">Tests</li><li href="#quest">Questions</li><li href="#em">Author Email</li><li href="#pic">Author Picture</li>