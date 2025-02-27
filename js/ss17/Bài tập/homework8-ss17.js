const date1 = new Date(prompt("Mời bạn nhập ngày (định dạng YYYY-MM-ĐD))"));
const date2 = new Date(prompt("Mời bạn nhập ngày (định dạng YYYY-MM-ĐD))"));
const result = Math.abs(Number(date1) - Number(date2))/86400000;
alert("Độ lệch là "+result+" ngày");