const BUTTON_PAGES = {
    automobile: '#nav_automobile',
    truck: '#nav_truck',
    motorcycle: '#nav_motorcycle',
    camper: '#nav_camper'
}
const BUTTON_NEXT = {
    nextenterinsurantdata: '#nextenterinsurantdata',
    nextenterproductdata: '#nextenterproductdata',
    nextselectpriceoption: '#nextselectpriceoption',
    nextsendquote: '#nextsendquote'
}
const SELECTED_INSURANCE = '#selectedinsurance'

Cypress.Commands.add('goToPage', (pageName) => {
  const buttonSelector = BUTTON_PAGES[pageName.toLowerCase()]
  if (buttonSelector) {
    cy.get(buttonSelector).click()
  }
})

Cypress.Commands.add('verifyRightPage', () => {
  cy.get(SELECTED_INSURANCE).contains('Motorcycle Insurance')
})

Cypress.Commands.add('clickOnNextPage', (buttonNext) => {
  if (buttonNext === 'nextenterinsurantdata') {
    cy.get(BUTTON_NEXT.nextenterinsurantdata).click({force: true})
  } else if (buttonNext === 'nextenterproductdata') {
    cy.get(BUTTON_NEXT.nextenterproductdata).click({force: true})
  } else if (buttonNext === 'nextselectpriceoption') {
    cy.get(BUTTON_NEXT.nextselectpriceoption).click({force: true})
  }
})