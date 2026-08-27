// Menu Items objects 
const MenuItems = [ 
    // Breakfast Meals 
    { 
        id: 1, 
        name: "Classic Breakfast", 
        category: "breakfast", 
        price: 8.99, 
        image: "/assets/image/ClassicBreakfast.jpg", 
        description: "The classic breakfast has Bacon Eggs (cooked to your preference) and hash browns and Toast." 
    }, 
    { 
        id: 2, 
        name: "Omelette", 
        category: "breakfast", 
        price: 10.99, 
        image: "/assets/image/Omelette.jpg", 
        description: "whisked eggs pan-fried fast in oil or butter, tucked around salty bits of cheese, garden greens, or meat." 
    }, 
    { 
        id: 3, 
        name: "Pancake", 
        category: "breakfast", 
        price: 7.99, 
        image: "/assets/image/Pancake.jpg", 
        description: "mixed flour, sugar, baking powder, and salt with milk, eggs, and melted butter into a batter that is cooked on a hot griddle" 
    }, 
    { 
        id: 4, 
        name: "Waffles", 
        category: "breakfast", 
        price: 9.99, 
        image: "/assets/image/Waffles.jpg", 
        description: "a baked cake made from a flour, egg, milk, and butter batter cooked between two hinged, patterned metal plates called a waffle iron." 
    }, 
    { 
        id: 5, 
        name: "Grilled Bacon Sandwich", 
        category: "breakfast", 
        price: 5.99, 
        image: "/assets/image/BaconSandwich.jpg", 
        description: "a grilled Bacon egg and cheese sandwich on toast." 
    }, 
    { 
        id: 6, 
        name: "biscuit and gravy", 
        category: "breakfast", 
        price: 6.99, 
        image: "/assets/image/biscuit and gravy.jpg", 
        description: "warm, soft, flaky baked dough biscuits smothered in a rich, savory, creamy white pepper sausage gravy" 
    }, 
 
     
    // Breakfast Sweets 
    { 
        id: 12, 
        name: "Cinnamon Rolls", 
        category: "dessert", 
        price: 10.99, 
        image: "/assets/image/unnamed.jpg", 
        description: "a sweet, yeast-raised pastry featuring a soft, pillowy dough rolled into a spiral with butter, brown sugar, and ground cinnamon" 
    }, 
    { 
        id: 13, 
        name: "Apple pie slice", 
        category: "dessert", 
        price: 5.99, 
        image: "/assets/image/ApplePie.jpg", 
        description: "a baked fruit dessert with sliced apples inside a pastry crust. It tastes sweet and warm from spices like cinnamon" 
    }, 
 
    // Lunch Meals 
    { 
        id: 14, 
        name: "Hamburger", 
        category: "Lunch", 
        price: 11.99, 
        image: "/assets/image/Hamburger.jpg", 
        description: "A hamburger is a classic sandwich featuring a seasoned ground beef patty grilled and served inside a sliced bun with fresh toppings and condiments" 
    }, 
    { 
        id: 15, 
        name: "Chicken and Dumplings", 
        category: "Lunch", 
        price: 12.99, 
        image: "/assets/image/ChickenandDumpling.jpg", 
        description: "grilled ground beef patty topped with melted cheese, served inside a sliced bun with various toppings like lettuce, tomato, pickles, onions, and condiments" 
    }, 
    { 
        id: 16, 
        name: "Grilled Cheese", 
        category: "Lunch", 
        price: 5.99, 
        image: "/assets/image/GrilledCheese.jpg", 
        description: "bread buttered with cheese melted in between" 
    }, 
    { 
        id: 17, 
        name: "Meat Loaf", 
        category: "Lunch", 
        price: 10.99, 
        image: "/assets/image/Meatloaf.jpg", 
        description: "a classic American comfort food consisting of ground meat mixed with binders like breadcrumbs and eggs, shaped into a loaf, and baked or smoked." 
    }, 
    { 
        id: 18, 
        name: "Classic double Cheeseburger", 
        category: "Lunch", 
        price: 10.99, 
        image: "/assets/image/CheeseBurger.jpg", 
        description: "grilled ground beef patty topped with melted cheese, served inside a sliced bun with various toppings like lettuce, tomato, pickles, onions, and condiments." 
    }, 
 
     
     
 
    // Dinner Meals 
    { 
        id: 25, 
        name: "seared Tomahawk Steak", 
        category: "Dinner", 
        price: 50.99, 
        image: "/assets/image/Tomahawk.jpg", 
        description: "Tomahawk steak is a thick, highly prized ribeye beef steak that features at least five inches of the rib bone left intact, resembling a single-handed axe" 
    }, 
    { 
        id: 26, 
        name: "Pork Ribs", 
        category: "Dinner", 
        price: 10.99, 
        image: "/assets/image/Ribs.jpg", 
        description: "Barbecue ribs are tender, slow-cooked cuts of meat usually pork or beef coated in a savory spice rub, smoked or grilled, and finished with a sticky, sweet, and smoky barbecue sauce" 
    }, 
    { 
        id: 27, 
        name: "Classic Cheeseburger", 
        category: "Dinner", 
        price: 10.99, 
        image: "/assets/image/CheeseBurger.jpg", 
        description: "grilled ground beef patty topped with melted cheese, served inside a sliced bun with various toppings like lettuce, tomato, pickles, onions, and condiments" 
    }, 
    { 
        id: 28, 
        name: "Hamburger", 
        category: "Dinner", 
        price: 10.99, 
        image: "/assets/image/Hamburger.jpg", 
        description: "A hamburger is a classic sandwich featuring a seasoned ground beef patty grilled and served inside a sliced bun with fresh toppings and condiments" 
    }, 
    { 
        id: 29, 
        name: "Roast Beef", 
        category: "Dinner", 
        price: 10.99, 
        image: "/assets/image/RoastBeef.jpg", 
        description: "mixing ground meat with breadcrumbs, onions, eggs, and seasonings, shaping it into a loaf, and baking it with a sweet tomato glaze." 
    }, 
 
    // Breakfast Drink 
    { 
        id: 7, 
        name: "Hot chocolate", 
        category: "Drink", 
        price: 4.99, 
        image: "/assets/image/HotChocolateV2.jpg", 
        description: "a heated drink consisting of shaved or melted chocolate or cocoa powder, and heated milk or water" 
    }, 
    { 
        id: 8, 
        name: "Apple cider", 
        category: "Breakfast-Drink", 
        price: 3.99, 
        image: "/assets/image/AppleCider.jpg", 
        description: "Apple cider is an unfiltered, unsweetened, non-alcoholic beverage made from freshly pressed apples. It has a cloudy, opaque appearance, a dark amber color, and a rich, tangy." 
    }, 
    { 
        id: 9, 
        name: "Coffee", 
        category: "Drink", 
        price: 10.99, 
        image: "/assets/image/coffee.jpg", 
        description: "Coffee is a dark, bitter, and warm drink made from roasted seeds of a tropical plant" 
    }, 
    { 
        id: 10, 
        name: "Tea", 
        category: "Drink", 
        price: 2.45, 
        image: "/assets/image/tea.jpg", 
        description: "Tea is an aromatic hot or cold drink made by soaking cured or fresh leaves of the Camellia sinensis plant in water." 
    }, 
    { 
        id: 11, 
        name: "Milk", 
        category: "Drink", 
        price: 50, 
        image: "/assets/image/milk.jpg", 
        description: "Milk is an opaque white or bluish-white liquid food produced by the mammary glands of female mammals." 
    }, 
 
    // Lunch Drinks 
    { 
        id: 19, 
        name: "Coca cola", 
        category: "Drink", 
        price: 1.99, 
        image: "/assets/image/cocaCola.jpg", 
        description: "sweet, caramel flavor, bubbly fizz, and dark brown color" 
    }, 
 
    // { 
    //     id: 20, 
    //     name: "Root Beer", 
    //     category: "Lunch-Drink", 
    //     price: 10.99, 
    //     image: "/assets/image/Rootbeer-Float.jpg", 
    //     description: "a sweet, dark, and bubbly soft drink made with herbs, spices, and plant roots. It is caffeine-free and non-alcoholic, known for a thick, foamy head and an earthy, wintergreen-like flavor" 
    // }, 
 
    { 
        id: 20, 
        name: "7UP", 
        category: "Drink", 
        price: 10.99, 
        image: "/assets/image/7Up.jpg", 
        description: "a clear, non-caffeinated, lemon-lime flavored soft drink created in 1929" 
    }, 
    { 
        id: 21, 
        name: "Canadian Ginger Ale", 
        category: "Drink", 
        price: 10.99, 
        image: "/assets/image/GingerAle.jpg", 
        description: "a sweet, fizzy, carbonated soft drink with a mild, crisp ginger flavor. It features bright bubbly carbonation, a light sugary sweetness, and subtle hints of citrus or caramel." 
    }, 
    { 
        id: 22, 
        name: "Pepsi", 
        category: "Drink", 
        price: 10.99, 
        image: "/assets/image/Pepsi.jpg", 
        description: "a bold, sweet, and fizzy cola. It blends caramel and vanilla with a bright citrus kick from added citric acid" 
    }, 
 
    // Dinner Drinks 
    { 
        id: 30, 
        name: "Kool Aid", 
        category: "Drink", 
        price: 50.99, 
        image: "/assets/image/Koolaid.jpg", 
        description: "a popular American brand of flavored drink mix owned by Kraft Heinz. It is sold as a colorful powder in small paper packets or tubs. You make the sweet beverage by mixing the powder with water and sugar" 
    }, 
    { 
        id: 31, 
        name: "Shirley Temple", 
        category: "Drink", 
        price: 10.99, 
        image: "/assets/image/SherlyTemple.jpg", 
        description: "a sweet, fizzy, non-alcoholic mixed drink made with ginger ale (or lemon-lime soda), a splash of bright red grenadine syrup, and ice." 
    }, 
    { 
        id: 32, 
        name: "Iced Tea", 
        category: "Drink", 
        price: 10.99, 
        image: "/assets/image/IcedTea.jpg", 
        description: "a cold beverage made by brewing tea leaves with hot water and chilling the liquid by pouring it over ice." 
    }, 
 
    // Lunch Desserts 
    { 
        id: 23, 
        name: "MilkShake", 
        category: "dessert", 
        price: 10.99, 
        image: "/assets/image/MilkShake.jpg", 
        description: "a cold, sweet drink made by blending milk, ice cream, and flavor syrups like chocolate, vanilla, or strawberry. It has a thick, creamy, and frothy texture" 
    }, 
    { 
        id: 24, 
        name: "Apple pie slice", 
        category: "dessert", 
        price: 5.99, 
        image: "/assets/image/ApplePie.jpg", 
        description: "a baked fruit dessert with sliced apples inside a pastry crust. It tastes sweet and warm from spices like cinnamon" 
    }, 
 
    // Dinner Desserts 
    { 
        id: 33, 
        name: "Rootbeer-float", 
        category: "Dessert", 
        price: 10.99, 
        image: "/assets/image/Rootbeer-Float.jpg", 
        description: "a sweet, fizzy dessert drink made by pouring chilled root beer over scoops of vanilla ice cream" 
    }, 
    { 
        id: 34, 
        name: "ice cream", 
        category: "Dessert", 
        price: 10.99, 
        image: "/assets/image/unnamed.jpg", 
        description: "a sweet, frozen food made from milk, cream, sugar, and flavors." 
    }, 
]; 


