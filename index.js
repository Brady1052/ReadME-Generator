const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'If applicable, please enter installation instructions.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples of your project in use for the Usage section.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'If applicable, please enter guidelines for other developers wishing to contribute to your project',
            name: 'guidelines',
        },
        {
            type: 'input',
            message: 'If applicable, please provide testing related information',
            name: 'testing',
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license'
        }
    ])
    .then((answers) => {
        console.log(answers);
        fs.writeFile("index.html", generateHtml(answers), "utf-8", (err) => {
            if (err) {
                console.log(err);
            }
            console.log("Success");
        })


    });

function generateHtml({ title, description, installation, usage, guidelines, testing, license }) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ReadME.md Generator</title>
    </head>
    

    
    <body>
   ## Title
    ${title}
    
   ##  License
    ${license} 
   
   ## Description 
 ${description}
    
   ## Installation
 ${installation}

   ## How to use 
    ${usage}

   ##  Guidelines
  ${guidelines} 

   ##  Testing 
   ${testing} 

    </body>
    </html>`
}