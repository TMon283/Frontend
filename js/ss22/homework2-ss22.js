let array = [1, 3, 5, 6, 8, 9];
let number = +prompt("Nhập số bạn muốn tìm: ");
if (Number.isInteger(number)) {
    let check = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            check = true;
            break;
        }
    }
    if (check) {
        console.log("Bingo");
    } else {
        console.log("Chúc bạn may mắn lần sau");
    }
    
} else {
    console.log("Dữ liệu nhập vào không hợp lệ");
}