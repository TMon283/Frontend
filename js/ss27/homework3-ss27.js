let result;
let rad, width, height;
let choice;
do {
    choice = +prompt(
        `           MENU
        1. Tính diện tích hình tròn
        2. Tính chu vi hình tròn
        3. Tính diện tích hình chữ nhật
        4. Tính chu vi hình chữ nhật
        5. Thoát
        Lựa chọn của bạn: 
        `);
    switch (choice) {
        case 1:
            inputRad();
            result = cirArea(rad);
            if (result == NaN) {
                console.log("Dữ liệu nhập vào không hợp lệ");
            } else {
                console.log(`Diện tích hình tròn là ${result}`);
            }
            break;
        case 2:
            inputRad();
            result = cirCircum(rad);
            if (result == NaN) {
                console.log("Dữ liệu nhập vào không hợp lệ");
            } else {
                console.log(`Chu vi hình tròn là ${result}`);
            }
            break;
        case 3:
            inputRec();
            result = recArea(width, height);
            if (result == NaN) {
                console.log("Dữ liệu nhập vào không hợp lệ");
            } else {
                console.log(`Diện tích hình chữ nhật là ${result}`);
            }
            break;
        case 4:
            inputRec();
            result = recCircum(width, height);
            if (result == NaN) {
                console.log("Dữ liệu nhập vào không hợp lệ");
            } else {
                console.log(`Chu vi hình chữ nhật là ${result}`);
            }
            break;  
        case 5:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại");
            break;
    }
} while (choice != 5);

function inputRad() {
    rad = +prompt("Mời bạn nhập bán kính hình tròn: ");
    if (Number.isInteger(rad) && rad > 0) {
        return;
    }
}

function inputRec() {
    width = +prompt("Mời bạn nhập chiều rộng hình chữ nhật: ");
    height = +prompt("Mời bạn nhập chiều dài hình chữ nhật: ");
    if (Number.isInteger(width) && width > 0 && Number.isInteger(height) && height > 2) {
        return;
    }
}

function cirArea(rad) {
    return (Math.PI * rad * rad);
}

function cirCircum(rad) {
    return (2 * Math.PI * rad);
}

function recArea(width, height) {
    return width * height;
}

function recCircum(width, height) {
    return (2 * (width + height));
}
