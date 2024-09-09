const MANDATORY_SELECTABLE_FIELDS = {
    country: '#country',
    occupation: '#occupation'
}
const MANDATORY_INPUT_FIELDS = {
    firstname: '#firstname',
    lastname: '#lastname',
    birthdate: '#birthdate',
    zipcode: '#zipcode'
}
const MANDATORY_CHECK_FIELDS = {
    speeding: '#speeding',
    bungeejumping: '#bungeejumping',
    cliffdiving: '#cliffdiving',
    skydiving: '#skydiving',
    other: '#other'
}
const SPAN_ERROR = '.error'

Cypress.Commands.add('clickOnMandatoryInputFields', (inputName) => {
  const inputSelector = MANDATORY_INPUT_FIELDS[inputName.toLowerCase()]
  if (inputSelector) {
      cy.get(inputSelector).click()
  }
})

Cypress.Commands.add('verifyInputFieldError', () => {
  cy.get(SPAN_ERROR).contains('This field is mandatory')
})

Cypress.Commands.add('fillMandatoryFieldsInTheInsurantData', (fieldName) => {
    if (fieldName === 'country') {
      cy.get(MANDATORY_SELECTABLE_FIELDS.country).select('Brazil')
    } else if (fieldName === 'occupation') {
      cy.get(MANDATORY_SELECTABLE_FIELDS.occupation).select('Employee')
    } else if (fieldName === 'firstname') {
      cy.get(MANDATORY_INPUT_FIELDS.firstname).type(Cypress.env('firstname'), {log: false})
    } else if (fieldName === 'lastname') {
      cy.get(MANDATORY_INPUT_FIELDS.lastname).type(Cypress.env('lastname'), {log: false})
    } else if (fieldName === 'birthdate') {
      cy.get(MANDATORY_INPUT_FIELDS.birthdate).type('07/26/1994')
    } else if (fieldName === 'zipcode') {
      cy.get(MANDATORY_INPUT_FIELDS.zipcode).type('00000000')
    } 
  })

Cypress.Commands.add('checkMandatoryFieldsInTheVehicleData', (checkName) => {
  const buttonSelector = MANDATORY_CHECK_FIELDS[checkName]
    if (buttonSelector) {
      cy.get(buttonSelector).check({ force: true })
    }
})