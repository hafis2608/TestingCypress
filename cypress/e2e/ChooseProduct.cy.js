describe('Choose and Update Product', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
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
    it('Empty Required Field', () => {
      cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#product-addtocart-button').click()
      //assertion sudah masuk pilih baju
      cy.url().should('include','radiant-tee')

      //menambahkan langsung ke keranjang tanpa memilih apapun, termasuk mengosongkan required field
      cy.get('#product-addtocart-button').click()
      cy.get('#super_attribute\[93\]-error').should('be.visible')
    })
    it('Add qty more than maximum purschase', () => {
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
          cy.get('#product-addtocart-button').click()
          //assertion sudah masuk pilih baju
          cy.url().should('include','radiant-tee')
            //menambahkan barang dengan lebih dari maksimum
          cy.get('#option-label-size-143-item-169').click()
          cy.get('#option-label-color-93-item-50').click()
          cy.get('#qty').type('10555')
          cy.get('#product-addtocart-button').click()
          cy.get('#qty-error').should('be.visible')
        })
    it('Fill Required Field', () => {
    cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#product-addtocart-button').click()
      //assertion sudah masuk pilih baju
      cy.url().should('include','radiant-tee')
        //menambahkan barang dengan mengisi semua yang required
      cy.get('#option-label-size-143-item-169').click()
      cy.get('#option-label-color-93-item-57').click()
      cy.get('#product-addtocart-button').click()
      cy.get('.message-success > div').should('be.visible');
      cy.get('.counter-number').should('have.text', '1');
    })
    it.only('Delete item shopping cart', () => {
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
          cy.get('#product-addtocart-button').click()
          //assertion sudah masuk pilih baju
          cy.url().should('include','radiant-tee')
            //menambahkan barang dengan mengisi semua yang required
          cy.get('#option-label-size-143-item-169').click()
          cy.get('#option-label-color-93-item-57').click()
          cy.get('#product-addtocart-button').click()
          //cy.get('.message-success > div').should('be.visible');
          cy.get('.counter-number').should('have.text', '1');
          cy.get('.showcart').click()
          cy.get('.subtotal > .label > span').should('be.visible')
          //hapus item di keranjang
          cy.get('.product-item-details > .actions > .secondary > .action').click()
          cy.get('.action-primary > span').click()
        })
   
    
  })