function checkEmail(email){
    for(let i =0;i<email.length;i++){
        if(!email.includes("@") && !email.endsWith(".com"||!email.endsWith(".vn"))){
            console.log("Email không hợp lệ. Vui lòng nhập lại.");
            return;
            
        }
    }
    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại.");
    } else {
        users.push(email);
        console.log("Đăng ký thành công.");
        console.log(users);
    }
}
let users = [];
let email = prompt("Nhập email: ");
checkEmail(email);

