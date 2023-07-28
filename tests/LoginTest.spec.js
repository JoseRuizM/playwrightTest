import { expect, test } from "@playwright/test";
import { LoginPage } from "../PageObjects/LoginPage";
import { DashboardPage } from "../PageObjects/DashboardPage";
const loginData = JSON.parse(JSON.stringify(require('../utils/TestData/LoginTestData.json')))

test('Login Validation', async({page})=>{
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goToPage();
    await loginPage.login(loginData.userName, loginData.password);

    expect(await dashboardPage.getPageTitle()).toHaveText(loginData.expectedPageTitle);

    await page.pause();
})