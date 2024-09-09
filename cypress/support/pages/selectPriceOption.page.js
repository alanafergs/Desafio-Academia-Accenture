const PRICE_OPTION = {
    selectsilver: '#selectsilver',
    selectgold: '#selectgold',
    selectplatinum: '#selectplatinum',
    selectultimate: '#selectultimate'
}

Cypress.Commands.add('selectPriceOption', (checkOption) => {
    const buttonSelector = PRICE_OPTION[checkOption]
    if (buttonSelector) {
        cy.get(buttonSelector).check({ force: true })
    }
})