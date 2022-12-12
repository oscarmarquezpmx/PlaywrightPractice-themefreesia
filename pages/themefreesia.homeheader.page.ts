import { expect, Locator, Page } from '@playwright/test';


export class HomePageHeader {
    readonly cartCounter: Locator;
    cartCount: string;

    constructor(page: Page) {
        this.cartCounter = page.locator(".cart-value").nth(0);

    }


    async getCartCount(): Promise<string> {
        let cartItemCounter: string;
        return await this.cartCounter.innerText();
    }

}


