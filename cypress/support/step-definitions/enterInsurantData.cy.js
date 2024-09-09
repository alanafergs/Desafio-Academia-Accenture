import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('I am on the "Enter Insurant Data" tab', () => {
    cy.goToTab('enterinsurantdata')
})
And('I click on the "First Name" field', () => {
    cy.clickOnMandatoryInputFields('firstname')
})
Then('the message "This field is mandatory" should be appears', () => {
    cy.verifyInputFieldError()
})