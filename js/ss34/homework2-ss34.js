let courses = JSON.parse(localStorage.getItem("courses")) || [
    {
        id: 1,
        content: `Learn Javascript Session 01`,
        dueDate: `2023-04-17`,
        status: `Pending`,
        assignedTo: `Anh Bách`,
    },
    {
        id: 2,
        content: `Learn Javascript Session 2`,
        dueDate: `2023-04-17`,
        status: `Pending`,
        assignedTo: `Lâm th`,
    },
    {
        id: 3,
        content: `Learn CSS Session 1`,
        dueDate: `2023-04-17`,
        status: `Pending`,
        assignedTo: `Hiếu Ci ớt ớt`,
    },
];
function render() {
    let courserHtml = "";
    for (let i = 0; i < courses.length; i++) {
        courserHtml += `
            <tr>
                <td>&nbsp;${courses[i].id}</td>
                <td>${courses[i].content}</td>
                <td>${courses[i].dueDate}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;${courses[i].status}</td>
                <td>${courses[i].assignedTo}</td>
                <td>
                    <button onclick="editTask(${courses[i].id})">Sửa</button>
                    <button onclick="deleteTask(${courses[i].id})">Xóa</button>
                </td>
            </tr>
        `;
    }
    let bodyTable = document.getElementById("bodytable");
    bodyTable.innerHTML = courserHtml;
}
function addTask() {
    let content = document.querySelector(".content").value;
    let dueDate = document.querySelector(".date").value;
    let status = document.querySelector(".choice").value;
    let username = document.querySelector(".name").value;
    if (!content || !dueDate || !status || !username) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }
    const newTask = {
        id: courses.length + 1,
        content: content,
        dueDate: dueDate,
        status: status,
        assignedTo: username,
    };
    courses.push(newTask);
    localStorage.setItem("courses", JSON.stringify(courses));
    render();
    resetForm();
}
function editTask(id) {
    let taskToEdit = courses.find(task => task.id === id);
    if (taskToEdit) {
        document.querySelector(".content").value = taskToEdit.content;
        document.querySelector(".date").value = taskToEdit.dueDate;
        document.querySelector(".choice").value = taskToEdit.status;
        document.querySelector(".name").value = taskToEdit.assignedTo;
        document.querySelector(".btn").onclick = function () {
            taskToEdit.content = document.querySelector(".content").value;
            taskToEdit.dueDate = document.querySelector(".date").value;
            taskToEdit.status = document.querySelector(".choice").value;
            taskToEdit.assignedTo = document.querySelector(".name").value;

            localStorage.setItem("courses", JSON.stringify(courses));
            render();
            resetForm();
        };
    }
}
function deleteTask(id) {
    courses = courses.filter(task => task.id !== id);
    localStorage.setItem("courses", JSON.stringify(courses));
    render();
}
function resetForm() {
    document.querySelector(".content").value = "";
    document.querySelector(".date").value = "";
    document.querySelector(".choice").value = "";
    document.querySelector(".name").value = "";
    document.querySelector(".btn").onclick = addTask; 
}
render();