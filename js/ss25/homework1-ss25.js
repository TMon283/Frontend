function findMin(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("mảng không chứa phần tử");
            return;
        }
        let minElement = arr[0];
        for (let i = 0; i< arr.length; i++) {
            if (arr[0] < minElement) {
                minElement = arr[0];
            }
        }
        console.log(`phần tử nhỏ nhất trong mảng là ${minElement}`);
        return;
    }    
    console.log("giá trị không hợp lệ");
}
findMin([1, 4, 5, 7]);
