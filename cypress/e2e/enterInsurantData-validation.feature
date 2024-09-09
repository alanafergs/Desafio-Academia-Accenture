#utf-8
#language: en

Feature: Validation of required fields
  Scenario: Validate if the “First Name” field is mandatory
    Given I am on the Vehicle Insurance Application portal
    And I navigate to the "Automobile" page
    When I am on the "Enter Insurant Data" tab
    And I click on the "First Name" field
    Then the message "This field is mandatory" should be appears