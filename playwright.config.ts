import { defineConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

const isCI = !!process.env.CI

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: isCI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["html"],
    ["junit",
      {
        outputFile: "playwright-report/junit/junit-test-report.xml",
      }
    ]  
  ],
  timeout: 40 * 1000,
  expect: {
    timeout: 10 * 1000,
  },

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: isCI ? 'on-first-retry': "on",
    screenshot: isCI ? "only-on-failure": "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'basic tests',
      testMatch: /.*\.spec\.ts/,
    },
  ],
});
