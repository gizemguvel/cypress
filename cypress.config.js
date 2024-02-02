const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    baseUrl: "https://practicesoftwaretesting.com/#/",
    env: {
      signin: "auth/login",
      contact: "contact",
      amazon: "https://www.amazon.com",
    }
  },
});
