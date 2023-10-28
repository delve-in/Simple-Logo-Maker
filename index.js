const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateLogo = require('./lib/generateLogo');

// questionare to gather user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo. (Must not be more than 3 characters.)',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color',
    },
];

// genertaing logo out of gathered user input
const promptUser = () => {
    inquirer.prompt(questions)
        .then(async (answers) => {
            const logo = generateLogo(answers);
            const logoContent = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg"> ${logo}<text x="50%" y="60%" font-size="60px" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text></svg>`
            try {
                try {
                    await fs.writeFile('logo.svg', logoContent);
                    console.log('Generated logo.svg');
                } catch (err) {
                    console.error(err);
                }
            } catch (err_1) {
                console.error(err_1);
            }
        });
}

// Function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
