# QA Challenge ECO Portal

This project is focused on test case automation using the [Cypress](https://www.cypress.io/) framework. It provides a set of test cases to ensure the proper functionality and reliability of the arstechnica Web page.

## Prerequisites

- Node.js (Current LTS Version: [20.x](https://nodejs.org/))
- npm (Comes bundled with Node.js)
- A code editor of your choice

## Setup

1. **Clone the repository:**
Get the clone repository of the fallowing link and clone in your code editor of your choice
   ```
   git clone https://github.com/alvaroaoz94/QAChanllengeEcoPortal
   
    ```

2. **Go to Automation Directory:**   
You must select the QAChallengeEcoPortal project and write that code, this command will take you to the terminal to go to the Automation directory
    ```
    cd .\3-automation\  
    ```

3. **Install dependencies:**   
Once you are in the correct directory, you must write the following command in the terminal to install the dependencies
    ```
    npm install
    ```
   
## Run tests
Once you have installed the dependencies and you are in the correct 3-Automation directory you should be avaiable to run tests, 

1. **Run tests in headless mode:**
    ```
    npm test
    ```
    This command will run the tests in headless mode and generate a HTML report in the `cypress/reports/html` directory.


2. **Run tests in interactive mode:**
    ```
    npm run test:interactive
    ```
    This command will open the Cypress Test Runner and allow you to run the tests in interactive mode.

## Author
    Alvaro Zavala
