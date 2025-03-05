let day = +prompt("Nhập ngày: ");
let month = +prompt("Nhập tháng: ");
if (!Number.isInteger(day) || !Number.isInteger(month)) {
    console.log("Dữ liệu nhập vào không hợp lệ");
} else if (month == 3 && day >= 21 && day <= 31 || month == 4 && day >= 1 && day <= 20) {
    console.log("Bạch Dương");
} else if (month == 4 && day >= 21 && day <= 30 || month == 5 && day >= 1 && day <= 20) {
    console.log("Kim Ngưu");
} else if (month == 5 && day >= 21 && day <= 31 || month == 6 && day >= 1 && day <= 21) {
    console.log("Song Tử");
} else if (month == 6 && day >= 22 && day <= 30 || month == 7 && day >= 1 && day <= 22) {
    console.log("Cự Giải");
} else if (month == 7 && day >= 23 && day <= 31 || month == 8 && day >= 1 && day <= 22) {
    console.log("Sư Tử");
} else if (month == 8 && day >= 23 && day <= 31 || month == 9 && day >= 1 && day <= 22) {
    console.log("Xử Nữ");
} else if (month == 9 && day >= 23 && day <= 30 || month == 10 && day >= 1 && day <= 23) {
    console.log("Thiên Bình");
} else if (month == 10 && day >= 24 && day <= 31 || month == 11 && day >= 1 && day <= 22) {
    console.log("Bọ Cạp");
} else if (month == 11 && day >= 23 && day <= 30 || month == 12 && day >= 1 && day <= 21) {
    console.log("Nhân Mã");
} else if (month == 12 && day >= 22 && day <= 31 || month == 1 && day >= 1 && day <= 19) {
    console.log("Ma Kết");
} else if (month == 1 && day >= 20 && day <= 31 || month == 2 && day >= 1 && day <= 18) {
    console.log("Bảo Bình");
} else if (month == 2 && day >= 19 && day <= 29 || month == 3 && day >= 1 && day <= 20) {
    console.log("Song Ngư");
} else {
    console.log("Ngày tháng nhập vào không hợp lệ");
}