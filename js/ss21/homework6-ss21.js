let number = +prompt("Nhập số nguyên bất kì: ");
let result = "";
if (number != 0 && Number.isInteger(number)) {
    for (let i = 1; i <= Math.abs(number); i++) {
        if (number % i == 0) {
            result += i + " " + "-"+ i + " ";
        }
    }
    console.log("Các ước số của "+number+" là: "+result);
} else {
    console.log("Dữ liệu nhập vào không hợp lệ");
}