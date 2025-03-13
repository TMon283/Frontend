let numberA;
let numberB;
let result;
let choice;
do {
    choice = +prompt(
        `               CALCULATOR
        1. Cộng hai số
        2. Trừ hai số
        3. Nhân hai số
        4. Chia hai số
        5. Thoát
        Lựa chọn của bạn:
        `);
    switch (choice) {
        case 1:
            inputNumber();
            result = findSum(numberA, numberB);
            console.log(result);
            break;
        case 2:
            inputNumber();
            result = findSub(numberA, numberB);
            console.log(result);
            break;
        case 3:
            inputNumber();
            result = findMulti(numberA, numberB);
            console.log(result);
            break;
        case 4:
            inputNumber();
            result = findDivision(numberA, numberB);
            console.log(result);
            break;
        case 5:
            console.log("Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại");
            break;
    }
} while (choice != 5);

function inputNumber() {
    numberA = +prompt("Mời bạn nhập số thứ nhất ");
    numberB = +prompt("Mời bạn nhập số thứ hai ");
}

function findSum(a, b) {
    return a + b;
}

function findSub(a, b) {
    return a - b;
}

function findMulti(a, b) {
    return a * b;
}

function findDivision(a, b) {
    if (a != 0) {
        return a / b;
    }
    console.log("Số bị chia phải khác không");
}