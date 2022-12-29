import { Locator, Page } from '@playwright/test';


export class ProductCategoryPage {
    readonly breadcrumb: Locator;
    readonly pageMessageNotFound: Locator;
    constructor(page: Page) {
        this.breadcrumb = page.locator('.breadcrumb.home');
        this.pageMessageNotFound = page.locator('.woocommerce-info.woocommerce-no-products-found');

    }



}