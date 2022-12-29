import { Locator, Page } from '@playwright/test';

interface ISearchResults {
    readonly thumbImage: Locator;
    readonly thumbText: Locator;
    readonly thumbPrice: Locator;
    readonly thumbPriceOriginal?: Locator;
    readonly thumbAddToCart: Locator;
}

class SearchResults implements ISearchResults {
    readonly thumbImage: Locator;
    readonly thumbText: Locator;
    readonly thumbPrice: Locator;
    readonly thumbPriceOriginal?: Locator;
    readonly thumbAddToCart: Locator;


    constructor(page: Page, product: string, text: string, price: string, priceOriginal: string | undefined) {
        this.thumbImage = page.locator(`.post-${product} .attachment-woocommerce_thumbnail`);
        this.thumbText = page.locator(`.woocommerce-loop-product__title >> text=${text}`);
        this.thumbPrice = page.locator(`.woocommerce-Price-amount.amount >> text=${price}`);
        if (priceOriginal != undefined) {
            this.thumbPriceOriginal = page.locator(`.woocommerce-Price-amount.amount >> text=${priceOriginal}`);
        }
        this.thumbAddToCart = page.locator(`//a[contains(@href, '?add-to-cart=${product}')]`);
    }
}

export class SearchPage {
    searchResult: SearchResults;
    constructor(page: Page) {

    }

    async addThumbnail(page: Page, product: string, text: string, price: string, priceOriginal?: string | undefined): Promise<SearchResults> {
        this.searchResult = new SearchResults(page, product, text, price, priceOriginal);
        return this.searchResult;
    }

}


