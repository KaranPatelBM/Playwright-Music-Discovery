# Playwright-Music-Discovery

Playwright-Music-Discovery is an automation repository built using **Playwright** and **TypeScript** to test the **Music-Discovery Web Page**. The web application is built with **React.js** and helps users discover trending music, songs, albums, and artists. The data is powered by the **Last.fm API**, which provides up-to-date information on various music trends.

## Features

- Automated tests for the **Music-Discovery** app using **Playwright**.
- Integration with the **Last.fm API** for trending music data.
- Tests for searching, browsing, and interacting with music-related content.
- Built using **TypeScript** for enhanced development experience and static typing.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 14 or above)
- **npm** (Node Package Manager) or **yarn**

## Getting Started

### 1. Clone the repository

bash
git clone https://github.com/your-username/Playwright-Music-Discovery.git
cd Playwright-Music-Discovery

## 2. Install dependencies
Install the necessary dependencies using npm or yarn
npm install
# or
yarn install

## 3. Running the tests
To run the automated Playwright tests:
npm test
# or
yarn test

## 4. Running in headless mode
To run the tests in headless mode (without launching a browser UI), ensure that you're running with the following command:
npx playwright test --headed

## 5. Running in UI mode
npx playwright test --ui

## Project Structure
tests/ - Contains the Playwright test scripts.
package.json - The main package configuration file.
tsconfig.json - TypeScript configuration file.
playwright.config.ts - Playwright configuration file for setting up browser context, devices, etc.

## Acknowledgments
Playwright: For providing a powerful and flexible automation framework.
TypeScript: For its static typing and improved developer experience.
React.js: For building the frontend of the Music-Discovery Web App.
Last.fm API: For powering the music data used in the app.


Feel free to adjust the repository name and any additional details to fit your actual project structure or preferences.
