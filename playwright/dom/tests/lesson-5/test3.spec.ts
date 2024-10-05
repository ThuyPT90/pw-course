// 3.Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 3: Todo page”. 
// a. Thêm mới 100 todo item có nội dung “Todo <i>” 
// b. Xoá các todo có số lẻ 
import { test } from "@playwright/test";

test("Add item then delete", async ({ page }) => {
    //1. Navigate to Material Playwright Page and click Bài Học 3: todo Page
    await test.step("Navigate to Material Playwright Page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    });

    //2.Add new 100 items with content "Todo <i>"
    await test.step("Add new 100 items", async () => {
        for (let i = 0; i < 100; i++) {
            await page.locator('//input [@id="new-task"]').pressSequentially(`Todo ${i}`, {
                delay: 3,
            });
            //c1. await page.locator('//button[@id="add-task"]').click();
            //C2: Click luôn add
            await page.click('//button[@id="add-task"]');
        }
    });

    //3. Delete odd number on list
    await test.step("Delete odd number on list", async () => {
        page.on('dialog', async dialog => {
            console.log(dialog.message()); // Hiển thị MSG của dialog
            await dialog.accept(); //  Click OK on dialog
        });
        for (let i = 1; i <= 100; i++) {
            if (i % 2 != 0) {
                //C1: dùng tên: await page.locator (`//button[@id="Todo-${i}-delete"]`).click();
                //// await page.locator(`//li/span[text()='Todo ${i}']//following-sibling::div//button[contains(@onclick,'deleteTask')]`).click();
                // c2: dùng chứa text
                const deleteItem = await page.locator('//button[contains(@onclick,"deleteTask")]');
                await deleteItem.waitFor(); // Đảm bảo đã kịp load element
                await deleteItem.click();
            }
        }
    });
})
