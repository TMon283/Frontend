function changeColor(color) {
    document.getElementsByClassName("container")[0].style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
}

function render() {
    let color = localStorage.getItem("backgroundColor");
    document.getElementsByClassName("container")[0].style.backgroundColor = color;    
}
render();