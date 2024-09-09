import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('I fill the required field "Make"', () => {
    cy.fillMandatoryFieldsInTheVehicleData('make')
})
And('I fill the required field "Engine Performance"', () => {
    cy.fillMandatoryFieldsInTheVehicleData('engineperformance')
})
And('I fill the required field "Date of Manufacture"', () => {
    cy.fillMandatoryFieldsInTheVehicleData('dateofmanufacture')
})
And('I fill the required field "Number of Seats"', () => {
    cy.fillMandatoryFieldsInTheVehicleData('numberofseats')
})
And('I fill the required field "Fuel Type"', () => {
    cy.fillMandatoryFieldsInTheVehicleData('fuel')
})
And('I fill the required field "List Price"', () => {
    cy.fillMandatoryFieldsInTheVehicleData('listprice')
})
And('I fill the required field "Annual Mileage"', () => {
    cy.fillMandatoryFieldsInTheVehicleData('annualmileage')
})
And('I click on the "Next" button', () => {
    cy.clickOnNextPage('nextenterinsurantdata')
})
And('I fill the required field "First Name"', () => {
    cy.fillMandatoryFieldsInTheInsurantData('firstname')
})
And('I fill the required field "Last Name"', () => {
    cy.fillMandatoryFieldsInTheInsurantData('lastname')
})
And('I fill the required field "Date of Birth"', () => {
    cy.fillMandatoryFieldsInTheInsurantData('birthdate')
})
And('I fill the required field "Country"', () => {
    cy.fillMandatoryFieldsInTheInsurantData('country')
})
And('I fill the required field "Zip Code"', () => {
    cy.fillMandatoryFieldsInTheInsurantData('zipcode')
})
And('I fill the required field "Occupation"', () => {
    cy.fillMandatoryFieldsInTheInsurantData('occupation')
})
And('I fill the required field "Hobbies"', () => {
    cy.checkMandatoryFieldsInTheVehicleData('speeding')
})
And('I click on the "Next" button', () => {
    cy.clickOnNextPage('nextenterproductdata')
})
And('I fill the required field "Start Date"', () => {
    cy.fillMandatoryFieldsInTheProductData('startdate')
})
And('I fill the required field "Insurance Sum"', () => {
    cy.fillMandatoryFieldsInTheProductData('insurancesum')
})
And('I fill the required field "Merit Rating"', () => {
    cy.fillMandatoryFieldsInTheProductData('meritrating')
})
And('I fill the required field "Damage Insurance"', () => {
    cy.fillMandatoryFieldsInTheProductData('damageinsurance')
})
And('I fill the required field "Optional Products"', () => {
    cy.checkMandatoryFields('EuroProtection')
})
And('I fill the required field "Courtesy Car"', () => {
    cy.fillMandatoryFieldsInTheProductData('courtesycar')
})
And('I click on the "Next" button', () => {
    cy.clickOnNextPage('nextselectpriceoption')
})
And('I select an Price option', () => {
    cy.selectPriceOption('selectgold')
})
And('I click on the "Next" button', () => {
    cy.clickOnNextPage('nextsendquote')
})
And('I fill the required field "E-mail"', () => {
    cy.fillMandatoryFieldsInTheSendQuote('email')
})
And('I fill the required field "Username"', () => {
    cy.fillMandatoryFieldsInTheSendQuote('username')
})
And('I fill the required field "Password"', () => {
    cy.fillMandatoryFieldsInTheSendQuote('password')
})
And('I fill the required field "Confirm Password"', () => {
    cy.fillMandatoryFieldsInTheSendQuote('confirmpassword')
})
And('I click on the "Send" button', () => {
    cy.clickSendButton()
})
Then('the vehicle is registered successfully', () => {
    cy.verifySendQuoteSucessfull()
})