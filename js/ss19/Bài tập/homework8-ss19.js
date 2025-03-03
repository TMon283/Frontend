let month = +prompt("Mời bạn nhập tháng: ");
if (Number.isInteger(month)){
    if (month === 1 || month === 2 || month === 3) {
        alert("Mùa xuân");
    } else if (month === 4 || month === 5 || month === 6) {
        alert("Mùa hạ");
    } else if (month === 7 || month === 8 || month === 9) {
        alert("Mùa thu");
    } else if (month === 10 || month === 11 || month === 12) {
        alert("Mùa đông");
    } else {
        alert("Tháng không hợp lệ");
    }
} else {
    alert("Dữ liêu nhập vào không phải số");
}
