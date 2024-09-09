const BUTTON_ENTER_TABS = {
  entervehicledata: '#entervehicledata',
  enterinsurantdata: '#enterinsurantdata',
  enterproductdata: '#enterproductdata',
  selectpriceoption: '#selectpriceoption',
  sendquote: '#sendquote'
}

Cypress.Commands.add('goToTab', (tabName) => {
  const buttonSelector = BUTTON_ENTER_TABS[tabName.toLowerCase()]
  if (buttonSelector) {
    cy.get(buttonSelector).click()
  }
})