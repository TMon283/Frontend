let array = [];
let chan = 0;
let le = 0;
for (let i = 0; i < 5; i++) {
    array.push(+prompt("Nhập phần tử thứ "+(i)+": "));
    if (!Number.isInteger(array[i])) {
        console.log("Dãy không hợp lệ");
        break;
    } else {
        if (array[i] % 2 === 0) {
            chan += +(array[i]);
        } else {
            le += +(array[i]);
        }
    }
}
console.log("Tổng các số chẵn: "+chan);
console.log("Tổng các số lẻ: "+le);


