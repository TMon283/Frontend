function textName() {
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    document.getElementsByClassName("text")[0].textContent = "👋Chào bạn, "+name;
    document.getElementById("name").value = "";
}
function show() {
    let name = localStorage.getItem("name");
    document.getElementsByClassName("text")[0].textContent = "👋Chào bạn, "+name;
}
show();
function rename() {
    let name = localStorage.getItem("name");
    document.getElementById("name").value = name;
}