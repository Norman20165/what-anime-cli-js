const inquirer = require('inquirer');
const yargs = require('yargs');

module.exports.commands = async () => {
    async function getData() {
        return await new Promise((resolve) => {
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
            return await getData();
        } else if (data._.length < 2) {
            return 'Error! Not enough data.';
        };
        return data;
    };
    return await getData();
};