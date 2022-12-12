import { test, expect, Locator } from '@playwright/test';

import { ThemefreesiaHome } from '../pages/themefreesia.home.page';
import { SportItemsPage } from '../pages/themefreesia.sportitems.page';
import { HomePageHeader } from '../pages/themefreesia.homeheader.page';

test.describe(' Homepage Test', () => {
    let freesiaHome: ThemefreesiaHome;
    let sportItems: SportItemsPage;
    let homeheader: HomePageHeader;

    test.beforeEach(async ({ page }) => {
        freesiaHome = new ThemefreesiaHome(page);
        sportItems = new SportItemsPage(page);
        homeheader = new HomePageHeader(page);

        await page.goto("https://demo.themefreesia.com/shoppingcart/");

        await freesiaHome.getStarted();


    });


    test('add 1 item from sports to the shopping cart', async ({ page }) => {
        let cartCounter: string;
        let cartElement: Locator;

        cartCounter = '1';
        //cartElement = homeheader.getcarCounter();

        await freesiaHome.sportItems.click();
        await sportItems.addSportItemToCart();

        await page.waitForSelector(`.cart-box:nth-child(2) .cart-value >> text=${cartCounter}`, { timeout: 5000 });
        console.log(await homeheader.getCartCount());
        await expect(await homeheader.getCartCount()).toEqual(cartCounter);

    });
});