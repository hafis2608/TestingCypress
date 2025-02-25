//TC Homepage -> Login Page
describe('Verify Login Failed', () => {
  //TC Login Page -> Login Failed
    it("Login Failed - Email and Password Not Registered", () => {
      cy.visit("https://magento.softwaretestingboard.com/");
      cy.contains("Sign In").click()
      cy.get('#email').type("cobaaku@mail.com")
      cy.get('#pass').type("Coba123")
      cy.get('#send2').click()
      cy.get('.message-error > div').should("be.visible")
    });
  });

//TC Login Page -> Homepage - My Account page
describe('Verify Login Success to My Account', () => {
  it("Homepage - My Account Information", () => {
    cy.visit("https://magento.softwaretestingboard.com/")
    cy.contains("Sign In").click()
    cy.get('#email').type("akucoba@gmail.com")
    cy.get('#pass').type("Qwerty123")
    cy.get('#send2').click()
    cy.get('.logged-in').should("be.visible")
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.contains("My Account").click()
    cy.get('.block-dashboard-info > .block-title > strong').should('have.text', 'Account Information')
    cy.get('.block-dashboard-info > .block-content > .box > .box-title > span').should('have.text', 'Contact Information')
    cy.get('.box-title').should('be.visible')
    cy.get('.box-content').should('be.visible')
    cy.get('.box-content > p').should('contain.text','gmail.com')
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').should('be.visible')
    cy.get('.change-password').should('be.visible')  });
});
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
  });
});
