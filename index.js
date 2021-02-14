const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util');

const generateReadMe = require('./util/generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile)

const questions = () => {
    return inquirer.prompt([
        {
            //ask for project name
            type: "input",
            message: "What is the title of your project?",
            name: "Title"
        },
        {
            //short description of project
            type: "input",
            message: "Enter a description about your project",
            name: "Description"
        },
        {
            //licenses project should have
            //will have choices to tab up and down--default answer? can be overridden
            type: "list",
            message: "What kind of license does/should your project have?",
            choices: ["MIT", "Apache 2.0", "Boost", "None"],
            name: "License"
        },
        {
            //lets user know what command to run to install module
            type: "input",
            message: "What command should be run to install dependencies?",
            default: "npm i",
            name: "Installation"
        },
        {
            //lets user know what command they need to run to run tests
            type: "input",
            message: "What command should be run to run tests?",
            default: "npm test",
            name: "Tests"
        },
        {
            type: "input",
            message: "What should the user know about using the repo?",
            name: "Usage"
        },
        {
            type: "input",
            message: "What should the user know to contribute to the repo?",
            name: "Contribution"
        },
        {
            //ask for github username
            type: "input",
            message: "Enter your GitHub username",
            name: "GitHub"
        },
        {//ask for email
            type: "input",
            message: "Enter your email",
            name: "Email"
        }
    ])
}

const init = () => {
    questions()
        .then((answer) => writeFileAsync('README.md', generateReadMe(answer)))
        .then(() => console.log('It works??'))
        .catch((err) => console.error(err))

}

init()

    //what does user need to know about using the repo?
    //what does user need to know about contributing to the repo?
    //this will then generate the readme file

    //readme

    //table of contents

    //installation

    //usage

    //license--make this a list of choices
    // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

    //tests -- EX: To run tests, run the following command

    // --- node index.js ----

    //questions -- EX: If you have any questions about the repo, contact me directly at mrivera0014@gmail.com. You can find more of my work at [mrivera0014]{github link in here}