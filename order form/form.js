//Cart Working
let cart = document.getElementsByClassName("item");

let productList = [
    {
        name: "Pileća rolada",
        tag: "pilecarolada",
        price: 10,
        inCart: 0
    },
    {
        name: "Teleća rolada",
        tag: "telećarolada",
        price: 13,
        inCart: 0
    },
    {
        name: "Goveđa rolada",
        tag: "goveđarolada",
        price: 15,
        inCart: 0
    },
    {
        name: "Pileći burger + prilog",
        tag: "pilećiburger",
        price: 10,
        inCart: 0
    },
    {
        name: "BBQ burger + prilog",
        tag: "bbqburger",
        price: 11,
        inCart: 0
    },
    {
        name: "Crispy burger + prilog",
        tag: "crispyburger",
        price: 11,
        inCart: 0
    },
    {
        name: "Cool burger + prilog",
        tag: "coolburger",
        price: 9,
        inCart: 0
    },
    {
        name: "Italian burger + prilog",
        tag: "italianburger",
        price: 11,
        inCart: 0
    },
    {
        name: "Burrito burger + prilog",
        tag: "burittoburger",
        price: 12,
        inCart: 0
    },
    {
        name: "Pileći sendvic + prilog",
        tag: "pilećisendvic",
        price: 5.50,
        inCart: 0
    },
    {
        name: "Sendvić s piletinom i sirom + prilog",
        tag: "sendvićpiletinasir",
        price: 6,
        inCart: 0
    },
    {
        name: "Sendvić s povrćem + prilog",
        tag: "sendvićspovrćem",
        price: 4,
        inCart: 0
    },
    {
        name: "Sendvić šunka-sir + prilog",
        tag: "sendvićšunkasir",
        price: 4,
        inCart: 0
    },
    {
        name: "Sendvić s tunom + prilog",
        tag: "sendvićstunom",
        price: 6,
        inCart: 0
    },
    {
        name: "Sendvić s pršutom + prilog",
        tag: "sendvićspršutom",
        price: 5,
        inCart: 0
    },
    {
        name: "Cheescake(obični)",
        tag: "obični",
        price: 3,
        inCart: 0
    },
    {
        name: "Cheescake(preljev)",
        tag: "preljev",
        price: 3.50,
        inCart: 0
    },
    {
        name: "Čokoladna torta",
        tag: "čokoladnatorta",
        price: 3.50,
        inCart: 0
    },
    {
        name: "Milka torta",
        tag: "milkatorta",
        price: 4,
        inCart: 0
    },
    {
        name: "Sladoled",
        tag: "sladoled",
        price: 2,
        inCart: 0
    },
    {
        name: "Palaćinka (nutela, keks)",
        tag: "palaćinka",
        price: 4,
        inCart: 0
    },
    {
        name:"Majoneza",
        tag:"majoneza",
        price:"",
        inCart:0
    },
    {
        name:"Kečap",
        tag:"kečap",
        price:"",
        inCart: 0
    },
    {
        name:"Tartar",
        tag:"tartar",
        price:"",
        inCart:0
    },
    {
        name:"Kukuruz",
        tag:"kukuruz",
        price:"",
        inCart: 0
    },
    {
        name:"Krastavci",
        tag:"krastavci",
        price:"",
        inCart: 0
    },
    {
        name:"Zelena salata",
        tag:"zelenasalata",
        price:"",
        inCart: 0
    },
    {
        name: "Crna kava",
        tag: "crnakava",
        price: 2,
        inCart: 0
    },
    {
        name: "Bijela kava",
        tag: "bijelakava",
        price: 2.50,
        inCart: 0
    },
    {
        name: "Cappuccino",
        tag: "Cappuccino",
        price: 3,
        inCart: 0
    },
    {
        name: "Čaj",
        tag: "Čaj",
        price: 1.50,
        inCart: 0
    },
    {
        name: "Coca-cola",
        tag: "coca-cola",
        price: 3,
        inCart: 0
    },
    {
        name: "Fanta",
        tag: "fanta",
        price: 3,
        inCart: 0
    },
    {
        name: "Ledeni čaj",
        tag: "ledeničaj",
        price: 2.50,
        inCart: 0
    },
    {
        name: "Mineralna voda",
        tag: "mineralnavoda",
        price: 2,
        inCart: 0
    },
    {
        name: "Jana voda",
        tag: "janavoda",
        price: 2,
        inCart: 0
    },
]

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        UpdateCart(productList[i]);
        totalAmount(productList[i]);
    });
}

