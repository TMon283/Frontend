let str = ``;
let choice;
do {
    choice = +prompt(
        `                   MENU
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài của chuỗi
        4. Đếm số lần xuất hiện của kí tự trong chuỗi
        5. Kiểm tra chuỗi có phải chuỗi đối xứng không
        6. Chuyển đổi chuỗi thành chữ in hoa các kí tự đầu tiên của từ
        7. Thoát
        Lựa chọn của bạn: 
        `);
    switch (choice) {
        case 1:
            str = prompt(`Mời bạn nhập chuỗi `);
            console.log(str);
            break;
        case 2: 
            console.log(str);
            break;
        case 3:
            console.log(`Độ dài của chuỗi là ${str.length}`);
            break;
        case 4:
            let count = 0;
            str.split('');
            let findIndex = prompt('Mời bạn nhập kí tự muốn tìm trong chuỗi: ');
            for (let i = 0; i < str.length; i++) {
                if (findIndex == str[i]) {
                    count++;
                }
            }
            if (count != 0) {
                console.log(`Kí tự ${findIndex} xuất hiện ${count} lần tỏng chuỗi`);
            } else {
                console.log(`Kí tự ${findIndex} không xuất hiện trong chuỗi`); 
            }
            break;
        case 5:
            str.split('');
            let isSymmetric = true;
            for (let i = 0; i < str.length / 2; i++) {
                if (str[i] != str[str.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            if (isSymmetric) {
                console.log("Chuỗi đối xứng");
            } else {
                console.log("Chuỗi không đối xứng");
            }
            break
        case 6: 
            let arr1 = str.split(" ");
            console.log(arr1);
            for (let i = 0; i < arr1.length; i++) {
                arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1); 
            }
            str = arr1.join(" ");
            console.log(str);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            break;
    }
} while (choice != 7);