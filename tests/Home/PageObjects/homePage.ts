import {
    expect,
    type Locator,
    type Page,
} from "@playwright/test";

export class Homepage {
    readonly page: Page;
    readonly root: Locator;
    readonly headerTile: Locator;
    readonly headerLeft: Locator;
    readonly headerRight: Locator;
    readonly myAppNameHeader: Locator;
    readonly home: Locator;
    readonly contactUs: Locator;
    readonly signIn: Locator;
    readonly footerTile: Locator;
    readonly footerLinkdIn: Locator;
    readonly footerGitHub: Locator;
    readonly searchBox: Locator;
    readonly homePageIntro: Locator;
    readonly totalSongsCards: Locator;
    readonly songsCards: (index:number) => Locator;


    constructor(page: Page) {
        this.page = page;
        this.root = page.locator('#root');
        this.headerTile = page.locator('[data-test-id="header-tile"]');
        this.headerLeft = this.headerTile.locator('.header-left');
        this.headerRight = this.headerTile.locator('.header-right');
        this.myAppNameHeader = this.headerTile.getByRole('heading', { name: 'Karna' })
        this.home = this.headerRight.locator('[data-test-id="home"]');
        this.contactUs = this.headerRight.locator('[data-test-id="contact-us"]');
        this.signIn = this.headerRight.locator('[data-test-id="signin"]');
        this.footerTile = this.root.locator('[data-test-id="footer-tile"]');
        this.footerLinkdIn = this.footerTile.locator('[data-test-id="LinkedIn"]');
        this.footerGitHub = this.footerTile.locator('[data-test-id="GitHub"]');
        this.searchBox = this.root.locator('[data-test-id="search-box"]');
        this.homePageIntro = this.root.locator('[data-test-id="Intro-tile"]');
        this.totalSongsCards = this.root.locator('[data-test-id^="music-item-"]');
        this.songsCards = (index:number) => this.root.locator(`[data-test-id="music-item-${index}"]`);
    }

    async verifySongsCardsLoaded(){

        const songCardsCount = await this.totalSongsCards.count();

        for(let i=0; i <songCardsCount; i++)
        {
            await expect(this.songsCards(i), "song cards must be visible").toBeVisible();
        }
        console.log(`all ${songCardsCount} are visible`);
    }
}