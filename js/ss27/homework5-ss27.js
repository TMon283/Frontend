function splitArray(arr, n) {
    if (!Array.isArray(arr)) {
        console.log(`Dữ liệu không hợp lệ`)
      return;
    }

    let result = [];
    for (let i = 0; i < arr.length; i += n) {
      result.push(arr.slice(i, i + n));
    }
    console.log(result)
    return result;
}

splitArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
splitArray([1, 2, 3, 4, 5, 6, 7, 8], 4); 
splitArray("abc", 3);