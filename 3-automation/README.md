# QA Challenge ECO Portal

This project is focused on test case automation using the [Cypress](https://www.cypress.io/) framework. It provides a set of test cases to ensure the proper functionality and reliability of the arstechnica Web page.

## Prerequisites

- Node.js (Current LTS Version: [20.x](https://nodejs.org/))
- npm (Comes bundled with Node.js)
- A code editor of your choice

## Setup

1. **Clone the repository:**
Get the clone repository of the following link and clone in your code editor of your choice, make sure to clone it to a path of your choice where you keep the folder alone to maintain good practices and order. Once you are in the choosed directory you must open the Terminal and paste this link
   ```
   git clone https://github.com/alvaroaoz94/QAChanllengeEcoPortal
   
    ```

2. **Go to Open the folder Project:**   
When you already cloned the project, you should open the folder QAChallengeEcoPortal, this will be on the previously selected route

3. **Go to Automation Directory:**   
Once you are in QAChallengeEcoPortal directory, you should open the terminal and write the following command
    ```
    cd .\3-automation\  
    ```

4. **Install dependencies:**   
Once you are in the correct directory, you must write the following command in the terminal to install the dependencies, make sure you have node.js installed or you will get an error
    ```
    npm install
    ```
   

## Run tests
Once you have installed the dependencies and you are in the correct 3-Automation directory you should be able to run tests, i assigned a runs commands shortcuts for this project, you can see it in 3-automation/package.json rute

1. **Run tests in headless mode:**
    ```
    npm test
    ```
    This command will run the tests in headless mode and generate a HTML report in the `cypress/reports/html` directory.


2. **Run tests in interactive mode:**
    ```
    npm run test:interactive
    ```
   2.1 This command will open the Cypress Test Runner and allow you to run the tests in interactive mode. 
   2.2 You have to choose E2E option in the opened window
   2.3 You have to choose the browser of your choice, preferably Google Chrome
   2.4 You have to select arstechnicaTestCases link in the screen

   And you will face the interactive run test cases

## Author
    Alvaro Zavala
