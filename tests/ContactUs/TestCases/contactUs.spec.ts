import { test, expect } from "@playwright/test";
import { Homepage } from "../../Home/PageObjects/homePage";
import { ContactUs } from "../PageObject/contactUs"

test.describe("Home Page Functionality Check", () => {
    test.beforeEach(async ({ page }) => {        
        await page.goto('http://localhost:5174/contact', { waitUntil: 'networkidle' });
      });

    test("ContactUs Page element visibility check", async ({ page }) => {
        const homePage = new Homepage(page);  
        const contactUs = new ContactUs(page);

        await test.step("verify that the ContactUs page visibility check", async() => {
            await expect(contactUs.contactUsContainer).toBeVisible();
            await expect(contactUs.contactUsTitle).toBeVisible();
            await expect(contactUs.yourName).toBeVisible();
            await expect(contactUs.yourEmail).toBeVisible();
            await expect(contactUs.yourMessage).toBeVisible();
        });

        await test.step("verify that the ContactUs page visibility check", async() => {
            await contactUs.fillYourName();
            await contactUs.fillYourEmail();
            await contactUs.fillYourMessage();
            await contactUs.submitBtn.click();
            await expect(contactUs.popUpMessage).toHaveText('Message sent successfully!')
        });
    });    

 },
);   