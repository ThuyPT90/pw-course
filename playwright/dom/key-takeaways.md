# DOM
## Định nghĩa: 
DOM = Document Object Model
## Cấu trúc các loại thẻ: 
1. Thẻ mở + text + Thẻ đóng: - Thẻ mở: <Tên thẻ + thuộc tính> Thẻ đóng: </tên thẻ>
- Thuộc tính: có thể có giá trị hoặc không
- VD: <option value = "vn" selected> Viet Nam </option>
2. Thẻ tự đóng: <tên thẻ + thành phần />
### Cách xem DOM:
F12/ developer tools -> chọn elements
## Các Thẻ HTML thường gặp: 
- Thẻ <div>
- Thẻ <h1></h1> đển <h6></h6>
- Thẻ Table:
    - thead = table heading
        -tr = table row = 1 dòng
            - th: table heading: mỗi dòng tương ứng với 1 cột, nội dung trong th được in đậm
    - tbody: 
        - tr: tương ứng với dòng dữ liệu
            - td: table data, chứa data tương ứng với các cột
- List all thẻ tham khảo: https://developer.mozilla.org/en-US/docs/Learn/HTML
            
### Cách xem các dom:
- elements -> chọn nút có mũi tên -> holver
# selector
## XPath selector: cách chọn phần tử trên trang
- xPath = XML Path
- cách chọn tuyệt đối
    - Đưa ra vị trí chính xác 
    - Cấu trúc: / + thẻ
    - VD di chuyển vào ô input: /html/body/div[2]/form/input
- Cách chọn tương đối (thường dùng)
    - Đưa ra vị trí tương đối: ưu tiên tìm id vì nếu html chuẩn thì nó là duy nhất
    - Cấu trúc: //+ tên thẻ + [@<thuộc tính> = "Tên muốn tìm"]
        - VD: //input[@id = "male" and @id = "rating" and @nam = "rating"] --> Tìm chính xác vị trí thỏa mãn AND
            //input[@id = "reading" or @id = "traveling"] --> điều kiện OR: kết hợp 1 trong 2 có ra sẽ ra kết quả
        //<button class="add-to-cart" data-product-id="1">Add to Cart</button>
        --> Tìm kiếm ('//button[@data-product-id = "1"]')
# Playwright:
### Khởi tạo: npm init playwright@lastest -> enter 
### Khai báo hàm test
- Khai báo 1 test mới
- Cú pháp khai báo: 
test('<description need test>', async ({ page }) => {
    // Step test 1
    // Step test 2
});
### Step test:
- Các bước thực hiện testcase
- Cú pháp:
test('login success'),async({page})=>{
 await test.step('điền vào user name, pwd', async()=>{
    // code use basic action
});  
await test.step('Click login button', async()=>{
    //code use basic action
}); 
}
- Note: Mỗi step sẽ là 1 code khác nhau map 1-1 với testcase
### Basic action:
- Navigate (di chuyển đến trang nào đó)
    - Cú pháp: 
    await page.goto("link trang web");
        VD: test('login success',async({page})=>{
        await page.goto("[link trang web](https://material.playwrightvn.com/)");       
        });
- Click:
    - Cấu trúc: B-: đi tới chính xác page cần check
            B1: Tìm vị trí xPath
            B2:  await page.locator(`<vị trí xPath tại B1>').click();
        - Vd: 
        test('login success',async({page})=>{
        await page.goto("[link trang web](https://material.playwrightvn.com/)");       
        // click đơn hoặc nhiều click
        await page.locator('// input[@id = "reading" or @id = "traveling"]').click({
            clickCount: 10, // số lần click
            button: 'right' // click chuột phải
            modifiers: ['shift', 'ctrl'], // số lượng phím sẽ thực hiện click.
        });
        }
        vd2: await page.locator("//button").dblclick();   
- Input:
    - Cấu trúc: B0: Vào vị trí page cần 
            - B1: tìm vị trí xPath
            - B2: await page.locator('<vị trí xPath>').fill("<nội dung text cần điền>")
            - VD: test('input test), async({page})=>{
            await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html")

            await page.locator('/ input[@id = "reading" or @id = "traveling"]').fill("Playwright Viet Nam");

            ####C2: gõ từng ký tự: 
            - B0: Vào vị trí page cần 
            - B1: tìm vị trí xPath
            - B2: await page.locator('<vị trí xPath>').pressSequent('<nội dung text cần điền>'){
                delay: <số giây>// delay gõ giữa các phím
            });
            - VD: page.locator("//input").pressSequentially
        ('Playwright Viet Nam', {
        delay: 100,
        });


            await page.locator('<vị trí xPath>').pressSequent("<nội dung text cần điền>")
        }
 Radio button/ checkbox.
        Lấy giá trị hiện tại đang là check hay không:
        const isChecked =
        page.locator("//input").isChecked();
        Check/ uncheck
        page.locator("//input").check();
        page.locator("//input").setChecked(false);
- Dialog
        - Note: cần handle trước khi sự kiện xảy ra ==> gọi xử lý dialog trước khi gọi delete
        page on('dialog)
        - Xem video hướng dẫn: https://youtu.be/S4h4v2wQS6c?si=Cj74VVfnKK0QEzbP 
===============
# Lesson 06: Git - Class
## Git:
- 
