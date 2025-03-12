let arr = [];
let number = +prompt("Nhập số lượng email bạn muốn thêm vào mảng: ");
if (Number.isInteger(number)) {
    for (let i = 0; i < number; i++) {
        let element = prompt(`Nhập chuỗi thứ ${i + 1} vào mảng: `);
        arr.push(element);
    }
} else {
    console.log("Dữ liệu không hợp lệ");
}
let checkEmail = arr.filter((item, index)=>{
    let check = false;
    let checkSpace = true;
    for (let i = 0; i < item.length; i++) {
        if (item[i] == "@") {
            check = true;
        }
        if (item[i] == " ") {
            checkSpace = false;
            break;
        }
    }
    if (check == true && checkSpace == true) {
        return item;
    }
})
if (checkEmail.length == 0) {
    console.log("Mảng không có phần tử nào thỏa mãn");
} else {
    console.log(checkEmail);
}