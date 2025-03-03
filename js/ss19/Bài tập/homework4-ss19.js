let number = +prompt("Mời bạn nhập số: ");
if (Number.isInteger(number)) {
    if (number % 3 === 0 && number % 5 === 0) {
        alert(number+" chia hết cho cả 3 và 5");
    } else {
        alert(number+" không chia hết cho cả 3 và 5");
    }
} else {
    alert("Không phải số");
}
