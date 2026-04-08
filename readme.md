Cypress TypeScript Cucumber Framework

This project is a test automation framework built using Cypress, TypeScript, and Cucumber (BDD) following the Page Object Model design.

Tech Stack
•	Cypress
•	TypeScript
•	Cucumber (BDD)
•	Page Object Model
•	multiple-cucumber-html-reporter

Project Structure

cypress/
├── e2e/features/              # Feature files
├── support/step_definitions/  # Step definitions and hooks
├── pages/                    # Page Object classes
├── reports/                  # JSON and HTML reports

Test Coverage

UI (SauceDemo)
•	Add multiple products using Data Table
•	Remove product from cart
•	Login validation using Scenario Outline

API (JSONPlaceholder)
•	Create user (POST)
•	Update user (PUT)

Setup

Install dependencies:

npm install

Execution

Run all tests:

npm run cy:run

Run specific tagged scenario (@test):

npm run test:tag

Run tests in parallel (feature level):

npm run cy:parallel

Reporting

Generate HTML report:

npm run report:generate

Run tests with report:

npm run test:report

Report location:

cypress/reports/html/index.html

Design Highlights
•	BDD approach using Cucumber feature files
•	Page Object Model for maintainability
•	Feature-level parallel execution
•	Separation of UI and API tests
•	Easy to run without external dependencies

Notes
•	UI tests use SauceDemo
•	API tests use JSONPlaceholder (no authentication required)