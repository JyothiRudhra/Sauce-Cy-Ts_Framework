Feature: API testing for create and update operations

  Scenario: Create a new user record
    Given the API base URL is configured
    When the user sends a POST request to create a user with name "Sam" and job "Senior Test Engineer"
    Then the response status code should be 201
    And the response should contain name "Sam"

  Scenario: Update an existing user record
    Given the API base URL is configured
    When the user sends a PUT request to update user with id "1" with name "Sam" and job "Lead QA Engineer"
    Then the response status code should be 200
    And the response should contain name "Sam"