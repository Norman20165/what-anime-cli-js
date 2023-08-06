const inquirer = require('inquirer');
const yargs = require('yargs');

module.exports.commands = () => {
    function getData() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Hello! Select an image transfer method:',
                choices: ['file', 'link'],
            },
            {
                type: 'input',
                name: 'path',
                message: 'Print a path:',
            },
        ]).then((answers) => {
            choice = answers.choice;
            path = answers.path;
        });
    };
    
    data = yargs.argv;
    choice = undefined
    path = undefined

    if (Object.keys(data).length == 2) {
        if (!data._.length) {
            getData();
            
            console.log(choice);
            console.log(path);
        } else {
            console.log(data);
        };
    } else {
        getData();
                    
        console.log(choice);
        console.log(path);
    };
};