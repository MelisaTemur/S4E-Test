import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests',
  timeout: 30000,  

  expect: {
    timeout: 5000,  
  },

  reporter: 'html', 

  use: {
    actionTimeout: 0,  
    trace: 'on-first-retry', 
    baseURL: 'https://s4e.io/free-security-tools', 
  },

  
  projects: [
    {
      name: 'Desktop Chromium',
      use: { ...devices['Desktop Chrome'] }, 
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] }, 
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] }, 
    },
  ],
});
