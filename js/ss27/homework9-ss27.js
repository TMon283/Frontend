let arr = [];
function inputArr() {
    let number = +prompt("Nhập số lượng phần tử bạn muốn thêm vào mảng");
    if (!Number.isInteger(number)) {
        console.log("Dữ liệu nhập vào không hợp lệ");
        return;
    }
    for (let i = 0; i < number; i++) {
        let index = +prompt(`Phần tử thứ ${i+1}: `);
        if (!Number.isInteger(index)) {
            console.log("Dữ liệu nhập vào không hợp lệ");
            return;
        }
        arr.push(index);
    }
}
function sortEvenNumbers(arr) {
    let evenNumbers = arr.filter(num => num % 2 == 0).sort((a, b) => a - b);
    let evenIndex = 0;
    return arr.map(num => {
        if (num % 2 == 0) {
            return evenNumbers[evenIndex++];
        }
        return num;
    });
}

inputArr();
console.log(sortEvenNumbers(arr));
