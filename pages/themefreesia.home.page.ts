import { expect, Locator, LocatorScreenshotOptions, Page } from '@playwright/test';


export class ThemefreesiaHome {

    //main menus
    readonly homeLink: Locator;
    readonly sectionsLink: Locator;
    readonly cartLink: Locator;
    readonly blogLink: Locator;
    readonly contactUsLink: Locator;
    readonly homeLogoImage: Locator;


    readonly items: Locator;

    // main menu submenus

    readonly megaLinkProductCategory;
    readonly megaLinkCustomLinks: Locator;
    readonly megaLinkFeaturedProduct: Locator;

    readonly megaMenuOptionUncategorized: Locator;
    readonly megaMenuFurniture: Locator;
    readonly megaMenuGlasses: Locator;


    constructor(page: Page) {

        //Navigation Bar
        this.homeLink = page.locator(".dashicons-admin-home");
        this.sectionsLink = page.locator(".dashicons-editor-insertmore");
        this.cartLink = page.getByRole('link', { name: ' Shop' });
        this.homeLogoImage = page.getByRole('link', { name: ' Home ' });
        this.blogLink = page.getByRole('link', { name: ' Blog' });
        this.contactUsLink = page.getByRole('link', { name: ' Contact Us' });
        this.items = page.getByRole('link', { name: 'Sports' }).nth(1);

        // Home Menu 

        this.megaLinkProductCategory = page.locator(".mega-menu-link >> text=PRODUCT CATEGORY")
        this.megaLinkCustomLinks = page.locator(".mega-menu-link >> text=CUSTOM LINKS")
        this.megaLinkFeaturedProduct = page.locator(".mega-block-title >> text=FEATURED PRODUCT")

        // Home submenus

        this.megaMenuOptionUncategorized = page.locator(".mega-menu-title >> text=Uncategorized")
        this.megaMenuFurniture = page.locator(".mega-menu-title >> text=Furniture")
        this.megaMenuGlasses = page.locator(".mega-menu-title >> text=Glasses")


    }

    async getStarted() {
        await expect(this.homeLogoImage).toBeVisible();
    }




}