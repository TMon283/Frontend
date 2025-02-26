let math = Number(prompt("Nhập điểm môn Toán:"));
let physics = Number(prompt("Nhập điểm môn Lí:"));
let chemistry = Number(prompt("Nhập điểm môn Hóa:"));
let average = (math + physics + chemistry) / 3;
let result = average.toFixed(2);
alert("Điểm trung bình 3 môn là: "+result);
