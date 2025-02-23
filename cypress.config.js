module.exports = {
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    watchForFileChanges: false, // Disable auto reload on file changes
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://magento.softwaretestingboard.com',
//     watchForFileChanges: false, // Disable auto reload on file changes
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });