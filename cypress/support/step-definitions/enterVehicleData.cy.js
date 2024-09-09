import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('I am on the Vehicle Insurance Application portal', () => {
    cy.visit('/index.php')
})
And('I navigate to the "Automobile" page', () => {
    cy.goToPage('automobile')
})
When('I am on the "Enter Vehicle Data" tab', () => {
    cy.goToTab('entervehicledata')    
})
And('I leave the "Make" field unselected', () => {
    cy.leaveFieldUnselected('make')    
})
Then('I should see an error message "Select an option" for the "Make" field', () => {
    cy.verifySelectFieldError()    
})