#utf-8
#language: en

Feature: Validation of required fields
  Scenario: The "Make" field becomes invalid when no item is selected
    Given I am on the Vehicle Insurance Application portal
    And I navigate to the "Automobile" page
    When I am on the "Enter Vehicle Data" tab
    And I leave the "Make" field unselected
    Then I should see an error message "Select an option" for the "Make" field