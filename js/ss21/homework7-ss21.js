let initalMoney = +prompt("Nhập số tiền ban đầu: ");
let interestRate = +prompt("Nhập lãi suất hàng tháng: ");
let month = +prompt("Nhập số tháng gửi tiền: ");
let totalMoney = initalMoney;
let totalInterest = 0;
if (initalMoney > 0 && interestRate > 0 && month > 0 && Number.isInteger(month)) {
    for (let i = 0; i < month; i++) {
        totalMoney += totalMoney * interestRate;
        totalInterest = totalMoney - initalMoney;
    }
    console.log("Số tiền lãi sau "+month+" tháng: "+totalInterest);
    console.log("Số tiền nhận được sau "+month+" tháng: "+totalMoney);
} else {
    console.log("Dữ liệu nhập vào không hợp lệ");
}

