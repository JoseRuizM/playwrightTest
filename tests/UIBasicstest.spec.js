//@ts-check
import {test, expect} from '@playwright/test';


test.describe('First group of tests', ()=>{
    test('has title', async ({page})=>{
        await page.goto('https://playwright.dev/');
    
        //Expect a title "to Contain" a substring.
        await expect(page).toHaveTitle(/Playwright/);
    });
    
    test('get started link', async ({page})=>{
        await page.goto('https://playwright.dev/');
    
        //click the get started link.
        await page.getByRole('link', {name: 'Get started'}).click();
    
        //Expects the URL to contain intro.
        await expect(page).toHaveURL(/.*intro/);
    });
});


