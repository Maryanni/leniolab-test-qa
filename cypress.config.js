const { defineConfig } = require("cypress");
const dotenv = require("dotenv");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const env = dotenv.config().parsed;
      config.env = { ...config.env, ...env };
      return config;
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
  },
});