//the Card creation part hopfully 
//referencing the container  
const container = document.getElementsByClassName("menu-item"); 
let shoppingBtn = document.getElementById("shoppingBtn"); 
let closeBtn = document.getElementById("closeBtn"); 
let cartModal = document.getElementById("cartModal"); 
let cartItemsDiv = document.getElementById("cartItems"); 
let cartCountSpan = document.getElementById("cartCount"); 
let subtotalSpan = document.getElementById("subtotal"); 
let taxSpan = document.getElementById("tax"); 
let totalSpan = document.getElementById("total"); 
let checkoutBtn = document.getElementById("checkoutBtn"); 
 
 
 
let taxRate = 0.056; 
let cart = []; 
 
shoppingBtn.addEventListener("click", () => { 
    // console.log("Shopping button clicked, opening cart modal"); 
    cartModal.style.display = "flex"; 
}); 
 
closeBtn.addEventListener("click", () => { 
    // console.log("Close button clicked, closing cart modal"); 
    cartModal.style.display = "none"; 
}); 


function ALLOptions() { 
    
    let test = document.getElementById("test"); 
    let html = ""; 
    for(let i = 0; i < MenuItems.length; i++){ 
            //  if (MenuItems[i].id >= 0){
                  test.innerHTML += ` 
                    <div class="product-card"> 
                     <img src="${MenuItems[i].image}" alt="${MenuItems[i].name}" class="ImgSmall"> 
                        
                        <div class="product-name">${MenuItems[i].name}</div> 
                        <p>${MenuItems[i].category}</p> 
                        
                        <div class="product-description">
                            ${MenuItems[i].description}
                        </div> 
        
                        <div class="product-footer"> 
                            <div class="product-price"> 
                                $${MenuItems[i].price.toFixed(2)} 
                            </div> 
        
                            <button class="add-btn" onclick="addToCart(${MenuItems[i].id})"> 
                                ADD TO CART 
                            </button> 
                        </div> 
                    </div> 
                `; 
            // } 
     }    
};
//     test.innerHTML = html; 
function breakfast(){
    // // console.log("Breakfast function was called");

    let test = document.getElementById("test"); 
    let html = ""; 
    test.innerHTML = ``
    for(let i = 0; i < MenuItems.length; i++){
        if (MenuItems[i].category == "breakfast") {
            test.innerHTML += ` 
                <div class="product-card"> 
                    <img src="${MenuItems[i].image}" alt="${MenuItems[i].name}" class="ImgSmall"> 
                    
                    <div class="product-name">${MenuItems[i].name}</div> 
                    
                    <p>${MenuItems[i].category}</p> 
                    
                    <div class="product-description">
                        ${MenuItems[i].description}
                    </div> 
    
                    <div class="product-footer"> 
                        <div class="product-price"> 
                            $${MenuItems[i].price.toFixed(2)} 
                        </div> 
    
                        <button class="add-btn" onclick="addToCart(${MenuItems[i].id})"> 
                            ADD TO CART 
                        </button> 
                    </div> 
                </div> 
        `};
    };
};
function Lunch(){

    let test = document.getElementById("test"); 
    let html = ""; 
    test.innerHTML = ``
    for(let i = 0; i < MenuItems.length; i++){
        if (MenuItems[i].category == "Lunch") {
            test.innerHTML += ` 
                <div class="product-card"> 
                    <img src="${MenuItems[i].image}" alt="${MenuItems[i].name}" class="ImgSmall"> 
                    
                    <div class="product-name">${MenuItems[i].name}</div> 
                    
                    <p>${MenuItems[i].category}</p> 
                    
                    <div class="product-description">
                        ${MenuItems[i].description}
                    </div> 
    
                    <div class="product-footer"> 
                        <div class="product-price"> 
                            $${MenuItems[i].price.toFixed(2)} 
                        </div> 
    
                        <button class="add-btn" onclick="addToCart(${MenuItems[i].id})"> 
                            ADD TO CART 
                        </button> 
                    </div> 
                </div> 
        `};
    };
};
function Dinner(){

    let test = document.getElementById("test"); 
    let html = ""; 
    test.innerHTML = ``
    for(let i = 0; i < MenuItems.length; i++){
        if (MenuItems[i].category == "Dinner") {
            test.innerHTML += ` 
                <div class="product-card"> 
                    <img src="${MenuItems[i].image}" alt="${MenuItems[i].name}" class="ImgSmall"> 
                    
                    <div class="product-name">${MenuItems[i].name}</div> 
                    
                    <p>${MenuItems[i].category}</p> 
                    
                    <div class="product-description">
                        ${MenuItems[i].description}
                    </div> 
    
                    <div class="product-footer"> 
                        <div class="product-price"> 
                            $${MenuItems[i].price.toFixed(2)} 
                        </div> 
    
                        <button class="add-btn" onclick="addToCart(${MenuItems[i].id})"> 
                            ADD TO CART 
                        </button> 
                    </div> 
                </div> 
        `};
    };
};

