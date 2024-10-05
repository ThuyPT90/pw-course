//Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page” 
//a. Nhập đầy đủ các thông tin, click button register 
import { test } from '@playwright/test';

// Khai báo 
const date = "2024-09-24";
const username = "Playwright Viet Nam ";
const lastname = "thuypt";
const email = "playwrightvietnam@gmail.com";
const description = "K9-class";
const interest = ['art', 'sports'];
const country = "usa";
// opject data 
const testData = {
    interest: ['technology', 'art', 'sports'],
    rating: 0,
    color: "#ff0000"
};
test("Exercise 1: Register Page", async ({ page }) => {
    // 1. vào page:https://material.playwrightvn.com/
    await test.step('Open page', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    //2. click vào “Bài học 1: Register Page” 
    await test.step("Click on Bài 1: Register Page", async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    });

    //3. Input data
    await test.step("Input data", async () => {
        // nhập user name c1: ko delay
        await page.locator('//input[@id="username"]').fill(username);
        // nhập user name c1: ko delay
        await page.locator('//input[@id="username"]').pressSequentially(lastname, {
            delay: 80,
        });
        await page.locator('//input[@id="email"]').pressSequentially(email, {
            delay: 80,
        });
        // checck nếu female chưa chọn thì sẽ chọn female
        const isChecked = await page.locator('//input[@id="female"]').isChecked();
        if (isChecked === true) {
            return
        } else await page.locator('//input[@id="female"]').check();
        // Chọn nhiều option
        await page.locator('//input[@id = "reading"]').check();
        await page.locator('//input[@id = "cooking"]').check();
        await page.selectOption('//select[@id="country"]', country);
        // chọn nhiều giá trị trong interests sử dụng biến
        await page.selectOption('//select[@id= "interests"]', interest);
        // chọn nhiều giá trị trong interests sử dụng object chứa các biến file data
        await page.selectOption('//select[@id= "interests"]', testData.interest);
        await page.locator('//input[@id = "dob"]').fill(date);
        await page.locator('//input[@id = "profile"]').setInputFiles(`playwright/dom/tests/lesson-5/download.jpg`);
        await page.locator('//textarea[@id= "bio"]').fill(description);
        await page.locator('//div[@class="tooltip"]').hover();
        await page.locator('//input[@id= "newsletter"]').check();
        // Chọn rating
        const min = page.locator('//input [@id = "rating" and @min = "1"]');
        const max = page.locator('//input [@id = "rating" and @max = "10"]');
        if (testData.rating > 10) {
            await page.locator('//input[@id="rating"]').fill('10');
        } else if (testData.rating <= 1) {
            await page.locator('//input[@id="rating"]').fill('1');
        } else await page.locator('//input[@id="rating"]').fill(`testData.rating`);
    });
    // Click button register
    await test.step('Click login button', async () => {
        await page.getByRole("button", { name: "Register" }).click();
    });
});
