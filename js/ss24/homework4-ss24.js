let array = [];
let choice;
do {
    choice = +prompt(
        `               MENU
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát
        Lựa chọn của bạn: 
        `);
    switch (choice) {
        case 1:
            let row = +prompt("Nhập số hàng: ");
            if (Number.isInteger(row) && row > 0) {
                let column = +prompt("Nhập số cột: ");
                if (Number.isInteger(column) && column > 0) {
                    for (let i = 0; i < row; i++) {
                        array[i] = [];
                        for (let j = 0; j < column; j++) {
                            array[i][j] = +prompt(`Nhập phần tử hàng ${i} cột ${j}: `);
                        }
                    }
                    console.log(array);
                } else {
                    console.log("Vui lòng nhập số nguyên dương!");
                }
            } else {
                console.log("Vui lòng nhập số nguyên dương!");
            }
            break;
        case 2:
            console.log(array);
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    sum += array[i][j];
                }
            }
            console.log(`Tổng các phần tử trong mảng là ${sum}`);
            break;
        case 4:
            let max = array[0][0];
            let index = [0, 0];
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; i ++) {
                    if (max < array[i][j]) {
                        max = array[i][j];
                        index = [i, j];
                    }
                }
            }
            console.log(`Phần tử lớn nhất là ${max} và nằm ở vị trí ${index}`);
            break;
        case 5:
            let averageRow = +prompt("Nhập hàng cần tính trung bình cộng: ");
            let arraySum = 0;
            if (Number.isInteger(averageRow) && averageRow >= 0 && averageRow < array.length) {
                for (let i = 0; i < array[averageRow].length; i++) {
                    arraySum += array[averageRow][i];
                }
                let average = arraySum / array[averageRow].length;
                console.log(`Trung bình cộng của hàng ${averageRow} là ${average}`);
            }
            break;
        case 6:
            let reverseArray = [];
            for (let i = 0; i < array.length; i++) {
                let row = [];
                for (let j = array[i].length - 1; j >= 0; j--) {
                    row.push(array[i][j]);
                }
                reverseArray.push(row);
            }
            console.log(reverseArray);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            break;
    }
} while (choice != 7);