describe("Verify Register Functionality - Negative", () => {
  it.skip("Registration Failed - Email Already Used", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("hidayatullah");
    cy.get("#lastname").type("hafis");
    cy.get("#email_address").type("pab4@gmail.com");
    cy.get("#password").type("strength@123");
    cy.get("#password-confirmation").type("strength@123");
    cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    ).click();
    cy.get(".message-error > div").should("be.visible");
  });
  it("Registration Failed - Password Weak", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("titi");
    cy.get("#lastname").type("dj");
    cy.get("#email_address").type("titidj@gmail.com");
    cy.get("#password").type("dj18qwer");
    cy.get("#password-confirmation").type("dj18qwer");
    cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    ).click();
    cy.get("#password-error").should("be.visible");
  });
  it.skip("Registration Failed - All Fields Are Empty", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    ).click();
    cy.get("#firstname-error").should("be.visible");
    cy.get("#lastname-error").should("be.visible");
    cy.get("#email_address-error").should("be.visible");
    cy.get("#password-error").should("be.visible");
    cy.get("#password-confirmation-error").should("be.visible");
  });
  it.skip("Registration Failed - Email Field is Empty", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("hali");
    cy.get("#lastname").type("halim");
    cy.get("#password").type("h4f1sh1d4y4@12");
    cy.get("#password-confirmation").type("h4f1sh1d4y4@12");
    cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    ).click();
    cy.get("#email_address-error").should("be.visible");
  });
  it.skip("Registration Failed - Password Field is Empty", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("hali");
    cy.get("#lastname").type("halim");
    cy.get("#email_address").type("pab7@gmail.com");
    cy.get("#password-confirmation").type("h4f1sh1d4y4@12");
    cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    ).click();
    cy.get("#password-error").should("be.visible");
  });
});
describe("Verify Register Functionality - Positive", () => {
  it.skip("Register Successfully", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("hidayatullah");
    cy.get("#lastname").type("hafis");
    cy.get("#email_address").type("pab4@gmail.com");
    cy.get("#password").type("strength@123");
    cy.get("#password-confirmation").type("strength@123");
    cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    ).click();
    cy.get(".message-success > div").should("be.visible");
    cy.get(".base").should("have.text", "My Account");
  });
  it.skip("Registration Successful - Password Maximum Length", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("Hali12");
    cy.get("#lastname").type("Halim12");
    cy.get("#email_address").type("momsky@gmail.com");
    cy.get("#password").type("MaxPassword12345678910");
    cy.get("#password-confirmation").type("MaxPassword12345678910");
    cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    ).click();
    cy.get(".message-success > div").should("be.visible");
    cy.url().should("include", "/customer/account");
  });
});
