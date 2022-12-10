import { test, expect } from '@playwright/test';
import { ThemefreesiaHome } from '../pages/themefreesia.home.page';


test.describe(' Homepage Test', () => {
    let freesiaHome: ThemefreesiaHome;

    test.beforeEach(async ({ page }) => {
        freesiaHome = new ThemefreesiaHome(page);

        await page.goto("https://demo.themefreesia.com/shoppingcart/");

        await freesiaHome.getStarted();


    });


    test('should display the navigation bar with all the links', async ({ page }) => {

        await expect(freesiaHome.homeLogoImage).toBeVisible();
        await expect(freesiaHome.homeLink).toBeVisible();
        await expect(freesiaHome.sectionsLink).toBeVisible();
        await expect(freesiaHome.cartLink).toBeVisible();
        await expect(freesiaHome.blogLink).toBeVisible();
        await expect(freesiaHome.contactUsLink).toBeVisible();

    });
});