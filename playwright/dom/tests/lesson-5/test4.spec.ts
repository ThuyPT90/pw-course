//4. Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”. 
// a. Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc, 
// b. Thực hiện search theo tiêu đề bài báo bất kì. 
import { test } from '@playwright/test';
// c1: tạo data và thực hiện
test("Add note and search", async ({ page }) => {
// pre: chuẩn bị data
    const notes = [
        { title: "Title 1", content: "Content 1" },
        { title: "title 2", content: "content 2" },
        { title: "title 3", content: "content 3" },
        { title: "title 4", content: "content 4" },
        { title: "title 5", content: "content 5" },
        { title: "title 6", content: "content 6" },
        { title: "title 7", content: "content 7" },
        { title: "title 8", content: "content 8" },
        { title: "title 9", content: "content 9" },
        { title: "title 10", content: "content 10" }
    ];
    //1. navigate page Playwright then click bài học 4
    await test.step('Navigate page playwright on click "bài 4: personal notes"', async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.click('a[href="04-xpath-personal-notes.html"');
    });

    //2. add new 10 note: content end title at https://vnexpress.net/khoa-hoc
    await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
        for (const note of notes) {
            await page.locator('//input[@type="text" and @id="note-title"]').fill(note.title);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();
        }
    })
    await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
        await page.locator('//input[@type= "text" and @id= "search"]').fill('Title 1');
    })
});

// c2: Insert data ngay tại trang vnexpress
test("Advance: Add personal notes", async ({ page }) => {

    let titles, contents;
    await test.step("Vào trang Vnexpress lấy data", async () => {
        await page.goto('https://vnexpress.net/khoa-hoc', { waitUntil: 'domcontentloaded' });
        titles = await page.locator('//h3[@class="title-news"]/a').allTextContents();
        console.log(titles);
        contents = await page.locator('//p[@class="description"]/a').allTextContents();
        console.log(contents);
    });

    await test.step("Vào playwrightvn > Lesson 4", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    });

    await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
        for (let i = 0; i < 10; i++) {
            await page.locator('//input[@type="text" and @id="note-title"]').fill(titles[i]);
            await page.locator('//textarea[@id="note-content"]').fill(contents[i]);
            await page.locator('//button[@id="add-note"]').click();
        }
    });

    await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
        await page.locator('//input[@type= "text" and @id= "search"]').fill('Khoa');
    });
});