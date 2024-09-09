const MANDATORY_FIELDS = {
    email: '#email',
    username: '#username',
    password:  '#password',
    confirmpassword: '#confirmpassword'
}
const SUCESS_MESSAGE = 'h2'
const SEND_BUTTON = '#sendemail'

Cypress.Commands.add('fillMandatoryFieldsInTheSendQuote', (fieldName) => {
    if (fieldName === 'email') {
        cy.get(MANDATORY_FIELDS.email).type(Cypress.env('email'), {log: false})
      } else if (fieldName === 'username') {
        cy.get(MANDATORY_FIELDS.username).type(Cypress.env('username'), {log: false})
      } else if (fieldName === 'password') {
        cy.get(MANDATORY_FIELDS.password).type(Cypress.env('password'), {log: false})
      } else if (fieldName === 'confirmpassword') {
        cy.get(MANDATORY_FIELDS.confirmpassword).type(Cypress.env('confirmpassword'), {log: false})
      } 
})

Cypress.Commands.add('verifySendQuoteSucessfull', () => {
  cy.get(SUCESS_MESSAGE, { timeout: 10000 }).should('be.visible')
  cy.get(SUCESS_MESSAGE).should('contain.text', 'Sending e-mail success!')
})

Cypress.Commands.add('clickSendButton', () => {
  cy.get(SEND_BUTTON).click()
})