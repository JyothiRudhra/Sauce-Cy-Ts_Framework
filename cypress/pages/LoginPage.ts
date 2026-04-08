class LoginPage {
    private usernameInput = '[data-test="username"]';
    private passwordInput = '[data-test="password"]';
    private loginButton = '[data-test="login-button"]';
    private errorMessage = '[data-test="error"]';

    visit(): void {
        cy.visit("/");
    }

    enterUsername(username: string): void {
        const input = cy.get(this.usernameInput).should("be.visible").clear();

        if (username && username.trim() !== "") {
            input.type(username);
        } else {
            cy.log("Username left empty");
        }
    }

    enterPassword(password: string): void {
        const input = cy.get(this.passwordInput).should("be.visible").clear();

        if (password && password.trim() !== "") {
            input.type(password);
        } else {
            cy.log("Password left empty");
        }
    }

    clickLogin(): void {
        cy.get(this.loginButton).should("be.visible").click();
    }

    login(username: string, password: string): void {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    verifyErrorMessage(expectedMessage: string): void {
        cy.get(this.errorMessage)
            .should("be.visible")
            .and("have.text", expectedMessage);
    }
}

export default LoginPage;