// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  const formattedLicense = license.replace(/\s+/g, '-').toLowerCase(); // Ensure formatting is correct
  const badgeUrl = `https://img.shields.io/badge/license-${formattedLicense}-blue.svg`;
  
  console.log('License Badge URL:', badgeUrl); // For debugging to ensure correct URL is generated
  
  return `![License](${badgeUrl})`; // Return the badge markdown
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  return '[License](#license)';
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License
This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- ${renderLicenseLink(data.license)}
- [Video](#video)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributors}

${renderLicenseSection(data.license)}

## Video
${data.video}

## Tests
${data.tests}

## Questions
If you have any questions, please reach out to me:
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
  `;
}

export default generateMarkdown;
