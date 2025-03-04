let number = +prompt("Mời bạn nhập số nguyên dương: ");
let sum = 0;
if (number <= 0 || !Number.isInteger(number)) {
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    for (let i = 0; i <= number; i++) {
        sum = sum + i;  
    }
    alert(`${sum}`);
}