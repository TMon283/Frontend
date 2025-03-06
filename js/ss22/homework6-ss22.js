let count = 0;
let str = prompt("Nhập chuỗi muốn thêm vào mảng: ");
let number = +prompt("Nhập số cần kiểm tra: ");
for (let i = 0; i < str.length; i++) {
    if (!Number.isInteger(+str[i]) || !Number.isInteger(number)) {
        console.log("Dữ liệu không hợp lệ");
        break;
    } else {
        if (str[i] == number) {
            count++;
        }
    }
}
count != 0 ? console.log(`Số ${number} xuất hiện ${count} lần trong mảng`) : console.log(`Số ${number} không xuất hiện trong mảng`);


