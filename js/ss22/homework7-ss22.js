let array = [];
let str = prompt("Nhập chuỗi gồm 10 phần tử để thêm vào mảng: ");
for (let i = 0; i < str.length; i++) {
    if (!Number.isInteger(+str[i]) || str.length !== 10) {
        console.log("Dãy không hợp lệ");
        break;
    } else {
        array.push(str[i]);
    }
}
console.log(`[${array.sort().join(", ")}]`);
