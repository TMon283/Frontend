let amstrongNumber = "";
for (let i = 100; i <= 999; i++) {
    let a = Math.floor(i / 100);
    let b = Math.floor((i % 100) / 10);
    let c = i % 10;
    if (a**3 + b**3 + c**3 === i) {
        amstrongNumber += i + " ";
    }
}
console.log("Danh sách các số Amstrong có 3 chữ số là: " + amstrongNumber);
