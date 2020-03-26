function generateMarkdown(data) {
  return `
# Project Title:\n
${data.projectTitle}
- - - 
![badge](https://img.shields.io/static/v1?label=License&message=${data.license}&color=brightgreen)
![awesome](https://cdn.rawgit.com/jongracecox/anybadge/master/examples/awesomeness.svg)
- - -
## Project Description:\n
${data.projectDescription}
- - -
## Table of Contents:
  1. [Project Title](#project-title)
  2. [Project Description](#project-description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contributors](#contributors)
  6. [Tests](#tests)
  7. [Questions](#questions)
  8. [Email](#email)
  9. [Picture](#picture)  
- - -
## Installation:\n
${data.installationInstructions}
- - -
## Usage:\n
${data.usage}
- - -
## Contributors:\n
 ${data.contributors}
- - -
## Tests:\n
${data.tests}
- - -
## Questions:\n
${data.questions}
`;
}

module.exports = generateMarkdown;
