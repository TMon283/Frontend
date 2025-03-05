let number = +prompt("Nhập số nguyên: ");
let check = false;
if (!Number.isInteger(number)) {
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    for (let i = 2; i < number / 2; i++) {
        if (number % i == 0){
            check = true;
            break;
        }
    }
    if (check) {
        console.log("Không phải số nguyên tố");
    } else {
        console.log("Là số nguyên tố");
    }
}
