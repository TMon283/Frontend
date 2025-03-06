let array = [];
let maxCount = 0;
let maxNumber;
let checkArray = {};
for (let i = 0; i < 10; i++) {
    let number = +prompt("Nhập số vào mảng: ");
    if (!Number.isInteger(number)) {
        console.log("Dãy không hợp lệ");
        break;
    } else {
        array.push(number);
    }
}
for (let i = 0; i < array.length; i++) {
    let num = array[i];
    checkArray[num] = (checkArray[num] || 0) + 1;
}
for (let num in checkArray) {
    if (checkArray[num] > maxCount) {
        maxCount = checkArray[num];
        maxNumber = Number(num);
    } else if (checkArray[num] === maxCount) {
        if (Number(num) < maxNumber) {
            maxNumber = Number(num);
        }
    }
}
console.log("Phần tử xuất hiện nhiều nhất là: " + maxNumber);
