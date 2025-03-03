let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");
let delta = b**2 - 4*a*c;
let x = (-b/(2*a));
let x1 = ((-b + Math.sqrt(delta))/(2*a));
let x2 = ((-b - Math.sqrt(delta))/(2*a));
if (delta < 0) {
    alert("Phương trình vô nghiệm");
} else if (delta === 0) {
    alert("Phương trình có nghiệm kép x1=x2="+x);
} else if (delta > 0) {
    alert("Phương trình có 2 nghiệm phân biệt: x1="+x1+"; x2="+x2);
}