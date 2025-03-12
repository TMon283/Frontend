function isPrime(number) {
    if (Number.isInteger(number)) {
        let check = false;
        for (let i = 2; i < Math.sqrt(number); i++) {
            if (number % i == 0) {
                check = true;
                return;
            }
        }
        if (check || number == 2) {
            console.log("là số nguyên tố");
            return;
        }
        console.log("không là số nguyên tố");
        return;
    }
    console.log("dữ liệu nhập không hợp lệ");
    return;
}
isPrime(7);