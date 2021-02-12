const inquirer = require('inquirer')
const fs = require('fs')

const questions = inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "Title"
        },
        {
            type: "input",
            message: "Enter a description about your project",
            name: "Description"
        },
        // {
        //     type: "input",
        //     message: "Something will go here",
        //     name: "Table of Contents"
        // },
        // {
        //     type: "input",
        //     message: "What modules were used for this project?",
        //     name: "Installation"
        // },
        {
            type: "input",
            message: "How can this application be used?",
            name: "Usage"
        },
        // {
        //     type: "input",
        //     message: "What license(s) were used for this application?",
        //     name: "License"
        // },
        // {
        //     type: "input",
        //     message: "",
        //     name: "Contribution Guidelines"
        // },
        // {
        //     type: "input",
        //     message: "",
        //     name: "Tests"
        // },
        {
            type: "input",
            message: "Enter your GitHub username",
            name: "Questions"
        },
        {
            type: "input",
            message: "Enter your email",
            name: "Questions"
        }
    ])
