#utf-8
#language: en

Feature: Validation of required fields
 Scenario: Validate if the “Optional products” field is mandatory
    Given I am on the Vehicle Insurance Application portal
    And I navigate to the "Automobile" page
    When I am on the "Enter Product Data" tab
    And select an option in the "Optional products" field
    And unselect the option
    Then I should see an error message "Select at least 1 options" for the "Optional products" field