#utf-8
#language: en

Feature: Vehicle Registration
    Scenario: Vehicle Registration Successful
        Given I am on the Vehicle Insurance Application portal
        And I navigate to the "Automobile" page
        And I fill the required field "Make"
        And I fill the required field "Engine Performance"
        And I fill the required field "Date of Manufacture"
        And I fill the required field "Number of Seats"
        And I fill the required field "Fuel Type"
        And I fill the required field "List Price"
        And I fill the required field "Annual Mileage"
        And I click on the "Next" button     
        And I fill the required field "First Name"
        And I fill the required field "Last Name"
        And I fill the required field "Date of Birth"
        And I fill the required field "Country"
        And I fill the required field "Zip Code"
        And I fill the required field "Occupation"
        And I fill the required field "Hobbies"
        And I click on the "Next" button
        And I fill the required field "Start Date"
        And I fill the required field "Insurance Sum"
        And I fill the required field "Merit Rating"
        And I fill the required field "Damage Insurance"
        And I fill the required field "Optional Products"
        And I fill the required field "Courtesy Car"
        And I click on the "Next" button
        And I select an Price option
        And I click on the "Next" button
        And I fill the required field "E-mail"
        And I fill the required field "Username"
        And I fill the required field "Password"
        And I fill the required field "Confirm Password"
        And I click on the "Send" button
        Then the vehicle is registered successfully