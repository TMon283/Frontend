let a = +prompt("Nhập cạnh a: ");
let b = +prompt("Nhập cạnh b: ");
let c = +prompt("Nhập cạnh c: ");
if (a === b && a === c) {
    alert("Tam giác đều");
} else if (a === b && a !== c || a === c && a !== b || b === c && b !== a) {
    alert("Tam giác cân");
} else if (a**2 + b**2 === c**2 || a**2 + c**2 === b**2 || b**2 + c**2 === a**2) {
    alert("Tam giác vuông");
} else {
    alert("Tam giác thường");
}