function Drinks(){

    let test = document.getElementById("test"); 
    let html = ""; 
    test.innerHTML = ``
    for(let i = 0; i < MenuItems.length; i++){
        if (MenuItems[i].category == "Drink") {
            test.innerHTML += ` 
                <div class="product-card"> 
                    <img src="${MenuItems[i].image}" alt="${MenuItems[i].name}" class="ImgSmall"> 
                    
                    <div class="product-name">${MenuItems[i].name}</div> 
                    
                    <p>${MenuItems[i].category}</p> 
                    
                    <div class="product-description">
                        ${MenuItems[i].description}
                    </div> 
    
                    <div class="product-footer"> 
                        <div class="product-price"> 
                            $${MenuItems[i].price.toFixed(2)} 
                        </div> 
    
                        <button class="add-btn" onclick="addToCart(${MenuItems[i].id})"> 
                            ADD TO CART 
                        </button> 
                    </div> 
                </div> 
        `};
    };
};
function Dessert(){

    let test = document.getElementById("test"); 
    let html = ""; 
    test.innerHTML = ``
    for(let i = 0; i < MenuItems.length; i++){
        if (MenuItems[i].category == "Dessert") {
            test.innerHTML += ` 
                <div class="product-card"> 
                    <img src="${MenuItems[i].image}" alt="${MenuItems[i].name}" class="ImgSmall"> 
                    
                    <div class="product-name">${MenuItems[i].name}</div> 
                    
                    <p>${MenuItems[i].category}</p> 
                    
                    <div class="product-description">
                        ${MenuItems[i].description}
                    </div> 
    
                    <div class="product-footer"> 
                        <div class="product-price"> 
                            $${MenuItems[i].price.toFixed(2)} 
                        </div> 
    
                        <button class="add-btn" onclick="addToCart(${MenuItems[i].id})"> 
                            ADD TO CART 
                        </button> 
                    </div> 
                </div> 
        `};
    };
};
function ALL(){
    // // console.log("Breakfast function was called");

    let test = document.getElementById("test"); 
    let html = ""; 
    test.innerHTML = ``
    for (let i = 0; i < MenuItems.length; i++) { 
        if (MenuItems[i].id){
            html += ` 
                <div class="product-card"> 
                    <img src="${MenuItems[i].image}" alt="${MenuItems[i].name}" class="ImgSmall"> 
                    
                    <div class="product-name">${MenuItems[i].name}</div> 
                    
                    <p>${MenuItems[i].category}</p> 
                    
                    <div class="product-description">
                        ${MenuItems[i].description}
                    </div> 
    
                    <div class="product-footer"> 
                        <div class="product-price"> 
                            $${MenuItems[i].price.toFixed(2)} 
                        </div> 
    
                        <button class="add-btn" onclick="addToCart(${MenuItems[i].id})"> 
                            ADD TO CART 
                        </button> 
                    </div> 
                </div> 
            `; 
        };
    };
};
//id is grabbed by the btn shown above 
function addToCart(id) { 
    // console.log("calling id"); 
 
    //using find is way easier then looping and creating my own find system 
    //.find will look throught first related item and convert it to the actual id 
    let item = MenuItems.find(function (x) { 
        //search my item through menu 
        return x.id === id; 
    }); 

    //make sure item exists before adding it
    if (!item) {
        // console.log("Item not found");
        return;
    }
 
    let foundItem = cart.find(function (x) { 
        //searches my cart  
        return x.id === id; 
    }); 
 
    if (foundItem) { 
        //if item is found it'll be added again or pushed through menu 
        foundItem.quantity++; 
        // console.log("increasing item"); 
    } else { 
        cart.push({ 
            id: item.id, 
            name: item.name, 
            price: item.price, 
            quantity: 1 
        }); 
        // console.log("New item added to cart"); 
    } 
 
    displayCart(); 
} 


