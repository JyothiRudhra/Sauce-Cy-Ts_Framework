const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/reports/cucumber-json",
    reportPath: "cypress/reports/html",
    reportName: "Cypress Cucumber Test Report",
    pageTitle: "Automation Test Report",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "latest"
        },
        device: "Local Machine",
        platform: {
            name: "macOS"
        }
    },
    customData: {
        title: "Execution Info",
        data: [
            { label: "Project", value: "Cypress Cucumber TypeScript Framework" },
            { label: "Application", value: "SauceDemo" },
            { label: "API", value: "ReqRes" }
        ]
    }
});