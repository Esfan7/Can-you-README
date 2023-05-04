// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { renderLicenseBadge, generateMarkdown } = require('./Develop/utils/generateMarkdown');
//import inquirer from 'inquirer';
// TODO: Create an array of questions for user input


// Description, Table of Contents, Installation, Usage, License, Contributing, Tests,
const questions = [{
  type: "input",
  name: "title",
  message: "What is the title of your project?"
}, {
  type: "input",
  name: "description",
  message: "What is the description of your project ?"
},
{
  type: "input",
  name: "Installation",
  message: "installation instructions"
},
{
  type: "input",
  name: "usage",
  message: "usage information"
},
{
  type: "list",
  choices: ["MIT", "GPL", "Apache", "GNU", "N/A"],
  name: "license",
  message: "What is your license?"
},
{
  type: "input",
  name: "Contributions",
  message: "Contributions"
},
{
  type: "input",
  name: "tests",
  message: "test instructions"
},
{
  type: "input",
  name: "github",
  message: "Github username?"
},
{
  type: "input",
  name: "email",
  message: "Enter Email"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Error");
      throw err;
    }
    console.log('Saved!');
  });


};

// TODO: Create a function to initialize app
function init() {

  inquirer
    .prompt(questions)
    .then((answers) => {
    /*  console.log(answers.title);
      console.log(answers.description);
      console.log(answers.table_content);
      console.log(answers.Installation);
      console.log(answers.usage);
      console.log(answers.license);
      console.log(answers.Contributions);
      console.log(answers.tests);

      */




      //get var from answers.table of content

      let str = generateMarkdown(answers);





      //str += renderLicenseLink(answers.license) 
      writeToFile("README2.md", str)




      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
      console.log(error);
    });



}

// Function call to initialize app
init();


