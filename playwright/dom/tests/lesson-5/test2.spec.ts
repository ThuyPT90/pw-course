// 2. Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau: a. Sản phẩm 1: 2 sản phẩm 
// b. Sản phẩm 2: 3 sản phẩm 
// c. Sản phẩm 3: 1 sản phẩm 

import { test } from '@playwright/test';
import { count } from 'console';

test("Exercise 2: add Product on cart ", async ({ page }) => {
    // 1. Open page:https://material.playwrightvn.com/
    await test.step('1. Open page', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    //2. click on "Bài học 2: product page"
    await test.step("2. Bài học 2: product page", async () => {
        await page.locator('//a[@ href="02-xpath-product-page.html"]').click();
    });
    //3. add product one: 2 items
    await test.step('Add 2 items of product one', async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    });
    //4. Add product two: 3 items
    await test.step("Add prodcut 2: 3 items", async () => {
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    });
    //5. Add product three: 1 item, thẻ elemen: <button class="add-to-cart" data-product-id="3">Add to Cart</button> -> để nháy đơn ngoài thì giữ nguyên thẻ
    await test.step("Add product 3: 1 item", async () => {
        await page.locator('//button[@data-product-id="3"]').click();
    });
})