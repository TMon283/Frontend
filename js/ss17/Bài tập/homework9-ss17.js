let a = Number(prompt("Mời bạn nhập giá trị a: "));
let b = Number(prompt("Mời bạn nhập giá trị b: "));
let c = Number(prompt("Mời bạn nhập giá trị c: "));
let delta = b**2-4*a*c;
let x1 = (-b + Math.sqrt(delta)/(2*a));
let x2 = (-b - Math.sqrt(delta)/(2*a));
alert("x1 = "+x1);
alert("x2 = "+x2);