class ApiHelper {

    createUser(name: string, job: string): Cypress.Chainable<Cypress.Response<any>> {
        return cy.request({
            method: "POST",
            url: `${Cypress.env("apiBaseUrl")}/users`,
            body: {
                name,
                job,
            },
            failOnStatusCode: false,
        });
    }

    updateUser(id: string, name: string, job: string): Cypress.Chainable<Cypress.Response<any>> {
        return cy.request({
            method: "PUT",
            url: `${Cypress.env("apiBaseUrl")}/users/${id}`,
            body: {
                name,
                job,
            },
            failOnStatusCode: false,
        });
    }
}

export default ApiHelper;