function UpdateCart(product) {
    let getCartNumber = localStorage.getItem("CartNumber");
    getCartNumber = parseInt(getCartNumber);

    if (getCartNumber) {
        localStorage.setItem("CartNumber", getCartNumber + 1);
        document.getElementById("items").innerHTML = getCartNumber + 1;
        document.getElementById("item").innerHTML = getCartNumber + 1 + " items added";
    }
    else {
        localStorage.setItem("CartNumber", 1);
        document.getElementById("items").innerHTML = 1;
        document.getElementById("item").innerHTML = 1 + " item added";
    }
    setProduct(product);
    
}

function showCartNumber() {
    let getCartNumber = localStorage.getItem("CartNumber");
    getCartNumber = parseInt(getCartNumber);


    if (getCartNumber) {
        document.getElementById("items").innerHTML = getCartNumber;
        document.getElementById("item").innerHTML = getCartNumber + " items added";
    }
    else {
        document.getElementById("items").innerHTML = 0;
        document.getElementById("item").innerHTML = 0 + " item added";
    }
}
showCartNumber();


function setProduct(product) {

    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems, //items already added in object(cart)
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productInCart", JSON.stringify(cartItems));
    showMessage()
}

function totalAmount(product) {

    let total = localStorage.getItem("Amount");
    total = parseInt(total);

    if (isNaN(total)) {
        total = product.price;
    }
    else {
        total = total + product.price;
    }

    localStorage.setItem("Amount", total);
}


//Displaying Cart on Screen
let displayCart = () => {

    let cartItem = localStorage.getItem("productInCart");
    cartItem = JSON.parse(cartItem);

    let productContainer = document.querySelector(".ProductSpace");

    if (cartItem && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItem).map(items => {

            productContainer.innerHTML += `<tbody class="ProductSpace">
           <tr>
           <td class="names"><span>${items.name}</span></td>
           <td class="quantityy">${items.inCart}</td>
           <td class="costt">KM ${items.price}.00/-</td>
           <td class="totall">KM ${items.price * items.inCart}.00/-</td>
           </tr>
           </tbody>`;
        });

        let cartTotal = localStorage.getItem("Amount");
        cartTotal = parseInt(cartTotal);

        let productNumber = localStorage.getItem("CartNumber");
        productNumber = parseInt(productNumber);

        document.querySelector(".total").innerHTML += `
        <div class="cart_item_title">UKUPNO STAVKI: ${productNumber}</div>
        <div class="cart_item_title">UKUPNO: KM ${cartTotal}.00</div>
        <a class="checkout" href="../confirmorder/checkout.html" target="_self">PROVJERI</a>
        <input type="button" class="clearCart" value="ISPRAZNI KOŠARICU" onclick="window.localStorage.clear();
        window.location.reload();"/>`;
    }
}

displayCart();


function showMessage() {
    let cartItem = localStorage.getItem("productInCart");
    cartItem = JSON.parse(cartItem);

    let message = document.getElementById('message');

    Object.values(cartItem).map(items => {

        message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>x${items.inCart} ${items.name} is added in cart.</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
    });

    setTimeout(() => {
        message.innerHTML = ``;
    }, 3000);
}


//For Button
function arrowOver() {
    document.getElementById("order").innerHTML = "<i class='fas fa-angle-double-right'></i>"
}
function arrowOut() {
    document.getElementById("order").innerHTML = "CHECKOUT"
}





