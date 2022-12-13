import { expect, Locator, Page } from '@playwright/test';


export class HomePageHeader {
    readonly cartCounter: Locator;
    readonly wishCounter: Locator;
    cartCount: string;

    constructor(page: Page) {
        this.cartCounter = page.locator(".cart-value").nth(0);
        this.wishCounter = page.locator(".wl-counter").nth(0);


    }


    async getCartCount(page: Page, cartCounter: string): Promise<string> {
        let cartItemCounter: string;
        await page.waitForSelector(`.cart-box:nth-child(2) .cart-value >> text=${cartCounter}`, { timeout: 5000 });
        return await this.cartCounter.innerText();
    }


    async getWishListCount(page: Page, wishCounter: string): Promise<string> {
        let cartItemCounter: string;
        await page.waitForSelector(`.wl-counter >> text=${wishCounter}`, { timeout: 5000 });
        return await this.wishCounter.innerText();
    }
}


