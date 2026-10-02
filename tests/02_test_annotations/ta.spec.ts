import { test, expect } from "@playwright/test";

// test is function object at run time it will be executed and it will take two parameters first is name of the test case and second is async function which will be executed when test case is run

test("Navigating to the testing academy website", async ({ page }) => {

    // callback  function 
    await page.goto("https://app.thetestingacademy.com/")

})

test("BCP - in app 2 roles", async ({ browser }) => {

    let adminContext = await browser.newContext();
    let userContext = await browser.newContext();
    let guestContext = await browser.newContext();

    let adminPage = await adminContext.newPage();
    let userPage = await userContext.newPage();
    let guestPage = await guestContext.newPage();

    await adminPage.goto("https://app.thetestingacademy.com/");
    await userPage.goto("https://app.thetestingacademy.com/");
    await guestPage.goto("https://app.thetestingacademy.com/");

    await adminPage.close();
    await userPage.close();
    await guestPage.close();
})