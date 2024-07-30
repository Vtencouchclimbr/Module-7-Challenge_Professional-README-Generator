// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const formattedLicense = license.replace(/\s+/g, '-').toLowerCase();
  return `![License](https://img.shields.io/badge/license-${formattedLicense}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return '[License](#license)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
    }
    return '## License This project is licensed under the ${license} license.';
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${renderLicenseBadge(data.license)}
  
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#installation)
- [Tests](#installation)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Tests
${data.tests}

## Questions
If you have any questions, please reach out to me:
- Github [${data.github}](http://github.com/${data.github})
- Email: ${data.email}
  `;
}

export default generateMarkdown;
