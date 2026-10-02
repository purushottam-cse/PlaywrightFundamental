import { test, expect } from "@playwright/test"

test("context with options", async ({ browser }) => {

    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        locale: 'fr=FR',
        timezoneId: 'Europe/Paris',
        geolocation: { latitude: 48.556, longitude: 2.3522 },
        permissions: ['geolocation'],

    });
    const page = await context.newPage();
    await page.goto("https://app.thetestingacademy.com/");
    await context.close();


});

test("mobile", async ({ browser }) => {
    const iphone = {
        viewport: { width: 375, height: 667 },
        isMobile: true,
        hasTouch: true,
    }

    const context = await browser.newContext(iphone)
    const page = await context.newPage();
    await page.goto("https://app.thetestingacademy.com/")
    await context.close();

})


