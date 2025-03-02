let year = +prompt("Nhập số năm kinh nghiệm của nhân viên: ");
if (year < 1 && year > 0) {
    console.log("Mới vào nghề");
} else if (year >= 1 && year <= 3) {
    console.log("Nhân viên có kinh nghiệm");
} else if (year >= 4 && year <= 6) {
    console.log("Chuyên viên");
} else if (year > 6) {
    console.log("Quản lý");
} else {
    console.log("Số năm nhập không hợp lệ");
}
