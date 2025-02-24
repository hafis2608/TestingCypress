class Register {
  first_name = "#firstname";
  last_name = "#lastname";
  email_address = "#email_address";
  password = "#password";
  password_conf = "#password-confirmation";
  click_register =
    "#form-validate > .actions-toolbar > div.primary > .action > span";
  show_message = ".message-success > div";
  show_title = ".base";

  selectDaftar(firstname, lastname, email, pw, pwc) {
    // cy.get(this.first_name).type("Hidayatullah");
    // cy.get(this.last_name).type("Hafis");
    // cy.get(this.email_address).type("pab4@gmail.com");
    // cy.get(this.password).type("strength@123");
    // cy.get(this.password_conf).type("strength@123");
    // cy.get(this.click_register).click();
    // cy.get(this.show_message).should("be.visible");
    // cy.get(this.show_title).should("have.text", "My Account");

    cy.get(this.first_name).type(firstname);
    cy.get(this.last_name).type(lastname);
    cy.get(this.email_address).type(email);
    cy.get(this.password).type(pw);
    cy.get(this.password_conf).type(pwc);
    cy.get(this.click_register).click();
    cy.get(this.show_message).should("be.visible");
    cy.get(this.show_title).should("have.text", "My Account");
  }
}
export default new Register();
