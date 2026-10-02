import {chromium, Browser, BrowserContext, Page} from "playwright";

async function run(){

    let Browser: Browser = await chromium.launch({headless: false});
    console.log("Browser is launched",Browser);

    let context: BrowserContext = await Browser.newContext();
    console.log("Context is created",context);

    let page: Page = await context.newPage();
    console.log("Page is created",page);

    // cleanup code
    await page.close();
    await context.close();
    await Browser.close();

}