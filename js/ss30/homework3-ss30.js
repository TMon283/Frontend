let carts=[];
let choice;
let phones=[
    {
        id:1,
        name:"Iphone 17 Pro",
        price:60000000,
        quantity:15,
        category:"Apple",
    },
    {
        id:2,
        name:"Vivo X200 Pro",
        price:10000000,
        quantity:20,
        category:"Vivo",
    },
    {
        id:3,
        name:"Oppo Find X8",
        price:4000000,
        quantity:25,
        category:"Oppo",
    },
    {
        id:4,
        name:"Samsung Galaxy S25",
        price:6000000,
        quantity:30,
        category:"Samsung",
    },
    {
        id:5,
        name:"Iphone 16 Pro Max",
        price:4000000,
        quantity:10,
        category:"Apple",
    }
]
do{
    choice=+prompt(`
        MENU MUA SẮM
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng
        3. Tìm kiếm điện thoại theo tên hoặc id
        4. Mua điện thoại
        5. Thanh toán tất cả điện thoại trong giỏ hàng
        6. Sắp xếp điện thoại theo giá
        7. Hiển thị tổng số tiền của các điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hàng 
        9. Thoát chương trình

        `)
    switch (choice) {
        case 1:
            showPhone();
            break;
        case 2:
            addPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyToPhone();
            console.table(phones);
            break;
        case 5:
            calculatePhone();
            break;
        case 6:
            sortPhone();
            break;
        case 7:
            sumPricePhone();
            break;
        case 8:
            sumQuantity();
            break;
        case 9:
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }
}while(choice!=9);

function showPhone(){
    let result;
    let choice =+prompt(`
        HÃNG ĐIỆN THOẠI
        1. Apple
        2. Sam Sung
        3. Oppo
        4. Vivo
        `);
    switch(choice){
        case 1:
            result=phones.filter(item => item.category == "Apple");
            console.table(result);
            break;
        case 2:
            result=phones.filter(item => item.category == "Samsung");
            console.table(result);
            break;
        case 3:
            result=phones.filter(item => item.category == "Oppo");
            console.table(result);
            break;
        case 4:
            result=phones.filter(item => item.category == "Vivo");
            console.table(result);
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }    

}

function addPhone(){
    let newId = phones.length == 0 ?  1 :  phones[phones.length-1].id + 1;
    let name=prompt("Mời bạn nhập tên điện thoại muốn thêm:");
    if(name.length==0){
        console.log("Tên không được để trống");
        return;
    }
    let price=prompt("Mời bạn nhập giá tiền:");
    if(!Number.isInteger(Number(price)) && price <=0){
        console.log("Giá tiền không hợp lệ");
        return;
    }
    let quantity=+prompt("Mời bạn nhập số lượng điện thoại:");
    if(!Number.isInteger(Number(quantity)) && quantity <=0){
        console.log("Số lượng không hợp lệ");
        return;
    }
    let category=prompt("Mời bạn nhập hãng điện thoại:");
    if(category.length==0){
        console.log("Hãng điện thoại không được để trống");
        return;
    }
    phones.push({
        id: newId,
        name: name,
        price: price,
        quantity: quantity,
        category: category
    })
    console.log("Thêm điện thoại mới thành công");
    console.table(phones);
}

function searchPhone(){
    let choice =+prompt(`
        DANH MỤC TÌM KIẾM
        1. Tìm kiếm theo tên
        2. Tìm kiếm theo ID
        `);
    switch(choice){
        case 1:
            searchByName();
            break;
        case 2:
            searchById();
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }    
}

function searchByName(){
    let searchName=prompt("Nhập tên điện thoại cần tìm kiếm:");
    let filterName=phones.filter(item=>item.name.toLowerCase().includes(searchName.toLowerCase()));
    filterName.length == 0 ? console.log("Không có sản phẩm trong cửa hàng") : console.table(filterName);
}

function searchById(){
    let searchId=+prompt("Nhập ID sách cần tìm kiếm:");
    let filterId=phones.filter(item=>item.id==searchId);
    filterId == 0 ? console.log("Không có sản phẩm trong cửa hàng") : console.table(filterId);
}

function buyToPhone(){
    let searchId=+prompt("Nhập ID sản phẩm cần mua:");
    let index=phones.findIndex(item=>item.id==searchId);
    if(index!=-1){
        let quantity=+prompt("Mời bạn nhập số lượng sản phẩm:");
        if(quantity > phones[index].quantity){
            console.log(`Sản phẩm không đủ, còn lại ${phones[index].quantity}`)
        }else{
            phones[index].quantity-=quantity;
            let indexCart = carts.findIndex(item=>item.id==searchId);
            if(indexCart==-1){
                carts.push({
                    id:searchId,
                    name: phones[index].name,
                    price:phones[index].price,
                    quantity:quantity,
                    category:phones[index].category
                })
                console.log("Thêm giỏ hàng thành công");
                console.table(carts);
            }else{
                carts[indexCart].quantity+=quantity;
                console.log("Thêm giỏ hàng thành công");
                console.table(carts);
            }
        }
    }else{
        console.log("Không có sẵn phẩm trong cửa hàng")
    }
}

function calculatePhone() {
    if (carts.length === 0) {
        console.log("Giỏ hàng của bạn đang trống.");
    } else {
        let total = carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log(`Tổng số tiền cần thanh toán: ${total.toLocaleString()} VNĐ`);
        let confirmPayment = confirm("Bạn có muốn thanh toán hay không?");
        if (confirmPayment) {
            carts.splice(0, carts.length);
            console.log("Thanh toán giỏ hàng thành công!");
        }
        console.table(carts);
    }
}

function sortPhone(){
    let choice=prompt(`
        DANH MỤC SẮP XẾP
        a.Tăng dần
        b.Giảm dần
        `)
    switch (choice) {
        case "a":
            phones.sort((a, b) => a.price - b.price);
            console.log(phones);
            break;
        case "b":
            phones.sort((a, b) => b.price - a.price);
            console.log(phones);
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Mời bạn nhập lại.");
            break;
    }
}

function sumPricePhone(){
    let sumPrice = phones.reduce((sum, phones) => sum + phones.price * phones.quantity ,0);
    console.log(`Tổng số tiền của các điện thoại trong kho là: ${sumPrice.toLocaleString()} VND`);
}

function sumQuantity(){
    let quantities = {
        Samsung: 0,
        Vivo: 0,
        Apple: 0,
        Oppo: 0
    };
    for (let i = 0; i < phones.length; i++) {
        if (phones[i].category === "Samsung") {
            quantities.Samsung += phones[i].quantity;
        }
        if (phones[i].category === "Vivo") {
            quantities.Vivo += phones[i].quantity;
        }
        if (phones[i].category === "Apple") {
            quantities.Apple += phones[i].quantity;
        }
        if (phones[i].category === "Oppo") {
            quantities.Oppo += phones[i].quantity;
        }
    }
    console.log(quantities);
}