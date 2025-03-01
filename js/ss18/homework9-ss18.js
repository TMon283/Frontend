let hour = +prompt("Nhập giờ: ");
if (hour < 0 || hour > 23) {
    alert("Giờ bạn nhập không hợp lí");
} else {
    let minute = +prompt("Nhập phút: ");
    if (minute < 0 || minute > 59) {
        alert("Phút bạn nhập không hợp lí");
    } else {
        let second = +prompt("Nhập giây: ");
        if (second < 0 || second > 59) {
            alert("Giây bạn nhập không hợp lí");
        } else if (hour === 0 && hour < 1) {
            alert((hour + 12)+":"+minute+":"+second+" AM");
        } else if (hour >= 1 && hour <= 11) {
            alert(hour+":"+minute+":"+second+" AM");
        } else if (hour === 12 && hour < 13){
            alert(hour+":"+minute+":"+second+" PM");
        } else if (hour >= 13 && hour <= 23) {
            alert((hour - 12)+":"+minute+":"+second+" PM");
        }
    }
}


