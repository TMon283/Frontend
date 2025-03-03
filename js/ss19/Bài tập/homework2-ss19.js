let input = prompt("Input: ");
if (input.includes(0) || input.includes(1) || input.includes(2) || input.includes(3) || input.includes(4) || input.includes(5) || input.includes(6) || input.includes(7) || input.includes(8) || input.includes(9)) {
    alert("Không là chữ cái");
} else {
    alert("Kí tự "+input+ " là chữ cái");
} 