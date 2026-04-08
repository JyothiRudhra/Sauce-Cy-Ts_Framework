import { Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

Then("the login error message {string} should be displayed", (errorMessage: string) => {
    loginPage.verifyErrorMessage(errorMessage);
});