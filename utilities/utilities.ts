import { Locator } from "@playwright/test";

export class Utilities {

    constructor() {


    }


    async scrollOnElement(page, selector: Locator): Promise<void> {
        let cleanSelector = this.extractSelector(selector)
        await page.$eval(cleanSelector, (element) => {
            element.scrollIntoView();
        });
    }

    extractSelector(selector: Locator) {
        const selectorString = selector.toString();
        const parts = selectorString.split("@");
        if (parts.length !== 2) { throw Error("extractSelector: susupect that this is not a locator"); }
        if (parts[0] !== "Locator") { throw Error("extractSelector: did not find locator"); }
        return parts[1];
    }
}