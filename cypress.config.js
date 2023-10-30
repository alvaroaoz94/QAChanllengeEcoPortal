const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Eco Portal QA Automation Challenge',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    video: true,
    screenshotsFolder: 'images'
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});