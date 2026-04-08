import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ApiHelper from "../../pages/ApiHelper";

const apiHelper = new ApiHelper();

let response: Cypress.Response<any>;

Given("the API base URL is configured", () => {
    Cypress.env("apiBaseUrl", "https://jsonplaceholder.typicode.com");
});

When(
    "the user sends a POST request to create a user with name {string} and job {string}",
    (name: string, job: string) => {
        apiHelper.createUser(name, job).then((res) => {
            response = res;
        });
    }
);

When(
    "the user sends a PUT request to update user with id {string} with name {string} and job {string}",
    (id: string, name: string, job: string) => {
        apiHelper.updateUser(id, name, job).then((res) => {
            response = res;
        });
    }
);

Then("the response status code should be {int}", (statusCode: number) => {
    expect(response.status).to.eq(statusCode);
});

Then("the response should contain name {string}", (name: string) => {
    expect(response.body.name).to.eq(name);
});