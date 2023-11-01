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

```bash
git clone https://github.com/alvaroaoz94/QAChanllengeEcoPortal
```

### Open the Project Folder

Navigate to the cloned project folder:
    
```bash
cd QAChallengeEcoPortal
```

### Navigate to the Automation Directory

Switch to the `3-automation` directory:

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
    
```bash
    npm install
```

## Running Tests

Execute the tests using one of the following commands based on your preferred mode:

### Headless Mode

Run tests without the GUI and generate an HTML report:

```bash
npm test
```

Reports can be found in `cypress/reports/html`.

### Interactive Mode

Open the Cypress Test Runner for interactive testing:
    
```bash
npm run test:interactive
```

## Author

Alvaro Zavala
