let chan = 0;
let le = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Nhập số nguyên: ");
    if (number % 2 == 1 && Number.isInteger(number)) {
        le += number;
    } else {
        chan += number;
    }
}
console.log("Tổng các số chẵn: "+chan);
console.log("Tổng các số lẻ: "+le);
