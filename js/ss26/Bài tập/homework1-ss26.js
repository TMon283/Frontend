let array = [];
for (let i = 0; i < 10; i++) {
    let index = +prompt(`Nhập số nguyên thứ ${i + 1} vào mảng `);
    if (Number.isInteger(index)) {
        array.push(index);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
let result = array.filter((item, index)=>{
    return item >= 10;
})
if (result.length == 0) {
    console.log("Mảng không có phần tử nào thỏa mãn");
} else {
    console.log(result);
}

