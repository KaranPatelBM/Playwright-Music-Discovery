import {
    expect,
    type Locator,
    type Page,
} from "@playwright/test";
import Utils from "../../Utilities/utils";

export class ContactUs {
    readonly page: Page;
    readonly contactUsContainer: Locator;
    readonly contactUsTitle: Locator;
    readonly yourName: Locator;
    readonly yourEmail: Locator;
    readonly yourMessage: Locator;
    readonly submitBtn: Locator;
    readonly popUpMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactUsContainer = page.locator('.contact-us-container');
        this.contactUsTitle = this.contactUsContainer.getByRole('heading', { name: 'Contact Us' });
        this.yourName = this.contactUsContainer.getByPlaceholder("Your Name");
        this.yourEmail = this.contactUsContainer.locator('[data-test-id="input-email"]');
        this.yourMessage = this.contactUsContainer.locator('[data-test-id="textarea-message"]');
        this.submitBtn = this.contactUsContainer.locator('[data-test-id="submit-button"]');
        this.popUpMessage = this.contactUsContainer.locator('.popup-message');
    }

    async fillYourName() {
        const name = Utils.generateRandomAlphabetic();
        await this.yourName.fill(name);
    }

    async fillYourEmail() {
        const email = Utils.generateRandomEmail()
        await this.yourEmail.fill(email);
    }

    async fillYourMessage() {
        const message = Utils.generateRandomMessage();
        await this.yourMessage.fill(message);
    }
}