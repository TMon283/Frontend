let result1 = “javascript” + 5; // javascript5: toán tử "+"  thực hiện phép nỗi chuỗi
let result2 = “javascript” - 1; // NaN: toán tử "-" không áp dụng được với chuỗi, không thể chuyển đổi số thành chuỗi --> NaN 
let result3 = “3” + 2; // 32: toán tử "+"  thực hiện phép nỗi chuỗi
let result4 = “5” - 4; // 1: toán tử "-" thực hiện phép trừ, chuỗi "5" được chuyển về số 5
let result5 =  isNaN(“123”); // false: hàm isNaN kiểm tra xem giá trị truyền vào có phải số hay không, và chuỗi "123" có thể được chuyển thành số nên không phải NaN --> false
let result6 = isNaN(“hello”); // true: chuỗi "hello" không thể chuyển đổi thành số --> true
let result7 = Number.isNaN("123"); // false: hàm Number.isNaN kiểm tra xem giá trị truyền vào có phải NaN hay không, chuỗi "123" không phải NaN --> false
let result8 = Number.isNaN(NaN); // true: vì giá trị truyền vào trong hàm là NaN --> true