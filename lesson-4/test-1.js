//1. Khởi động Tàu Vũ trụ K9
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K9";
let crew = ["Thuy", "Thoai", "Trang", "Khang"];
// 1. Khởi động Tàu Vũ trụ K9
function launchShip(arr) {
    let sologan = `Chuẩn bị khởi động! Phi hành đoàn gồm: ${arr} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K9!.`;
    return sologan;
}
let result = launchShip(crew);
console.log(result);
//2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    let distance = time * speed;
    return distance;
}
result = calculateDistance(1000, 24);
console.log(`Khoảng cách đến hành tinh bí ẩn là: ${result} km`);
// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    let hexadecimalNumber = time.toString(16);
    return hexadecimalNumber;
}
let convert = convertTimeToHex(120);
console.log(`Thời gian sau khi chuyển đổi sang hệ thập lục phân là: ${convert}`);
//4. Khám phá kho báu
let code = "K9 Challenge";
function decryptCode(code) {
    let convert = '';
    for (let index = 0; index <= code.length - 1; index++) {
        if (code.charAt(index) === code.charAt(index).toUpperCase()) {
            let change = code.charAt(index).toLowerCase();
            convert += change;
        } else {
            let change = code.charAt(index).toUpperCase();
            convert += change;

        }
    }
    return convert;
}
result = decryptCode(code)
console.log(`Mã để tìm kho báu là: ${result}`)
//5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
result = returnToEarth();
