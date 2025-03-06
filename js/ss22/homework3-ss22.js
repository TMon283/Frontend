let array = [];
let str = prompt("Nhập chuỗi muốn thêm vào mảng: ");
for (let i = 0; i < str.length; i++) {
    if (!Number.isInteger(+str[i])) {
        console.log("Dãy không hợp lệ");
        break;
    } else {
        array.push(str[i]);
    }
}
console.log(array.reverse().join(""));
