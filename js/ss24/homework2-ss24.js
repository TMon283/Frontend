let array = [];
let choice;
do {
    choice = +prompt(
        `                   MENU
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ hai trong mảng
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
            let even = [];
            let odd = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 == 0) {
                    even.push(array[i]);
                } else {
                    odd.push(array[i]);
                }
            }
            console.log(`Các phần tử chẵn trong mảng là: ${even}`);
            console.log(`Các phần tử lẻ trong mảng là: ${odd}`);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            let average = sum / array.length;
            console.log(`Trung bình cộng của mảng là ${average}`);
            break;
        case 5:
            let deleteIndex = +prompt("Nhập vị trí cần xóa: ");
            if (deleteIndex >= 0 && deleteIndex < array.length && Number.isInteger(deleteIndex)) {
                array.splice(deleteIndex, 1);
                console.log(array);
            } else {
                console.log("Vị trí không hợp lệ");
            }
            break;
        case 6:
            let max = array[0];
            let maxFake = array[0];
            for (let i = 1; i < array.length; i++) {
                if (max < array[i]) {
                    max = array[i];
                }
            }
            for (let i = 0; i < array.length; i++) {
                if (maxFake < array[i] && array[i] < max) {
                    maxFake = array[i];
                }
            }
            console.log(`Phần tử lớn thứ hai trong mảng là ${maxFake}`);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice != 7);