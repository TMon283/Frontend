function positiveInteger(arr) {
    if (Array.isArray(arr)) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Number.isInteger(arr[i]) && arr[i] > 0) {
                count++;
            }
        }
        if (count == 0) {
            console.log("Không có số nguyên dương trong mảng");
            return;
        }
        console.log(count);
        return;
    }
    return;
}
positiveInteger([1, -5, 1.2, 19]);