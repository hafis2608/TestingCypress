const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl "https://magento.softwaretestingboard.com/",
    // env : { uat : 'test_uat', prod: 'test_prod }
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //
    },
    // defaultCommandTimeout: 300
    // screenshotOnRunFailure: false
  },
});
