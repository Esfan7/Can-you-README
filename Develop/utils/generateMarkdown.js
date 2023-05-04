// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //console.log(license)

  switch (license){
    case "MIT": return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"; break;
    case "GPL":  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"; break;
    case "Apache": return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"; break;
    case "GNU": return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"; break;
    case "N/A": return ""; break;
    default: return ""; break;
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  let badge = renderLicenseBadge(answers.license)

  return `# ${answers.title} 
${badge}
## Description 
${answers.description}
## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributions](#Contributions)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation
${answers.Installation}
## Usage
${answers.usage}
## License
${answers.license}
## Contributions
${answers.Contributions}
## Tests
${answers.tests}
## Questions
If you have any questions?

[https://github.com/${answers.github}](https://github.com/${answers.github})

If you have any questions email me at [${answers.email}](mailto:${answers.email})
        
        
       `;


}

module.exports = {generateMarkdown, renderLicenseSection,  renderLicenseBadge};
