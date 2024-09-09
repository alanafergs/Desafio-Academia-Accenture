#utf-8
#language: en

Feature: Navigation between menu pages
  Scenario: Validate that I can navigate between the menu pages of the site
    Given I am on the Vehicle Insurance Application portal
    When I click on the page "Motorcycle"
    Then I can validate that I am on the right page