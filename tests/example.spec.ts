import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
// import { test } from '@playwright/test';
// import { deflate } from 'zlib';
// // Khai báo 
// const date = "2024-09-24";
// const username = "Playwright Viet Nam";
// const email = "playwrightvietnam@gmail.com";
// const description = "K9-class";
// const country = "usa";

// test("Exercise 1: Register Page", async ({ page }) => {
//     // 1. vào page:https://material.playwrightvn.com/
//     await test.step('Open page', async () => {
//         await page.goto('https://material.playwrightvn.com/');
//     });

//     //2. click vào “Bài học 1: Register Page” 
//     await test.step("Click on Bài 1: Register Page", async () => {
//         await page.locator('//a[@href="01-xpath-register-page.html"]').click();
//     });

//     //3. Input data
//     await test.step("Input data", async()=> {
//         await page.locator('//input[@id="username"]').fill(username);   
//     });
   
//     await page.locator('//input[@id="username"]').pressSequentially(username){
//         deflate: 80;
//     }       
// });