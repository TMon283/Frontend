function changeMode() {
    const toggleButton = document.getElementsByClassName("dark-mode-toggle")[0];
    toggleButton.addEventListener("click", () => {
        const body = document.getElementsByTagName("body")[0];
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("body", isDarkMode ? "dark-mode" : "");
    });
}

function render() {
    const color = localStorage.getItem("body");
    if (color === "dark-mode") {
        document.getElementsByTagName("body")[0].classList.add("dark-mode");
    }
}

render();
changeMode();
