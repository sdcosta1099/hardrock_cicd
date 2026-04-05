// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  /* Expectations */
  expect: {
    timeout: 80 * 1000,
  },

  /* Parallelization */
  fullyParallel: true,

  /* CI protections */
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  /* Reporters */
  reporter: [
    ['html'],
    ['allure-playwright', { outputFolder: 'April_01_2026' }],
  ],

  /* Shared settings */
  use: {
    headless: true,              // ✅ FORCE headless
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    launchOptions: {
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--force-device-scale-factor=1',
      ],
    },
  },

  /* Chromium ONLY */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
      },
    },
  ],
});