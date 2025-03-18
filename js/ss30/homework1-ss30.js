let choice;
let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh"
    }
];
let cart = [];

do {
    choice = +prompt(
        `               ỨNG DỤNG MUA HÀNG
        1. Hiển thị sản phẩm theo tên
        2. Chọn sản phẩm để mua (nhập ID sản phẩm)
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá
        4. Tính số tiền cần thanh toán
        5. Thoát
        `);
    switch (choice) {
        case 1:
            displayProductByCategory();
            break;
        case 2:
            buyProductById();
            break;
        case 3:
            filterByPrice();
            break;
        case 4:
            billing();
            break;
        case 5:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại");
            break;
    }
} while (choice != 5);

function displayProductByCategory() {
    let choice = +prompt(`
        1. Món ăn dân tộc Kinh
        2. Món ăn dân tộc Mông
        `);
    if (choice == 1) {
        let result = products.filter(item => item.category == "món ăn dân tộc Kinh");  
        console.log(result);
    } else if (choice == 2) {
        let result = products.filter(item => item.category == "món ăn dân tộc Mông");  
        console.log(result);
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
}

function buyProductById() {
    let checkId = +prompt("Nhập ID sản phẩm muốn mua ");
    if (!Number.isInteger(checkId) || checkId <= 0) {
        console.log("ID không hợp lệ");
        return;
    }
    let checkProduct = products.findIndex(item => item.id == checkId);
    if (checkProduct == -1) {
        console.log("Sản phẩm không có trong cửa hàng");
    } else {
        let productQuantity = +prompt("Nhập số lượng sản phẩm bạn muốn mua");
        if (!Number.isInteger(productQuantity) || productQuantity <= 0) {
            console.log("Số lượng sản phẩm không hợp lệ");
            return;
        }
        if (products[checkProduct].quantity < productQuantity) {
            console.log(`Sản phẩm không đủ, cửa hàng còn ${products[checkProduct].quantity} sản phẩm`);
        } else {
            products[checkProduct].quantity -= productQuantity;
            let index = cart.findIndex(item => item.id == checkId);
            if (index == -1) {
                cart.push({
                    id : checkId,
                    name: products[checkProduct].name,
                    price: products[checkProduct].price,
                    quantity: productQuantity,
                    category: products[checkProduct].quantity
                })
                console.log("Mua thành công");
                console.log(cart);
            } else {
                cart[index].quantity += productQuantity;
                console.log("Mua thành công");
                console.log(cart);
            }
        }
    }
}

function filterByPrice() {
    let choice = +prompt(`
        1. Sắp xếp theo giá tăng dần
        2. Sắp xếp theo giá giảm dần
        `);
    if (choice == 1) {
        let result = products.sort((a, b) => a.price - b.price);
        console.log(result);
    } else if (choice == 2) {
        let result = products.sort((a, b) => b.price - a.price);
        console.log(result);
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
}

function billing() {
    let total = 0;
    cart.forEach(item => {
        console.log(`${item.name}: ${item.quantity} sản phẩm - ${item.price} VNĐ`);
        total += item.quantity * item.price;
    })
    console.log(`Tổng tiền phải thanh toán là ${total} VNĐ`);
}