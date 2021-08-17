// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs=require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project name?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the project name?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What is the project name?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    
    {
        type: 'list',
        name: 'Licence',
        message: 'What is your preferred licence?',
        choices: ['MIT', 'BSD', 'GPL', 'APACHE']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
