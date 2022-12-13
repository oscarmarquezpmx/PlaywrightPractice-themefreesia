import { test, expect, Locator } from '@playwright/test';

import { ThemefreesiaHome } from '../pages/themefreesia.home.page';
import { ItemsPage } from '../pages/themefreesia.items.page';
import { HomePageHeader } from '../pages/themefreesia.homeheader.page';

test.describe(' Homepage Test', () => {
    let freesiaHome: ThemefreesiaHome;
    let items: ItemsPage;
    let homeheader: HomePageHeader;

    test.beforeEach(async ({ page }) => {
        freesiaHome = new ThemefreesiaHome(page);
        items = new ItemsPage(page);
        homeheader = new HomePageHeader(page);

        await page.goto("https://demo.themefreesia.com/shoppingcart/");

        await freesiaHome.getStarted();


    });


    test('add 1 item to the shopping cart', async ({ page }) => {
        let expectedCartCounter: string;

        expectedCartCounter = '1';

        await freesiaHome.items.click();
        await items.addItemToCart();
        await expect(await homeheader.getCartCount(page, expectedCartCounter)).toEqual(expectedCartCounter);

    });


    test('add 1 item to the wish list', async ({ page }) => {
        let expectedWishCounter: string;

        expectedWishCounter = '1';

        await freesiaHome.items.click();
        await items.openItemDescription();
        await items.addItemToWishList();
        await expect(await homeheader.getWishListCount(page, expectedWishCounter)).toEqual(expectedWishCounter);

    });
});