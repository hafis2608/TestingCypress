describe("Verify Login - Positive", () => {
  it("Success Login - Email and Password Already Used", () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
    cy.get("#email").type("laladipsi@mail.com");
    cy.get("#pass").type("Laladipsi2025");
    cy.get("#send2").click();
  });
});
describe("Verify Login - Negatif", () => {
  it("Failed Login - Email and Password Not Registered", () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
    cy.get("#email").type("iniemail@mail.com");
    cy.get("#pass").type("passwordakun");
    cy.get("#send2").click();
  });
  it("Failed Login - Password incorrect", () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
    cy.get("#email").type("laladipsi@mail.com");
    cy.get("#pass").type("passwordakun");
    cy.get("#send2").click();
  });
});
