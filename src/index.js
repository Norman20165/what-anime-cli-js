#!/usr/bin/env node

const inquirer = require('inquirer');
const yargs = require('yargs');

inquirer.prompt([
    {
        type: 'list',
        name: 'choice',
        message: 'Hello! Select an image transfer method:',
        choices: ['file', 'link'],
    },
    {
        type: 'input',
        name: 'answer1',
        message: 'Print a path:',
    },
]).then((answers) => {
    console.log(answers.choice);
    console.log(answers.answer1);
});

data = yargs.argv;