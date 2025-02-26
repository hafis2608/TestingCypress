describe('Verify Login Failed', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })  
//TC Login Page -> Login Failed
  it("Login Failed - Email and Password Not Registered", () => {
    cy.contains("Sign In").click()
    cy.get('#email').type("cobaaku@mail.com")
    cy.get('#pass').type("Coba123")
    cy.get('#send2').click()
    cy.get('.message-error > div').should("be.visible")
    cy.get('.message-error > div').should("contain.text", 'The account sign-in was incorrect or your account is disabled temporarily.')
  });
  //TC Login Page -> Homepage - My Account page -> Edit Address Page
  it("Can access Edit Address", () => {
    cy.contains("Sign In").click()
    cy.get('#email').type("akucoba@gmail.com")
    cy.get('#pass').type("Qwerty123")
    cy.get('#send2').click()
    cy.get('.logged-in').should("be.visible")
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.contains("My Account").click()
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').should('be.visible')
    cy.get('.box-billing-address > .box-content > address').should('be.visible')
    cy.get('.box-billing-address > .box-actions > .action > span').click()
    cy.url().should('include', '/customer/address/edit')
  });





});