function increaseQty(id) { 
    // console.log("increase id called"); 
    
    //since im using find seperate for each function i called them so js know what to increase/decrease 
    let item = cart.find(function (item) { 
        return item.id === id; 
    }); 
 
    if (item) { 
        item.quantity++; 
        // console.log("Quantity increase"); 
    };
 
    displayCart(); 
};


function decreaseQty(id) { 
    // console.log("decreaseQty"); 
 
    let item = cart.find(function (item) { 
        return item.id === id; 
    }); 
 
    if (item) { 
        item.quantity--; 
        // console.log("Quantity decreased"); 
 
        //once item below 0 removeItem that when item actually filters 
        if (item.quantity <= 0) { 
            // console.log("Quantity at 0 remove"); 
            removeItem(id); 
            return; 
        }; 
    };
 
    displayCart(); 
};


//all id is called by my displayItem function's cards 
function removeItem(id) { 
    // console.log("removeItem called");    
 
    //creates new array containing orginal item and filters the one removed  
    cart = cart.filter(function (item) { 
        //instead of === trying to match id, im making it false so it keeps everything except the item im removing 
        return item.id !== id; 
    }); 
 
    // console.log("Cart after removed"); 
    displayCart(); 
};


function displayCart() { 
    cartItemsDiv.innerHTML = ""; 
 
    if (cart.length === 0) { 
        cartItemsDiv.innerHTML = "<p>Your cart is empty</p>"; 
        updateCart(); 
        return; 
    };
 
    cart.forEach(function (item) { 
        let div = document.createElement("div"); 
 
        div.innerHTML = ` 
            <div class="topHeader">
                <strong>${item.name}</strong>
                <span>$${item.price.toFixed(2)}</span>
            </div>
            <button onclick="decreaseQty(${item.id})">-</button>
            <span>${item.quantity}</span>
            <button onclick="increaseQty(${item.id})">+</button>

            <button onclick="removeItem(${item.id})">Remove 🗑</button>
            <div>
                $${(item.price * item.quantity).toFixed(2)}
            </div>
        `; 
        
        cartItemsDiv.appendChild(div); 
    }); 
 
    updateCart(); 
} 


