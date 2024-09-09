import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('I click on the page "Motorcycle"', () => {
    cy.goToPage('motorcycle')
})
Then('I can validate that I am on the right page', () => {
    cy.verifyRightPage()
})