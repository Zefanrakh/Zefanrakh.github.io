// Stores Shopping Cart Data, Array of Object
arrayShoppingCart = []

// Stores All Food Object, Array of Object
arrayFoods = [{
    nama: "Cheesecake",
    description: "Paket Cheesecake Mousse dengan variant rasa coklat, mangga, dan stroberi.",
    harga: 35000,
    linkFoto: './img/Cheesecake.jpg',
},
{
    nama: "Pudding",
    description: "Paket Pudding dengan variant rasa coklat, cheese-biscuit, dan ubi ungu.",
    harga: 50000,
    linkFoto: './img/Puding.jpg'
}, {
    nama: "Klapertart",
    description: "Klapertart adalah makanan khas Manado, dengan campuran susu, mentega dan kelapa.",
    harga: 20000,
    linkFoto: './img/klappertar.jpg'
}]

// TO DO List
// Function 1: Nambah object foodObject dari arrayFood ke arrayShoppingCart. DONE
function addToCart(namaDOM, quantity = 1) {
    for (let i = 0; i < arrayFoods.length; i++) {
        if (namaDOM === arrayFoods[i].nama) {
            arrayFoods[i].quantity = quantity
            arrayShoppingCart.push(arrayFoods[i])
        }
    }
}

// Function 2: Update shopping cart jika user mengubah data. Misalkan quantitynya dikurangin atau ditambah. DONE
function updateCartPlus(namaDOM) {
    for (const key of arrayShoppingCart) {
        if (namaDOM === key.nama) {
            key.quantity++
        }
    }
    // updateCart()
}

function updateCartMinus(namaDOM) {
    for (const key of arrayShoppingCart) {
        if (namaDOM === key.nama) {
            key.quantity--
        }
    }
    // updateCart()
}

// Function 3: Read arrayShoppingCart untuk mengetahui sudah ada barang apa saja di shopping cart.
function updateCart() {
    // Gunakan Selector ke Class.
    // Generate Cards menggunakan data dari variable {arrayShoppingCart}
}

// Function 4: Hapus data pada arrayShoppingCart jika user klik delete pada item tersebut. DONE
function deleteCart(namaDOM) {
    for (let i = 0; i < arrayShoppingCart.length; i++) {
        if (namaDOM === arrayShoppingCart[i].nama) {
            arrayShoppingCart.splice(i, 1)
        }
    }
}

// // Add To Cart mendapatkan argument dari DOM. Argument: Nama, Quantity
// addToCart('Cheesecake', 5)
// addToCart('Pudding', 5)

// //Update Cart Plus dan Minus menerima argument dari DOM. Argument: Nama
// updateCartPlus('Cheesecake')

// //Delete Cart menerima argument dari DOM. Argument: Nama
// deleteCart('Cheesecake')

// TODO LIST:
// 1. Generate Cards menggunakan data dari {arrayFoods}
// 2. document.getElementsById dll
// 3. docutment.createElement()

function loadContent() {
    let cardBody = document.getElementsByClassName('tampilProduk')[0];

    for (i = 0; i < arrayFoods.length; i++) {
        let divCard = document.createElement('div')
        divCard.innerHTML = `
            <div class="card" style="min-width: 200px; max-width: 200px;">
            <img src="${arrayFoods[i].linkFoto}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${arrayFoods[i].nama}</h5>
            <p class="card-text">${arrayFoods[i].description}</p>
            <h6 class="card-price">Rp. ${arrayFoods[i].harga}</h6>
            <div class="cartQty">
                <form action="">
                <button type="submit" class="btn btn-primary" onclick= "addToCart(value, qty.value)" value="${arrayFoods[i].nama}"  style="padding: 6px; height: fit-content; margin-right: 18px;">Add to Cart</button>
                <input id="qty" type="number" placeholder="qty" style="width: 50px; padding: 5px; height: fit-content" min=0>
                </form>
            </div>
            </div>
            </div>
            `
        cardBody.appendChild(divCard)
    }
}

loadContent()