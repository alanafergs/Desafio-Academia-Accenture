const MANDATORY_CHECK_FIELDS = {
    EuroProtection: '#EuroProtection',
    LegalDefenseInsurance: '#LegalDefenseInsurance'
}
const MANDATORY_SELECTABLE_FIELDS = {
    insurancesum: '#insurancesum',
    meritrating: '#meritrating',
    damageinsurance: '#damageinsurance',
    courtesycar: '#courtesycar'
}
const MANDATORY_INPUT_FIELDS = {
    startdate: '#startdate'
}
const SPAN_ERROR = '.error'

Cypress.Commands.add('checkMandatoryFields', (checkName) => {
    const buttonSelector = MANDATORY_CHECK_FIELDS[checkName]
    if (buttonSelector) {
        cy.get(buttonSelector).check({ force: true })
    }
})

Cypress.Commands.add('uncheckMandatoryFields', (checkName) => {
  const buttonSelector = MANDATORY_CHECK_FIELDS[checkName]
  if (buttonSelector) {
      cy.get(buttonSelector).uncheck({ force: true })
  }
})

Cypress.Commands.add('verifyInputFieldError', () => {
  cy.get(SPAN_ERROR).contains('Select at least 1 option')
})

Cypress.Commands.add('fillMandatoryFieldsInTheProductData', (fieldName) => {
    if (fieldName === 'startdate') {
      cy.get(MANDATORY_INPUT_FIELDS.startdate).type('09/15/2025')
    } else if (fieldName === 'insurancesum') {
      cy.get(MANDATORY_SELECTABLE_FIELDS.insurancesum).select('3.000.000,00')
    } else if (fieldName === 'meritrating') {
      cy.get(MANDATORY_SELECTABLE_FIELDS.meritrating).select('Bonus 2')
    } else if (fieldName === 'damageinsurance') {
      cy.get(MANDATORY_SELECTABLE_FIELDS.damageinsurance).select('No Coverage')
    } else if (fieldName === 'courtesycar') {
      cy.get(MANDATORY_SELECTABLE_FIELDS.courtesycar).select('No')
    } 
  })