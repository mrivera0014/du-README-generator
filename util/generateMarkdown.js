const index = require('../index')


function renderLicenseBadge(License) {
    if (License === "MIT") {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
    } else if (License === "Apache 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
    } else if (License === "Boost") {
        return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`
    } else (License === "None"); {
        return ``
    }
}



function renderLicenseLink(License) {
    if (License === "MIT") {
        return `[![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)]`
    } else if (License === "Apache 2.0") {
        return `[![License](https://opensource.org/licenses/Apache-2.0)]`
    } else if (License === "Boost") {
        return `[![License](https://www.boost.org/LICENSE_1_0.txt)]`
    } else (License === "None"); {
        return ``
    }

}

function renderLicenseSection(License) {
    if (License === "MIT") {
        return `This project is licensed under the MIT license.`
    } else if (License === "Apache 2.0") {
        return `This project is licensed under the Apache 2.0 license.`
    } else if (License === "Boost") {
        return `This project is licensed under the Boost Software 1.0 license.`
    } else (License === "None"); {
        return ``
    }
}
renderLicenseSection()
// console.log("LicenseSection works?") it works so far..

const generateReadMe = (answer) =>
    `# Readme
${answer.Title}

## Description
${answer.Description}

## Table of Contents


## Installations
${answer.Installation}


## Usage
${answer.Usage}

## License
${renderLicenseSection(answer.License)}
${renderLicenseLink(answer.License)}
${renderLicenseBadge(answer.License)}
## Contributing
${answer.Contribution}

## Tests
To run tests run the following command:

${answer.Tests}

## Questions
If you have any questions contact me at ${answer.Email}.
Find more of my work at (https://github.com${answer.GitHub}/)`;





module.exports = generateReadMe;


