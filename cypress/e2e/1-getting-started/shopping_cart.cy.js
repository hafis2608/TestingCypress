/// <reference types="cypress" />

describe("Shopping Cart Automation on Magento", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  it("Should add a product to the cart and update quantity", () => {
    // Cari produk menggunakan search bar
    cy.get("#search").type("Push It Messenger Bag{enter}");

    // Klik produk dari hasil pencarian
    cy.contains("Push It Messenger Bag").click();

    // Verifikasi halaman produk terbuka
    cy.url().should("include", "push-it-messenger-bag");

    // Tunggu sampai input kuantitas tersedia
    cy.get("input.input-text.qty", { timeout: 10000 }).should("be.visible");

    // Update kuantitas produk
    cy.get("input.input-text.qty").clear().type("2");

    // Tambahkan ke keranjang
    cy.get("#product-addtocart-button").click();

    // Verifikasi produk berhasil ditambahkan ke keranjang
    cy.contains("You added Push It Messenger Bag to your shopping cart").should(
      "be.visible"
    );

    // Klik ikon keranjang
    cy.get(".showcart").click();

    // Pergi ke halaman shopping cart
    cy.contains("View and Edit Cart").click();

    // Tunggu dan update jumlah produk
    cy.get("input.input-text.qty", { timeout: 10000 }).clear().type("3");

    // Klik tombol update shopping cart
    cy.contains("Update Shopping Cart").click();

    // Verifikasi bahwa jumlah produk telah diperbarui
    cy.get("input.input-text.qty").should("have.value", "3");
  });
});
