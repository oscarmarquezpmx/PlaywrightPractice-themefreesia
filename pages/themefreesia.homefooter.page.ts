import { Locator, Page } from '@playwright/test';
import { Utilities } from '../utilities/utilities';

class PaymentOption {
    readonly paymentOption: Locator;


    constructor(page: Page, payment: string) {
        this.paymentOption = page.locator(`.fa.fa-cc-${payment}`);

    }

}

export class HomePageFooter {
    readonly utilities: Utilities;

    constructor(page: Page) {

    }


    async getPaymentOption(page: Page, payment: string): Promise<PaymentOption> {
        let paymentType: PaymentOption;
        let utilities: Utilities;

        utilities = new Utilities();

        paymentType = new PaymentOption(page, payment);
        await utilities.scrollOnElement(page, paymentType.paymentOption);

        return paymentType;
    }
}




