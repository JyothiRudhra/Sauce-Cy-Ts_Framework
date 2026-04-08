import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});