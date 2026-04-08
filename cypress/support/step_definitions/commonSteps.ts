import { Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

Given("the user launches the SauceDemo application", () => {
    loginPage.visit();
});

When(
    "the user logs in with username {string} and password {string}",
    (username: string, password: string) => {
        loginPage.login(username, password);
    }
);

Then("the products page should be displayed", () => {
    inventoryPage.verifyInventoryPageDisplayed();
});