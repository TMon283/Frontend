let number = +prompt("Nhập số lượng số nguyên tố đầu tiên bạn muốn tìm: ");

let result = "";
if (!Number.isInteger(number)) {
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    let count = 0;
    let i = 2;
    while (count < number) {
        let check = false;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                check = true;
                break;
            }
        }
        if (!check) {
            result += i + " ";
            count++;
        }
        i++;
    }
    console.log(number+" số nguyên tố đầu tiên là: "+result);
}