function findSum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        let sum = a + b;
        console.log(sum);
        return;
    }
    console.log("dữ liệu không hợp lệ");
}
findSum(2, 4.5);