import { expect, Locator, Page } from '@playwright/test';


export class SportItemsPage {
    readonly sportItem: Locator;

    constructor(page: Page) {
        this.sportItem = page.getByRole('link', { name: 'Add “Latex Rubber Lingerie” to your cart' });

    }

    async addSportItemToCart() {

        await this.sportItem.click();


        //  https://demo.themefreesia.com/shoppingcart/?wc-ajax=add_to_cart
        // await this.sportItem.waitFor();
    }

}


