let numberA = +prompt("Mời bạn nhập vào số a");
let numberB = +prompt("Mời bạn nhập vào số b");
let calculation = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");
if (calculation === "+") {
    alert("Kết quả của phép tính trên a + b = "+(numberA + numberB));
} else if (calculation === "-") {
    alert("Kết quả của phép tính trên a - b = "+(numberA - numberB));
} else if (calculation === "*") {
    alert("Kết quả của phép tính trên a * b = "+(numberA * numberB));
} else if (calculation === "/") {
    alert("Kết quả của phép tính trên a / b = "+(numberA / numberB));
} else {
    alert("Nhập phép tính sai");
}