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

function checkArr(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if ((arr[i + 1] - arr[i]) != (arr[i + 2] - arr[i + 1])) {
            return false;
        }
    }
    return true;
}


inputArr();
if (checkArr(arr)) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}
