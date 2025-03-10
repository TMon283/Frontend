let array = [];
let choice;
do{
    choice = +prompt(
        `               MENU
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và phần tử nhỏ nhất
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của một phần tử
        6. Sắp xếp mảng tăng dần
        7. Thoát chương trình
        Nhập lựa chọn: 
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
            let min = array[0];
            if (array.length > 1) {
                for (let i = 1; i < array.length; i++) {
                    if (max < array[i]) {
                        max = array[i];
                    }
                    if (min > array[i]) {
                        min = array[i];
                    }
                }
            }
            console.log(`Phần tử lớn nhất là ${max}`);
            console.log(`Phần tử nhỏ nhất là ${min}`);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            console.log(`Tổng các phần tử trong mảng là ${sum}`);
            break;
        case 5:
            let count = 0;
            let findNumber = +prompt("Nhập số cần tìm: ");
            for (let i = 0; i < array.length; i++) {
                if (findNumber == array[i]) {
                    count++;
                }
            }
            if (count == 0) {
                console.log(`Số ${findNumber} không xuất hiện trong mảng`);
            } else {
                console.log(`Số ${findNumber} xuất hiện ${count} lần trong mảng`);
            }
            break;
        case 6:
            for(let i = 0; i < array.length; i++){
                for(let j = 0; j < array.length; j++){
                    if(array[j] > array[j + 1]){
                        let temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1]=temp;
                    }
                }
            }
            console.log(array);
            break;
        case 7:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ! Mời bạn chọn lại!");
            break;
    }
} while (choice != 7);