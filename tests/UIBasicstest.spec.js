//@ts-check
import {test, expect} from '@playwright/test';


test.describe('First group of tests', ()=>{
    /*
    test.skip('has title', async ({page})=>{
        await page.goto('https://playwright.dev/');
    
        //Expect a title "to Contain" a substring.
        await expect(page).toHaveTitle(/Playwright/);
    });
    
    test.skip('get started link', async ({page})=>{
        await page.goto('https://playwright.dev/');
    
        //click the get started link.
        await page.getByRole('link', {name: 'Get started'}).click();

        //Expects the URL to contain intro.
        await expect(page).toHaveURL(/.*intro/);
    });
*/
    test('Browser Context Declaration', async({browser})=>{

        //Context could help us to inject some cookies to our page but if we need a new/fresh page we can use page

        const context = await browser.newContext();
        const page  = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await page.title());
        await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    });
    
    test('Page playwright Test', async ({page})=>{
        await page.goto('https://google.com');
        console.log(await page.title());
        await expect(page).toHaveTitle('Google');
    });    
});





