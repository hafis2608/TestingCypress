describe('Verify Login Success to Edit Account', () => {
//TC Login Page -> Homepage - My Account page -> Edit Account Information Page
  it("Homepage - My Account Information - Edit Account Information", () => {
    cy.visit("https://magento.softwaretestingboard.com/")
    cy.contains("Sign In").click()
    cy.get('#email').type("akucoba@gmail.com")
    cy.get('#pass').type("Qwerty123")
    cy.get('#send2').click()
    cy.get('.logged-in').should("be.visible")
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.contains("My Account").click()
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').should('be.visible')
    cy.get('.change-password').should('be.visible')
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.url().should('include', '/customer/account/edit')
    cy.get('#change-email').check()
    cy.get('#email').clear()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#email-error').should('contain.text','This is a required field.')
    cy.get('#email').type("cobadulu@gmail.com")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#current-password-error').should('contain.text','This is a required field.')
    cy.get('#current-password').type("Qwerty123")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success').should('be.visible')
    cy.get('.message-success').should('contain.text','You saved the account information.')
  });
});
