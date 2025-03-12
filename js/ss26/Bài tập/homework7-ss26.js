let arr = [];
let number = +prompt("Nhập số lượng số nguyên dương bạn muốn thêm vào mảng: ");
if (Number.isInteger(number) && number > 0) {
    for (let i = 0; i < number; i++) {
        let element = +prompt(`Nhập số thứ ${i + 1} vào mảng: `);
        arr.push(element);
    }
} else {
    console.log("Dữ liệu không hợp lệ");
}
let checkNumber = arr.filter((item)=> (item % 2 == 0));
let result = checkNumber.map((item)=>{
    return item*item;
});
if (result.length == 0) {
    console.log("Mảng không có phần tử nào thỏa mãn");
} else {
    console.log(result);
}