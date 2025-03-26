document.addEventListener("DOMContentLoaded", function() {
    const addCategoryBtn = document.getElementById("addCategoryBtn");
    const modal = document.getElementById("categoryFormModal");
    const closeModal = document.querySelector(".close");
    const saveCategoryBtn = document.getElementById("saveCategoryBtn");
    const categoryIdInput = document.getElementById("categoryId");
    const categoryNameInput = document.getElementById("categoryName");
    const categoryIdError = document.getElementById("categoryIdError");
    const categoryNameError = document.getElementById("categoryNameError");
    const categoryTableBody = document.getElementById("categoryTableBody");
    const filterStatus = document.getElementById("filterStatus");

    // Mở form
    addCategoryBtn.onclick = function() {
        modal.style.display = "block";
        categoryIdInput.value = "";
        categoryNameInput.value = "";
        categoryIdError.style.display = "none";
        categoryNameError.style.display = "none";
    };

    // Đóng form
    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    // Validate dữ liệu và lưu vào Local Storage
    saveCategoryBtn.onclick = function() {
        const categoryId = categoryIdInput.value.trim();
        const categoryName = categoryNameInput.value.trim();
        const categoryStatus = document.querySelector('input[name="categoryStatus"]:checked').value;

        let isValid = true;
        let categories = JSON.parse(localStorage.getItem("categories")) || [];

        // Kiểm tra mã danh mục trùng lặp
        if (categories.some(cat => cat.id === categoryId)) {
            categoryIdError.innerText = "Mã danh mục đã tồn tại!";
            categoryIdError.style.display = "block";
            isValid = false;
        } else {
            categoryIdError.style.display = categoryId === "" ? "block" : "none";
        }

        categoryNameError.style.display = categoryName === "" ? "block" : "none";
        if (!isValid) return;

        const category = { id: categoryId, name: categoryName, status: categoryStatus };
        categories.push(category);
        localStorage.setItem("categories", JSON.stringify(categories));

        modal.style.display = "none";
        renderCategories();
    };

    // Hiển thị danh mục
    function renderCategories() {
        categoryTableBody.innerHTML = "";
        let categories = JSON.parse(localStorage.getItem("categories")) || [];
        const filter = filterStatus.value;

        categories.forEach((category, index) => {
            if (filter !== "all" && category.status !== filter) return;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${category.id}</td>
                <td>${category.name}</td>
                <td>${category.status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}</td>
                <td>
                    <button onclick="deleteCategory(${index})" style="background: red;">Xóa</button>
                </td>
            `;
            categoryTableBody.appendChild(row);
        });
    }

    // Xóa danh mục
    window.deleteCategory = function(index) {
        let categories = JSON.parse(localStorage.getItem("categories")) || [];
        categories.splice(index, 1);
        localStorage.setItem("categories", JSON.stringify(categories));
        renderCategories();
    };

    filterStatus.onchange = renderCategories;
    renderCategories();
});
