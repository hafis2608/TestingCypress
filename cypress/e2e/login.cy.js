describe('Verifikasi Login', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  //skenario 1, login sukses
  it('Sukses login', () => {
    //Assertions sudah masuk ke website
    cy.get('.panel > .header > .authorization-link > a').should('be.visible');
    cy.get('.panel > .header > .authorization-link > a').click();
    
    //klik login
    cy.get('[href="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]')
    
    // Assertions email field muncul
    cy.get('#email').should('be.visible');
    //login Shabrina = Choose product and Update Shopping Cart
    cy.get('#email').type('Cole1@mailinator1.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Cole1@mailinator1.compass')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    // Assertion sudah homepage
    cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible');
  })
})