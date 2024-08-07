const fs = require('fs');
const inquirer = require('inquirer');
// const { default: Choices } = require('inquirer/lib/objects/choices');
// const { text } = require('stream/consumers');
// const { Square } = require('./Assets/shapes');

const promptUser = async () => {
    const answers = await inquirer.prompt([
        {
           type: 'input',
           name: 'text',
           message: 'Enter up to three characters for the logo:',
           validate: input =>  input.length <= 3 || 'Text must be three characters or less.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color(keyword or hexadecimal):',
         },
         {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['circle', 'triangle', 'square']
         },
         {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color(keyword or hexadecimal):',
         },
    ])
    return answers;
};

const generateSVG = ({ text, textColor, shape, shapeColor }) => {
    let shapeElement;

    switch (shape) {
        case 'circle':
            shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeElement = `<polygon points="150,20 250,180 50,180" fill="${shapeColor}" />`;
            break;
        case 'square':
            shapeElement = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`;
            break;
    }

    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeElement}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
};

const run = async() => {
    const answers = await promptUser();
    const svgContent = generateSVG(answers);

    fs.writeFileSync('logo.SVG', svgContent);
    console.log('Generated logo.svg')
};

run();