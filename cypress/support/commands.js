// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("registrasi", (firstname, lastname, email, pw, pwc) => {
  cy.get("#firstname").type(firstname);
  cy.get("#lastname").type(lastname);
  cy.get("#email_address").type(email);
  cy.get("#password").type(pw);
  cy.get("#password-confirmation").type(pwc);
  cy.get(
    "#form-validate > .actions-toolbar > div.primary > .action > span"
  ).click();
  cy.get(".message-success > div").should("be.visible");
  cy.url().should("include", "/customer/account");
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
