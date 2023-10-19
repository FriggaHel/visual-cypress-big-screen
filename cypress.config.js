const { defineConfig } = require('cypress');
const { CypressSauceVisual } = require('@saucelabs/cypress-visual-plugin');

const BROWSER_WIDTH = 3000;
const BROWSER_HEIGHT = 13000;

module.exports = defineConfig({
  e2e: {
    saucelabs: {
      buildName: 'SauceDemo - Cypress - Bigger Screen',
      region: 'us-west-1',
    },
    viewportWidth: BROWSER_WIDTH,
    viewportHeight: BROWSER_HEIGHT,

    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: './cypress/support/e2e.ts',

    video: false,

    setupNodeEvents(on, config) {
      CypressSauceVisual.register(on, config);

      // Increase browser viewport when Headless
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push(`--window-size=${BROWSER_WIDTH},${BROWSER_HEIGHT}`);
          launchOptions.args.push('--force-device-scale-factor=1');
        }

        if (browser.name === 'electron' && browser.isHeadless) {
          launchOptions.preferences.width = BROWSER_WIDTH;
          launchOptions.preferences.height = BROWSER_HEIGHT;
        }

        if (browser.name === 'firefox' && browser.isHeadless) {
          launchOptions.args.push(`--width=${BROWSER_WIDTH}`);
          launchOptions.args.push(`--height=${BROWSER_HEIGHT}`);
        }
        return launchOptions;
      });
    },
  },
})
