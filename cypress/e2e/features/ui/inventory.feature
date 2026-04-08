Feature: SauceDemo inventory and cart functionality

  Background:
    Given the user launches the SauceDemo application
    When the user logs in with username "standard_user" and password "secret_sauce"

  @test
  Scenario: Add multiple products to cart using data table
    Then the products page should be displayed
    When the user adds the following products to the cart:
      | productName             |
      | Sauce Labs Backpack     |
      | Sauce Labs Bike Light   |
      | Sauce Labs Bolt T-Shirt |
    And the user opens the cart
    Then the cart should contain the following products:
      | productName             |
      | Sauce Labs Backpack     |
      | Sauce Labs Bike Light   |
      | Sauce Labs Bolt T-Shirt |

  Scenario: Remove a product from the cart
    Then the products page should be displayed
    When the user adds product "Sauce Labs Fleece Jacket" to the cart
    And the user opens the cart
    And the user removes product "Sauce Labs Fleece Jacket" from the cart
    Then the cart should be empty