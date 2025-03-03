let selection = +prompt("Bạn muốn đổi từ USD sang VND (1) hay từ VND sang USD (2): ");
if (selection === 1) {
    let input = +prompt("USD: ");
    alert((input * 23000)+" VND");
} else if (selection === 2) {
    let input = +prompt("VND: ");
    alert((input / 23000)+" USD");
} else {
    alert("Lựa chọn không hợp lệ");
}