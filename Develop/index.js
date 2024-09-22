import fs from 'fs/promises'; // Use the fs/promises API for async/await
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (input) => input ? true : 'Title is required.',  // Validation to ensure input
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
        validate: (input) => input ? true : 'Description is required.',  // Validation to ensure input
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
        validate: (input) => input ? true : 'Installation instructions are required.',  // Validation
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Why did you build this project?',
        validate: (input) => input ? true : 'Usage details are required.',  // Validation
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Who contributed to this project?',
        validate: (input) => input ? true : 'Please provide contributor details.',  // Validation
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'BSD-3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'video',
        message: 'Add link to your walkthrough video here',
        validate: (input) => input ? true : 'Please provide link.',  // Validation
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have you provided?',
        default: 'No tests provided.',  // Default if no input
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: (input) => input ? true : 'GitHub username is required.',  // Validation
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: (input) => /\S+@\S+\.\S+/.test(input) ? true : 'A valid email address is required.',  // Email validation
    },
];

// Function to write README file
async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(fileName, data);
        console.log('Your README.md has been successfully generated!');
    } catch (err) {
        console.error('Error writing file:', err.message);
    }
}

// Function to initialize app
async function init() {
    try {
        const responses = await inquirer.prompt(questions);  // Prompt user for input
        console.log('Generating README file with the following responses:', responses);
        const readmeContent = generateMarkdown(responses);  // Generate README content
        await writeToFile('README.md', readmeContent);  // Write the content to README.md
    } catch (err) {
        console.error('Error during initialization:', err.message);
    }
}

// Function call to initialize app
init();
