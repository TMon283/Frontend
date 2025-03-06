let numberArray = [];
let number = +prompt("Nhập số lượng phần tử bạn muốn thêm vào mảng: ");
for (let i = 0; i < number; i++) {
    numberArray.push(+prompt("Nhập phần tử thứ "+(i+1)+": "));
}
console.log(numberArray);
