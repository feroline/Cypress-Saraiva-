# Cypress-Saraiva- with Gherkin
Implementation of the use of cypress with gherkin to automate tests in the Saraiva bookstore

**Author:** [Ana Carolina R. Rocha - @feroline](https://github.com/feroline)
____
## Depends on: 

- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [Node.js](https://nodejs.org/en/)
  
  Recomends: 
  - [Gherkin Syntax](https://cucumber.io/docs/gherkin/)
  - [Cypress-Gherkin](https://docs.cypress.io/faq/questions/using-cypress-faq#Can-I-use-Cucumber-to-write-tests)
  - [Cypress Plugins](https://docs.cypress.io/plugins/directory)

____    
## Installation:

1. Install [Node.js](https://nodejs.org/en/) in his official repository: 

2. Install Cypress and cypress-cumcumber 

>    ```npm install --save-dev cypress cypress-cucumber-preprocessor ```    

____
## Configuration:

1. Run the command and it will create a Cypress file:
 
>   ```npx cypress open``` 

2.  Add or replace the following script to the ``cypress/plugins/index.js`` file:

    ```js
    const cucumber = require('cypress-cucumber-preprocessor').default
    module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
    }
    ```

3. Add the following code in ```package.json``` and run the command ```npm i```:

    ```json
        {
            "scripts": {
                "cy:open:chrome": "cypress run --browser chrome --no-exit"
            },
            "cypress-cucumber-preprocessor": {
                "step_definitions": "cypress/support/steps"
            }
        }
    ```
4. Add the following code in ```cypress.json``` to have a baseUrl: 
 
    ```json
        {
            "baseUrl": "http://localhost:3000"
        }
    ```
    ### - *If you need mobile resolution:*
    Add the following code in ```cypress.json``` (**Note:** in this case is iphone 5/SE)

    ```json
        {
            "viewportWidth": 320,
            "viewportHeight": 568
        }
    ```
    ### - *If you need more time of execution:*
    Add the following code in ```cypress.json```:
        
    ```json
        {
            "defaultCommandTimeout": 60000
        }
    ```
____
## Usage:

1. Create a ```.feature``` file with content in Gherkin format with scenarios of the tests:
   
   Example: 
    ```gherkin
    Feature: Login
        Scenario: Login with valid credentials
            Given I am on the login page
            When I fill in the login form with "usernameAdmin" and "passwordAdmin"
            And I press the login button
            Then I should be logged in "urlAdmin"
    ```
2. Create a ```.js``` file step with the implementation of the steps in Gherkin format, import ```.feature``` file and run the test: (**Note:** have to be the same name of the .feature file)
   
   Example: 
   ```gherkin
    Given('I am on the login page', () => {})
    When('I fill in the login form with {string} and {int}', (username, password) => {})
    And('I press the login button', () => {})
    Then('I should be logged in {string}', (url) => {})
   ```
3. Run the command to open Cypress and realize the tests:
    
   ```npm run cy:open``` or ```npx cypress open``` 

____
## Some Organization:

1. __/integration__ folder: contains the cenarios of tests write in gherkin format, BDD.
2. __/plugins/index.js__ file: contains the configuration of the plugin, incluinding the Cucumber.
3. __/support__ folder: contains the steps, scripts, tests in .js and others support files.
4. __/node_modules__ folder: contains the dependencies of the plugins and Cypress.
5. __cypress.json__ file: contains the global configuration of the project, like global variables, resolution of navegator, default URL, etc.