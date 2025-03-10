let array = [];
let choice;
do {
    choice = +prompt(
        `                   MENU
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra xem mảng có đối xứng không
        7. Thoát
        Lựa chọn của bạn: 
        `);
    switch (choice) {
        case 1:
            let number = +prompt("Nhập mảng: ");
            for (let i = 0; i < number; i++) {
                let element = +prompt("Nhập phần tử thứ " + i + ": ");
                if (Number.isInteger(element)) {
                    array.push(element);
                } else {
                    console.log("Vui lòng nhập số nguyên!");
                    i--;
                }
            }
            console.log(array);
            break;
        case 2:
            console.log(array);
            break;
        case 3:
            let max = array[0];
            let index = 0;
            for (let i = 1; i < array.length; i++) {
                if (max < array[i]) {
                    max = array[i];
                    index = i;
                }
            }
            console.log(`Phần tử lớn nhất là ${max} và nằm ở vị trí ${index}`);
            break;
        case 4:
            let sum = 0;
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] > 0) {
                    sum += array[i];
                    count++;
                }
            }
            if (count != 0) {
                let average = sum / count;
                console.log(`Tổng các số dương trong mảng là ${sum}`);
                console.log(`Trung bình cộng các số dương trong mảng là ${average}`);
            } else {
                console.log("Trong mảng không có số nguyên dương"); 
            }
            break;
        case 5:
            let reverseArray = [];
            for (let i = array.length - 1; i >= 0; i--) {
                reverseArray.push(array[i]);
            }
            console.log(reverseArray);
            break;
        case 6:
            let isSymmetric = true;
            for (let i = 0; i < array.length / 2; i++) {
                if (array[i] != array[array.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            if (isSymmetric) {
                console.log("Mảng đối xứng");
            } else {
                console.log("Mảng không đối xứng");
            }
            break
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice != 7);