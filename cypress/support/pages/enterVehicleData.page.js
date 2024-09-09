const MANDATORY_SELECTABLE_FIELDS = {
    make: '#make',
    numberofseats: '#numberofseats',
    fuel: '#fuel'
}
const MANDATORY_INPUT_FIELDS = {
  engineperformance: '#engineperformance',
  dateofmanufacture: '#dateofmanufacture',
  listprice: '#listprice',
  annualmileage: '#annualmileage'
}
const SPAN_ERROR = '.error'

Cypress.Commands.add('leaveFieldUnselected', (fieldName) => {
  const buttonSelector = MANDATORY_SELECTABLE_FIELDS[fieldName.toLowerCase()]
  if (buttonSelector) {
      cy.get(buttonSelector).select('– please select –')
    }
  })

Cypress.Commands.add('verifySelectFieldError', () => {
  cy.get(SPAN_ERROR).contains('Select an option') 
})

Cypress.Commands.add('fillMandatoryFieldsInTheVehicleData', (fieldName) => {
  if (fieldName === 'make') {
    cy.get(MANDATORY_SELECTABLE_FIELDS.make).select('Audi')
  } else if (fieldName === 'numberofseats') {
    cy.get(MANDATORY_SELECTABLE_FIELDS.numberofseats).select('1')
  } else if (fieldName === 'fuel') {
    cy.get(MANDATORY_SELECTABLE_FIELDS.fuel).select('Petrol')
  } else if (fieldName === 'engineperformance') {
    cy.get(MANDATORY_INPUT_FIELDS.engineperformance).type('150')
  } else if (fieldName === 'dateofmanufacture') {
    cy.get(MANDATORY_INPUT_FIELDS.dateofmanufacture).type('07/26/1994')
  } else if (fieldName === 'listprice') {
    cy.get(MANDATORY_INPUT_FIELDS.listprice).type('15000')
  } else if (fieldName === 'annualmileage') {
    cy.get(MANDATORY_INPUT_FIELDS.annualmileage).type('2000')
  } 
})