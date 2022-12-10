import { test, expect } from '@playwright/test';
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




        await freesiaHome.sportItems.click();
        await sportItems.addSportItemToCart()
        const [response] = await Promise.all([
            // Waits for the next response with the specified url
            page.waitForResponse(response => response.url() === 'https://demo.themefreesia.com/shoppingcart/?wc-ajax=add_to_cart' && response.status() === 200),
            // Triggers the response

        ]);
        // await homeheader.cartCounter.click();
        await homeheader.cartCount().then(result => console.log(result));
        cartCounter = await homeheader.cartCount();//  console.log(homeheader.cartCounter.innerHTML());
        console.log(cartCounter);
        // await homeheader.cartCount();
        await expect(cartCounter).toEqual("1");

    });
});