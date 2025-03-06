let str = prompt("Nhập dãy số vào mảng: ");
let array = str.split("");
let maxNumber = array[0];
for (let i = 0; i < array.length; i++) {
    if (!Number.isInteger(+array[i])) {
        console.log("Dãy số không hợp lệ");
        break;
    } else {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
}
console.log(`${maxNumber} là số lớn nhất trong dãy số`);

