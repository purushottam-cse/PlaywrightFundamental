// locators 
// default locator 
// css engine 
// Xpath 
// Playwright Own Locators getByX
// best stable locator, shortest and does not break 

// Finding elements 
// webelemt - attributre and value 
// tag attribute value 

// ID - Name - Class - tag name -custom locator - css - xpath 

// playwright 

// getByX - ID - Name - Class - tag name -custom locator - css - xpath

// form is used to transfer data  

import { test, expect } from '@playwright/test'

test("enter details to wofy and click login", async ({ page }) => {

    await page.goto('https://app.vwo.com/#/login');
    let userName = page.locator('#login-username');
    let password = page.locator('#login-password');
    let loginButton = page.locator('#js-login-btn');
    ;
    await userName.fill("admin@latest.com");
    await password.fill("tester");
    await loginButton.click();


    let errorMessage = page.locator('#js-notification-box-msg')

    await expect(errorMessage).toContainText('Your email, password, IP address or location did not match')
    await page.pause();



})



