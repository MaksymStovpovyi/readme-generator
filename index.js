const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter project name ==>',
      name: 'projName',
    },
    {
      type: 'input',
      message: 'Enter description of project ==>',
      name: 'desc',
    },
    {
      type: 'list',
      message: 'Choose a license',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'Enter your GitHub username',
      name: 'gitName',
    },
    {
      type: 'input',
      message: 'Enter your email ==>',
      name: 'email',
    },
    
  ])
  .then((response) => {
    const { projName, desc, license, gitName, email } = response;
    fs.writeFile('README-generator.md', `# ${projName}
[Description](#description)---[License](#license)---[Questions](#questions)

## Description
${desc}

## License

${license} [more info](https://choosealicense.com/licenses/)

## Questions

For communication use:\\
git: ${gitName}\\
email: ${email}

    `, (err) =>
    
    err ? console.error(err) : console.log('Commit logged!')
    );

    }
  );