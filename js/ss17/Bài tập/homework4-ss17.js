let number = Number(prompt("Mời bạn nhập số: "));
if (number > 0) {
    let result = Math.sqrt(number).toFixed(2);
    alert("Căn bậc hai của số bạn vừa nhập là: "+result);
} else {
    alert("Số bạn nhập không có căn bậc 2");
}
