let number = Number(prompt("Mời bạn nhập số: "));
let result =  Math.sqrt(number);
Number.isInteger(result) ? alert("Số "+number+" là số chính phương") : alert("Số "+number+" không là số chính phương")