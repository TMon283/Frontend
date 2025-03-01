let year = +prompt("Nhập năm: ");
if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    console.log(year+" là năm nhuận");
} else {
    console.log(year+" không là năm nhuận");
}