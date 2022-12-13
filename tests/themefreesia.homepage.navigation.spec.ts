import { test, expect } from '@playwright/test';
import { ThemefreesiaHome } from '../pages/themefreesia.home.page';
import { HomePageHeader } from '../pages/themefreesia.homeheader.page';
import { SearchPage } from '../pages/themefreesia.searchresults.page';


test.describe(' Homepage Test', () => {
    let freesiaHome: ThemefreesiaHome;
    let homeheader: HomePageHeader;
    let searchPage: SearchPage;


    test.beforeEach(async ({ page }) => {
        freesiaHome = new ThemefreesiaHome(page);
        homeheader = new HomePageHeader(page);
        searchPage = new SearchPage(page);


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

    test('should be able to navigate in the main Home menu options', async ({ page }) => {
        await expect(freesiaHome.homeLink).toBeVisible();
        await freesiaHome.homeLink.click();
        await expect(freesiaHome.megaLinkProductCategory).toBeVisible();
        await expect(freesiaHome.megaLinkCustomLinks).toBeVisible();
        await expect(freesiaHome.megaLinkFeaturedProduct).toBeVisible();

        // Product Category
        await expect(freesiaHome.megaMenuOptionUncategorized).toBeVisible();
        await expect(freesiaHome.megaMenuFurniture).toBeVisible();
        await expect(freesiaHome.megaMenuGlasses).toBeVisible();
    });

    test('should be able to search for the articles he wants to buy', async ({ page }) => {
        await homeheader.searchForAnArticle(page, 'sto')
        let product = '82';
        let text = "Stone Bracelet";
        let price = "188.00"

        let searchResult = await searchPage.addThumbnail(page, product, text, price);
        await expect(searchResult.thumbImage).toBeVisible();
        await expect(searchResult.thumbText).toBeVisible();
        await expect(searchResult.thumbPrice).toBeVisible();
        await expect(searchResult.thumbAddToCart).toBeVisible();

        let product2 = '81';
        let text2 = "Custom Motorcycle";
        let price2 = "1,900.00"
        let priceOriginal2 = "2,000.00";

        let searchResult2 = await searchPage.addThumbnail(page, product2, text2, price, priceOriginal2,);
        await expect(searchResult2.thumbImage).toBeVisible();
        await expect(searchResult2.thumbText).toBeVisible();
        await expect(searchResult2.thumbPrice).toBeVisible();
        await expect(searchResult2.thumbPriceOriginal).toBeVisible();
        await expect(searchResult2.thumbAddToCart).toBeVisible();
    });


});