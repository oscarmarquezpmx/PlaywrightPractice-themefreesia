import { expect, Locator, Page } from '@playwright/test';


export class HomePageHeader {
    readonly cartCounter: Locator;

    constructor(page: Page) {
        this.cartCounter = page.locator(".cart-value").nth(0);
    }

    async cartCount(): Promise<string> {
        let cartItemCounter: string;
        return this.cartCounter.innerText();
    }

}


