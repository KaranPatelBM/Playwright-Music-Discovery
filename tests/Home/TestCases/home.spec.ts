import { test, expect } from "@playwright/test";
import { Homepage } from "../PageObjects/homePage";
require('dotenv').config({ path: './env/.env.testdata' });

test.describe("Home Page Functionality Check", () => {
    test.beforeEach(async ({ page }) => {        
        await page.goto(process.env.BASE_URL as string, { waitUntil: 'networkidle' });
      });
      
  test("Home Page element visibility check", async ({ page }) => {
    const homePage = new Homepage(page);

    await test.step("Header visibility check", async () => {
        await expect(homePage.myAppNameHeader).toBeVisible();
        await expect(homePage.home).toBeVisible();
        await expect(homePage.contactUs).toBeVisible();
        await expect(homePage.signIn).toBeVisible();
    });
    
    await test.step("Header visibility check", async () => {
        await expect(homePage.footerTile).toBeVisible();
        await expect(homePage.footerLinkdIn).toBeVisible();
        await expect(homePage.footerGitHub).toBeVisible();
    });

    await test.step("Verify scerachBox adn Titile", async() => {
        await expect(homePage.searchBox).toBeVisible();
        await expect(homePage.homePageIntro).toBeVisible();
        await expect(homePage.homePageIntro).toHaveText("Welcome to Karna Music DiscoveryExplore new songs, albums, and artists. Discover your next favorite track!");
    });

    await test.step("Verify song cards are loaded correctly", async() => {
        await homePage.verifySongsCardsLoaded();
    });

  });
},
);