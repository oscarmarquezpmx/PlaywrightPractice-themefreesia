import { expect, Locator, Page } from '@playwright/test';


export class ItemsPage {
    readonly itemAddToCart: Locator;
    readonly itemOpenDescripton: Locator;
    readonly itemAddToWishList: Locator;

    constructor(page: Page) {
        this.itemAddToCart = page.getByRole('link', { name: 'Add “Latex Rubber Lingerie” to your cart' });
        this.itemOpenDescripton = page.locator('.woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail');
        this.itemAddToWishList = page.locator('.add_to_wishlist');
    }

    async addItemToCart() {

        await this.itemAddToCart.click();
    }

    async openItemDescription() {

        await this.itemOpenDescripton.click();
    }


    async addItemToWishList() {

        await this.itemAddToWishList.click();
    }
}


