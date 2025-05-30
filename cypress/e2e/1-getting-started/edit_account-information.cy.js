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
    //TC Login Page -> Homepage - My Account page -> Edit Account Information Page
      it("Can access Edit Account Information", () => {
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
    //TC Change Email Failed - current password false
      it("Can't change Email in Edit Account Information - Current Password False", () => {
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
        cy.get('#current-password').type("qwerty123")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-error').should('be.visible')
        cy.get('.message-error').should('contain.text','Verify the password and try again.')
      });

    //TC Change email Success - current password true
      it("Can change Email in Edit Account Information", () => {
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
    //TC Change Password Failed - current password false
      it("Can't change Password in Edit Account Information - Current Password False", () => {
        cy.contains("Sign In").click()
        cy.get('#email').type("cobadulu@gmail.com")
        cy.get('#pass').type("Qwerty123")
        cy.get('#send2').click()
        cy.get('.logged-in').should("be.visible")
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.contains("My Account").click()
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').should('be.visible')
        cy.get('.change-password').should('be.visible')
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.url().should('include', '/customer/account/edit')
        cy.get('#change-password').check()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#current-password-error').should('contain.text','This is a required field.')
        cy.get('#password-error').should('contain.text','This is a required field.')
        cy.get('#password-confirmation-error').should('contain.text','This is a required field.')
        cy.get('#current-password').type("qwerty123")
        cy.get('#password').type("Qawsed123")
        cy.get('#password-confirmation').type("Qawsed123")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-error').should('be.visible')
        cy.get('.message-error').should('contain.text','Verify the password and try again.')
      });
    //TC Change Password Success - current password true
      it("Can change Password in Edit Account Information", () => {
        cy.contains("Sign In").click()
        cy.get('#email').type("cobadulu@gmail.com")
        cy.get('#pass').type("Qwerty123")
        cy.get('#send2').click()
        cy.get('.logged-in').should("be.visible")
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.contains("My Account").click()
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').should('be.visible')
        cy.get('.change-password').should('be.visible')
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.url().should('include', '/customer/account/edit')
        cy.get('#change-password').check()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#current-password-error').should('contain.text','This is a required field.')
        cy.get('#password-error').should('contain.text','This is a required field.')
        cy.get('#password-confirmation-error').should('contain.text','This is a required field.')
        cy.get('#current-password').type("Qwerty123")
        cy.get('#password').type("Qawsed123")
        cy.get('#password-confirmation').type("Qawsed123")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-success').should('be.visible')
        cy.get('.message-success').should('contain.text','You saved the account information.')
      });
    });