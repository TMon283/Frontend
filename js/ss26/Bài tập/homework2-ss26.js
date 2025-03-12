let arr = [];
let number = +prompt("Nhập số lượng chuỗi bạn muốn thêm vào mảng: ");
if (Number.isInteger(number)) {
    for (let i = 0; i < number; i++) {
        let element = prompt(`Nhập chuỗi thứ ${i + 1} vào mảng: `);
        arr.push(element);
    }
} else {
    console.log("Dữ liệu không hợp lệ");
}
let checkArray = arr.filter((item)=>{
    return item.length > 5;
})
if (checkArray.length == 0) {
    console.log("Mảng không có phần tử nào thỏa mãn");
} else {
    console.log(checkArray);
}