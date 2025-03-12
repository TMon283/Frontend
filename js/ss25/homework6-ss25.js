function isPalindrome(string) {
    string.split('');
    let check = true;
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            check = false;
            break;
        }     
    }
    if (!check) {
        console.log("không phải chuỗi đối xứng");
        return;
    }
    console.log("là chuỗi đối xứng");
    return;
}
let string = prompt('Mời bạn nhập chuỗi để kiểm tra');
isPalindrome(string);

            