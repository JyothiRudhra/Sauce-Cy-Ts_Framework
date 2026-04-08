Feature: SauceDemo login validation

  Scenario Outline: Login with different valid users
    Given the user launches the SauceDemo application
    When the user logs in with username "<username>" and password "<password>"
    Then the products page should be displayed

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |

  Scenario Outline: Login with invalid credentials
    Given the user launches the SauceDemo application
    When the user logs in with username "<username>" and password "<password>"
    Then the login error message "<errorMessage>" should be displayed

    Examples:
      | username        | password     | errorMessage                                                              |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
      | standard_user   | wrong_pass   | Epic sadface: Username and password do not match any user in this service |
      |               | secret_sauce | Epic sadface: Username is required                                     |