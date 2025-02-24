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
describe('Verify Login Success to My Account', () => {
//TC Login Page -> Homepage - My Account page
  it("Homepage - My Account Information", () => {
    cy.visit("https://magento.softwaretestingboard.com/")
    cy.contains("Sign In").click()
    cy.get('#email').type("akucoba@gmail.com")
    cy.get('#pass').type("Qwerty123")
    cy.get('#send2').click()
    cy.get('.logged-in').should("be.visible")
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.contains("My Account").click()
    cy.contains("Account Information").should("be.visible")    
  });
});
