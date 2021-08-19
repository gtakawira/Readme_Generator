// Packages needed for this application
const inquirer = require("inquirer")
const fs=require('fs')
const chalk = require('chalk');
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe what the application will do?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install it?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the application?',
        
    },
    {
        type: 'input',
        name: 'image',
        message: 'Add image/gif file to /assets/images folder of your application. What is your file name including the extension?',
        
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test it?'
    },
    
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to the application?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Is there anyone who should be credited for the code?'
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
        type: 'input',
        name: 'download',
        message: 'What is the download link?'
    },
    
    {
        type: 'list',
        name: 'licence',
        message: 'What is your preferred licence?',
        choices: ['MIT', 'BSD', 'GPL', 'APACHE','NONE']
    },
    {
        type: 'input',
        name: 'year',
        message: 'What is the copyright year?',
        
    }
];



// A function to write README file
function writeToFile(file, data) { 
    
    fs.writeFile(file, data, (err) => {
    err ? console.log(err) : console.log("Success!");
})
}



// A function to initialize app
function init() {
    console.log(chalk.blue(`
    ********************************************************************
    Ready to generate a Readme document? Answer the following Questions
    ********************************************************************`));
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md',generateMarkdown(data))
     });}

    
// Function call to initialize app
init();
