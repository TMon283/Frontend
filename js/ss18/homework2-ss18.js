let math = +prompt("Mời bạn nhập điểm môn toán: ");
let literature = +prompt("Mời bạn nhập điểm môn văn: ");
let english = +prompt("Mời bạn nhập điểm môn anh: ");
let average = (math + literature + english)/3;
if (average >= 8) {
    console.log("Giỏi");
} else if (average >= 6.5 && average <= 7.9) {
    console.log("Khá");
} else if (average >= 5 && average <= 6.4) {
    console.log("Trung bình");
} else if (average < 5) {
    console.log("Yếu");
}
