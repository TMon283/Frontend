var array = [];
do{
    var choice = +prompt("     MENU\n\n1. Nhập vào mảng\n2. Hiển thị mảng\n3. Thêm phần tử\n4. Sửa phần tử\n5. Xóa phần tử\n6. Thoát\n\n     Lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            let number = +prompt("Nhập số lượng phần tử bạn muốn thêm vào mảng: ");
            for (let i = 0; i < number; i++) {
                array.push(+prompt("Nhập phần tử thứ "+(i+1)+": "));
            }
            console.log(array);
            break;
        case 2:
            console.log(array);
            break;
        case 3:
            let add = +prompt("Nhập phần tử bạn muốn thêm vào mảng: ");
            array.push(add);
            console.log(array);
            break;
        case 4:
            let index = +prompt("Nhập vị trí bạn muốn sửa: ");
            let editElement = +prompt("Nhập giá trị bạn muốn sửa: ");
            array.splice(index, 1, editElement);
            console.log(array);
            break;
        case 5:
            let deleleIndex = +prompt("Nhập vị trí bạn muốn xóa: ");
            array.splice(deleleIndex, 1);
            console.log(array);
            break;
        case 6:
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice != 6);
