import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('I am on the "Enter Product Data" tab', () => {
    cy.goToTab('enterproductdata')
})
And('select an option in the "Optional products" field', () => {
    cy.checkMandatoryFields('EuroProtection')
})
And('unselect the option', () => {
    cy.uncheckMandatoryFields('EuroProtection')
})
Then('I should see an error message "Select at least 1 options" for the "Optional products" field', () => {
    cy.verifyInputFieldError()
})