function updateCart() { 
    let count = 0; 
    let subtotal = 0; 
 
 //for each item in array it will excute this code after users checkout
    cart.forEach(function (item) { 
        //this will near the 🛒btn 
        count += item.quantity; 
        
        //this multiplies however much quantities there is 
        subtotal += item.price * item.quantity; 
    }); 
 
    let tax = subtotal * taxRate; 
    let total = subtotal + tax; 
 
    // // console.log(
    //     "Cart totals: " + count + " subtotal:" + subtotal.toFixed(2) + " tax:" +  tax.toFixed(2) + " total:" +total.toFixed(2)); 
    cartCountSpan.textContent = count; 
    subtotalSpan.textContent = "$" + subtotal.toFixed(2); 
    taxSpan.textContent = "$" + tax.toFixed(2); 
    totalSpan.textContent = "$" + total.toFixed(2); 
} 


checkoutBtn.addEventListener("click", function () { 
    // console.log("Checkout button clicked, cart:", cart); 
 
    if (cart.length === 0) { 
        // console.log("Checkout blocked: cart is empty"); 
        alert("Your cart is empty!"); 
    } else { 
        // console.log("Proceeding to checkout with", cart.length, "item(s)"); 
        alert("Checkout coming soon!"); 
    } 
}); 


//display all products when the page loads
// displayProducts();
displayCart();
ALLOptions()

//Filter For menu Items

// const brFt = document.getElementById("Filter-Breakfast");
// if (FilterBreakfast.checked){
//     const BreakfastItems = MenuItems.filter(${category=})
// }




// function themeSwitch(){
//     document.body.classList.toggle("dark-mode")
// }
