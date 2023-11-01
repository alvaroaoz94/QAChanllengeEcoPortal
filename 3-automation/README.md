# QA Challenge ECO Portal

This project automates test cases for the Ars Technica webpage using the Cypress framework, ensuring the application's functionality and reliability.

## Prerequisites

Before starting, make sure you have the following installed:
- Node.js (Current LTS Version: 20.x)
- npm (bundled with Node.js)
- A code editor (VSCode, Sublime Text, Atom, etc.)

## Setup

### Clone the Repository

Clone the project repository to your local machine:
---
Get the cloned repository from the following link and clone it in the code editor of your choice, make sure to clone it in a path of your choice where you save the folder alone, to keep good practices and order. Once you are in the directory of your choice you should open Terminal and paste this link

```bash
git clone https://github.com/alvaroaoz94/QAChanllengeEcoPortal
```

### Open the Project Folder

Navigate to the cloned project folder:
Once you have cloned the project, you must open the QAChallengeEcoPortal folder, this will be in the path previously selected

```bash
cd QAChallengeEcoPortal
```

### Navigate to the Automation Directory

Switch to the `3-automation` directory:
Once you are in the QAChallengeEcoPortal directory, open the terminal and type the following command

- For Unix-based systems (macOS/Linux):
    
    ```bash
    cd 3-automation/
    ```
- For Windows:
    
    ```bat
    cd .\3-automation\
    ```

### Install Dependencies

Install the required npm packages:
Once you are in the correct directory, you must type the following command in the terminal to install the dependencies, make sure you have node.js installed or it will give you an error

```bash
    npm install
```

## Running Tests

Execute the tests using one of the following commands based on your preferred mode:
`
Once you have installed the dependencies and are in the correct 3-Automation directory you should be able to run tests, I have assigned a run command shortcut for this project, you can see it in 3-automation/package.json routing
`

### Headless Mode

Run tests without the GUI and generate an HTML report:
This command will run the tests in headless mode and generate an HTML report in the `cypress/reports/html` directory

```bash
npm test
```

Reports can be found in `cypress/reports/html` after the test run.

### Interactive Mode

Open the Cypress Test Runner for interactive testing:
This command will open the Cypress Test Runner and allow you to run the tests in interactive mode. 
    
```bash
npm run test:interactive
```

## Author

Alvaro Zavala
