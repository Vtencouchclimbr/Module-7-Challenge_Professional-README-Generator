// TODO: Include packages needed for this application
// import inquirer package
// import fs package
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
// 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of you project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have you provided?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Your README.md has been successfully generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
        const readmeContent = generateMarkdown(responses);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
