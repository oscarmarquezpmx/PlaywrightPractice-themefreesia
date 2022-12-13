import { expect, Locator, Page } from '@playwright/test';


export class ThemefreesiaHome {
    readonly homeLink: Locator;
    readonly sectionsLink: Locator;
    readonly cartLink: Locator;
    readonly blogLink: Locator;
    readonly contactUsLink: Locator;
    readonly homeLogoImage: Locator;

    readonly items: Locator;

    constructor(page: Page) {
        this.homeLink = page.locator(".dashicons-admin-home");
        this.sectionsLink = page.locator(".dashicons-editor-insertmore");
        this.cartLink = page.getByRole('link', { name: ' Shop' });
        this.homeLogoImage = page.getByRole('link', { name: ' Home ' });
        this.blogLink = page.getByRole('link', { name: ' Blog' });
        this.contactUsLink = page.getByRole('link', { name: ' Contact Us' });
        this.items = page.getByRole('link', { name: 'Sports' }).nth(1);
    }

    async getStarted() {
        await expect(this.homeLogoImage).toBeVisible();
    }

}