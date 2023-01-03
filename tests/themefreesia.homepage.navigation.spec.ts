/**
* TODO: validate the scolling thumbnail in the homepage
* TODO: validate best selling and products thumbnail rows
* TODO: create a user account and login
*/

import { test, expect } from '@playwright/test';
import { ThemefreesiaHome } from '../pages/themefreesia.home.page';
import { HomePageHeader } from '../pages/themefreesia.homeheader.page';
import { SearchPage } from '../pages/themefreesia.searchresults.page';
import { ProductCategoryPage } from '../pages/themefreesia.productcategory.page';
import { HomePageFooter } from "../pages/themefreesia.homefooter.page";



test.describe(' Homepage Test', () => {
    let freesiaHome: ThemefreesiaHome;
    let homeheader: HomePageHeader;
    let homePageFooter: HomePageFooter;
    let searchPage: SearchPage;
    let productCategoryPage: ProductCategoryPage;




    test.beforeEach(async ({ page }) => {
        freesiaHome = new ThemefreesiaHome(page);
        homeheader = new HomePageHeader(page);
        homePageFooter = new HomePageFooter(page);
        searchPage = new SearchPage(page);
        productCategoryPage = new ProductCategoryPage(page);


        await page.goto("https://demo.themefreesia.com/shoppingcart/");
        await expect(freesiaHome.homeLogoImage).toBeVisible();

        //await freesiaHome.getStarted();


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
        await freesiaHome.homeLink.hover();
        await expect(freesiaHome.megaLinkProductCategory).toBeVisible();
        await expect(freesiaHome.megaLinkCustomLinks).toBeVisible();
        await expect(freesiaHome.megaLinkFeaturedProduct).toBeVisible();

        // Product Category
        await expect(freesiaHome.megaMenuOptionUncategorized).toBeVisible();
        await freesiaHome.megaMenuOptionUncategorized.click();
        await expect(productCategoryPage.pageMessageNotFound).toBeVisible();
        await expect(productCategoryPage.breadcrumb).toHaveText("Theme Freesia Sites > Shopping Cart > Products > Uncategorized");

        //Furniture
        await expect(freesiaHome.homeLink).toBeVisible();
        await freesiaHome.homeLink.hover();
        await expect(freesiaHome.megaMenuFurniture).toBeVisible();
        await freesiaHome.megaMenuFurniture.click();

        let product = '80';
        let text = "Raw Oak Shelf";
        let price = "15.00"
        let priceOriginal = "20.00";

        let searchResult = await searchPage.addThumbnail(page, product, text, price, priceOriginal);
        await expect(searchResult.thumbImage).toBeVisible();
        await expect(searchResult.thumbText).toBeVisible();
        await expect(searchResult.thumbPrice).toBeVisible();
        //await expect(searchResult.thumbPriceOriginal).toBeVisible();  //optional validation
        await expect(searchResult.thumbAddToCart).toBeVisible();


        // Glasses
        await expect(freesiaHome.homeLink).toBeVisible();
        await freesiaHome.homeLink.hover();
        await expect(freesiaHome.megaMenuGlasses).toBeVisible();
        freesiaHome.megaMenuGlasses.click();
        await expect(productCategoryPage.pageMessageNotFound).toBeVisible();
        await expect(productCategoryPage.breadcrumb).toHaveText("Theme Freesia Sites > Shopping Cart > Products > Glasses");




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

        let searchResult2 = await searchPage.addThumbnail(page, product2, text2, price2, priceOriginal2);
        await expect(searchResult2.thumbImage).toBeVisible();
        await expect(searchResult2.thumbText).toBeVisible();
        await expect(searchResult2.thumbPrice).toBeVisible();
        //await expect(searchResult2.thumbPriceOriginal).toBeVisible();  //optional validation
        await expect(searchResult2.thumbAddToCart).toBeVisible();
    });


    test("The user should be able to see the footer with the payment options", async ({ page }) => {

        let paymentAmex: string;
        paymentAmex = "amex";

        let paymentOption1 = await homePageFooter.getPaymentOption(page, paymentAmex);
        await expect(paymentOption1.paymentOption).toBeVisible();

        let paymentMasterCard: string;
        paymentMasterCard = "mastercard";

        let paymentOption2 = await homePageFooter.getPaymentOption(page, paymentMasterCard);
        await expect(paymentOption2.paymentOption).toBeVisible();

        let paymentVisa: string;
        paymentVisa = "visa";

        let paymentOption3 = await homePageFooter.getPaymentOption(page, paymentVisa);
        await expect(paymentOption3.paymentOption).toBeVisible();

    })

    test("Verify the All Products Menu in the Homepage", async ({ page }) => {

        await freesiaHome.allProductsSelectMenu(page, "Deals of the Day");
        expect(page).toHaveTitle("Patek Eleven - Shopping Cart");
        await page.goBack();
        await freesiaHome.allProductsSelectMenu(page, "Consumer Electronics");
        await freesiaHome.allProductsSelectSubMenu2(page, "Video");
        await freesiaHome.allProductsSelectSubMenu3(page, "Patek Eleven");
        expect(page).toHaveTitle("Patek Eleven - Shopping Cart");
        await page.goBack();
    })


});