function isStrongPassword(password) {
    let isNumber = false;
    let isUpperCase = false;
    let isLowerCase = false;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= '0' && char <= '9') {
            isNumber = true;
        } else if (char >= 'A' && char <= 'Z') {
            isUpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            isLowerCase = true;
        }
    }
    if (password.length < 8) {
        console.log("Mật khẩu phải có ít nhất 8 kí tự");
        return;
    }
    if (!isNumber) {
        console.log("Mật khẩu phải có ít nhất 1 chữ số");
        return;
    }
    if (!isUpperCase) {
        console.log("Mật khẩu phải có ít nhất 1 chữ in hoa");
        return;
    }
    if (!isLowerCase) {
        console.log("Mật khẩu phải có ít nhất 1 chữ in thường");
        return;
    }
    console.log("true");
    return;
}
let password = prompt("Nhập mật khẩu: ");
isStrongPassword(password);