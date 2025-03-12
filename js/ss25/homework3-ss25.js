function findEven(arr) {
    if (Array.isArray(arr)) {
        let even = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                even.push(arr[i]);
            }
        }
        if (even.length == 0) {
            console.log("mảng không chứa số chẵn");
            return;
        }
        console.log(even);
        return;
    }
    console.log("dữ liệu không hợp lệ");
    return;
}
findEven([1, 3, 2, 6]);