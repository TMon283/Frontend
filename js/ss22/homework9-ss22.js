let array = [];
for (let i = 0; i < 10; i++) {
    let number = +prompt("Nhập số vào mảng: ");
    if (!Number.isInteger(number)) {
        console.log("Dãy không hợp lệ");
        break;
    } else {
        array.push(number);
    }
}
array.sort();
for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
        array.splice(i, 1);
        i--;
    }
}
console.log(`[${array.join(", ")}]`);



