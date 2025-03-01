let math = +prompt("Mời bạn nhập điểm môn toán: ");
let physic = +prompt("Mời bạn nhập điểm môn lí: ");
let chemistry = +prompt("Mời bạn nhập điểm môn hóa: ");
let average = (math + physic + chemistry)/3;
if (average >= 8) {
    console.log("Giỏi");
} else if (average >= 6.5 && average <= 7.9) {
    console.log("Khá");
} else if (average >= 5 && average <= 6.4) {
    console.log("Trung bình");
} else if (average < 5) {
    console.log("Yếu");
}