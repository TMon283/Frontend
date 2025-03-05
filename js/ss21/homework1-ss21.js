let sum = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Nhập số nguyên: ");
    if (number % 2 == 1 && Number.isInteger(number)) {
        sum += number;
    }
}
console.log("Kết quả: "+sum);
