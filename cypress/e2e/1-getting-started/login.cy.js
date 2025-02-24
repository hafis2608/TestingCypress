describe("template spec", () => {
  it("Success Login", () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
    cy.get("#email").type("laladipsi@mail.com");
    cy.get("#pass").type("Laladipsi2025");
    cy.get("#send2").click();
  });
});
