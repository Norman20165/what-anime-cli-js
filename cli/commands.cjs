const inquirer = require('inquirer');
const yargs = require('yargs');

module.exports.commands = () => {
    function getData() {
        return new Promise(function(resolve, reject) {
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
            ]).then((answers) => resolve(answers));
        });
    };
    
    const data = yargs.argv;

    if (Object.keys(data).length == 2) {
        if (!data._.length) {
            getData().then(
                result => {
                    return result;
                }
            );
        } else {
            return data;
        };
    } else {
        getData().then(
            result => {
                return result;
            }
        );
    };
};