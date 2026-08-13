// Menu Items objects
document.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        open("")
    }})
const MenuItems=[
    //Breakfast Meals
    {
        name: "Classic Breakfast",
        category: "breakfast",
        price: 8.99,
        image: "assets/image/ClassicBreakfast.jpg",
        description: "The classic breakfast has Bacon Eggs (cooked to your preference) and hash browns and Toast. "
    },
    {
        name: "Omelette",
        category: "breakfast",
        price: 10.99,
        image: "assets/image/Omelette.jpg",
        description: "whisked eggs pan-fried fast in oil or butter, tucked around salty bits of cheese, garden greens, or meat."
    },
    {
        name: "Pancake",
        category: "breakfast",
        price: 7.99,
        image: "/assets/image/Pancake.jpg",
        description: " Classic pancakes are made by mixing flour, sugar, baking powder, and salt with milk, eggs, and melted butter into a batter that is cooked on a hot griddle"
    },
    {
        name: "Waffles",
        category: "breakfast",
        price: 9.99,
        image: "/assets/image/Waffles.jpg",
        description: "a popular baked cake made from a flour, egg, milk, and butter batter cooked between two hinged, patterned metal plates called a waffle iron."
    },
    {
        name: "Grilled Bacon Sandwich",
        category: "breafast",
        price: 5.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: "a grilled Bacon egg and cheese sandwich on toast."
    },
    {
        name: "biscuit and gravy",
        category: "breakfast",
        price: 6.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: "warm, soft, flaky baked dough biscuits smothered in a rich, savory, creamy white pepper sausage gravy"
    },
     //Breakfast Drink
    {
        name: "Hot chocolate",
        category: "Breakfast-Drink",
        price: 4.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: " a heated drink consisting of shaved or melted chocolate or cocoa powder, and heated milk or water"
    },
    {
        name: "Apple cider",
        category: "Breakfast-Drink",
        price: 3.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: "Apple cider is an unfiltered, unsweetened, non-alcoholic beverage made from freshly pressed apples. It has a cloudy, opaque appearance, a dark amber color, and a rich, tangy, full-bodied flavor with natural pulp sediments"
    },
    {
        name: "Coffee",
        category: "Breakfast-Drink",
        price: 10.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: "Coffee is a dark, bitter, and warm drink made from roasted seeds of a tropical plant"
    },
    {
        name: "Tea",
        category: "Breakfast-Drink",
        price: 2.45,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: "Tea is an aromatic hot or cold drink made by soaking cured or fresh leaves of the Camellia sinensis plant in water."
    },
    {
        name: "Milk",
        category: "Breakfast-Drink",
        price: 50,
        image: "../../assets/image/milk.jpg",
        description: "Milk is an opaque white or bluish-white liquid food produced by the mammary glands of female mammals."
    },
    //Breakfast Sweets
    {
        name: "Cinnamon Rolls",
        category: "breakfast-dessert",
        price: 10.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "a sweet, yeast-raised pastry featuring a soft, pillowy dough rolled into a spiral with butter, brown sugar, and ground cinnamon"
    },
    {
        name: "Apple pie slice",
        category: "breakfast-dessert",
        price: 5.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "a baked fruit dessert with sliced apples inside a pastry crust. It tastes sweet and warm from spices like cinnamon"
    },
    //Lunch Meals
    {
        name: "Hamburger",
        category: "Lunch",
        price: 11.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "A hamburger is a classic sandwich featuring a seasoned ground beef patty grilled and served inside a sliced bun with fresh toppings and condiments"
    },
    {
        name: "Chicken and Dumplings",
        category: "Lunch",
        price: 12.99,
        image: "/assets/image/ChickenandDumpling.jpg",
        description: "grilled ground beef patty topped with melted cheese, served inside a sliced bun with various toppings like lettuce, tomato, pickles, onions, and condiments"
    },
    {
        name: "Grilled Cheese",
        category: "Lunch",
        price: 5.99,
        image: "/assets/image/GrilledCheese.jpg",
        description: "bread buttered with cheese melted in between"
    },
    {
        name: "Meat Loaf",
        category: "Lunch",
        price: 10.99,
        image: "/assets/image/Meatloaf.jpg",
        description: "a classic American comfort food consisting of ground meat mixed with binders like breadcrumbs and eggs, shaped into a loaf, and baked or smoked. "
    },
    {
        name: "Classic double Cheeseburger",
        category: "Lunch",
        price: 10.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "grilled ground beef patty topped with melted cheese, served inside a sliced bun with various toppings like lettuce, tomato, pickles, onions, and condiments."
    },
    //Lunch Drinks
    {
        name: "Coca cola",
        category: "Lunch-Drink",
        price: 1.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: " sweet, caramel flavor, bubbly fizz, and dark brown color"
    },
    {
        name: "Root Beer",
        category: "Lunch-Drink",
        price: 10.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "a sweet, dark, and bubbly soft drink made with herbs, spices, and plant roots. It is caffeine-free and non-alcoholic, known for a thick, foamy head and an earthy, wintergreen-like flavor"
    },
    {
        name: "7UP",
        category: "Lunch-Drink",
        price: 10.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "a clear, non-caffeinated, lemon-lime flavored soft drink created in 1929"
    },
    {
        name: "Canadian Ginger Ale",
        category: "Lunch-Drink",
        price: 10.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "a sweet, fizzy, carbonated soft drink with a mild, crisp ginger flavor. It features bright bubbly carbonation, a light sugary sweetness, and subtle hints of citrus or caramel, offering a refreshing and smooth taste with very little of the sharp spice"
    },
    {
        name: "Pepsi",
        category: "Lunch-Drink",
        price: 10.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "a bold, sweet, and fizzy cola. It blends caramel and vanilla with a bright citrus kick from added citric acid"
    },
    //lunch desserts
    {
        name: "MilkShake",
        category: "Lunch-dessert",
        price: 10.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "a cold, sweet drink made by blending milk, ice cream, and flavor syrups like chocolate, vanilla, or strawberry. It has a thick, creamy, and frothy texture"
    },
     {
        name: "Apple pie slice",
        category: "breakfast-dessert",
        price: 5.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "a baked fruit dessert with sliced apples inside a pastry crust. It tastes sweet and warm from spices like cinnamon"
    },
    //Dinner meals
    {
        name: "seared Tomahawk Steak",
        category: "Dinner",
        price: 50.99,
        image: "/assets/images/seared-tomahawk-ribeye.jpg",
        description: " Tomahawk steak is a thick, highly prized ribeye beef steak that features at least five inches of the rib bone left intact, resembling a single-handed axe "
    },
    {
        name: "Pork Ribs",
        category: "Dinner",
        price: 10.99,
        image: "/assets/images/Ribs.jpg",
        description: "Barbecue ribs are tender, slow-cooked cuts of meat usually pork or beef coated in a savory spice rub, smoked or grilled, and finished with a sticky, sweet, and smoky barbecue sauce"
    },{
        name: "Classic Cheeseburger",
        category: "Dinner",
        price: 10.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "grilled ground beef patty topped with melted cheese, served inside a sliced bun with various toppings like lettuce, tomato, pickles, onions, and condiments"
    },
    {
        name: "Hamburger",
        category: "Dinner",
        price: 10.99,
        image: "/assets/images/tavern-burgers-haystack-double.jpg",
        description: "A hamburger is a classic sandwich featuring a seasoned ground beef patty grilled and served inside a sliced bun with fresh toppings and condiments"
    },
    {
        name: "Roast Beef",
        category: "Dinner",
        price: 10.99,
        image: "/assets/image/RoastBeef.jpg",
        description: "mixing ground meat with breadcrumbs, onions, eggs, and seasonings, shaping it into a loaf, and baking it with a sweet tomato glaze."
    },
    {
        name: "Kool Aid",
        category: "Dinner-Drink",
        price: 50.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: "a popular American brand of flavored drink mix owned by Kraft Heinz. It is sold as a colorful powder in small paper packets or tubs. You make the sweet beverage by mixing the powder with water and sugar"
    },
    {
        name: "Canadian Ginger Ale",
        category: "Lunch-Drink",
        price: 10.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: "a sweet, fizzy, carbonated soft drink with a mild, crisp ginger flavor. It features bright bubbly carbonation, a light sugary sweetness, and subtle hints of citrus or caramel, offering a refreshing and smooth taste with very little of the sharp spice"
    },
    {
        name: "Shirley Temple",
        category: "Dinner-Drink",
        price: 10.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: " a sweet, fizzy, non-alcoholic mixed drink made with ginger ale (or lemon-lime soda), a splash of bright red grenadine syrup, and ice."
    },
    {
        name: "Iced Tea",
        category: "Dinner-Drink",
        price: 10.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: "a cold beverage made by brewing tea leaves with hot water and chilling the liquid by pouring it over ice."
    },
    // dinner Desserts
    {
        name: "Rootbeer-float",
        category: "Dinner-Dessert",
        price: 10.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: "a sweet, fizzy dessert drink made by pouring chilled root beer over scoops of vanilla ice cream"
    },
    {
        name: "Pie",
        category: "Dinner-Dessert",
        price: 10.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: "a baked fruit dessert with sliced apples inside a pastry crust. It tastes sweet and warm from spices like cinnamon"
    },
    {
        name: "ice cream",
        category: "Dinner-Dessert",
        price: 10.99,
        image: "images/tavern-burgers-haystack-double.jpg",
        description: " a sweet, frozen food made from milk, cream, sugar, and flavors."
    },
    {
        name: "milkshake",
        category: "Dinner-Dessert",
        price: 10.99,
        image: "",
        description: "a cold, sweet drink made by blending milk, ice cream, and flavor syrups like chocolate, vanilla, or strawberry. It has a thick, creamy, and frothy texture"
    },
]
//the Card creation part hopfully
//referencing the container 
const container = document.getElementsByClassName("menu-item");

for (let i = 0; i < MenuItems.length; i++) {
    let testHtml = `
    <div class="product-card">
        <img src="${MenuItems[i].image}" alt="${MenuItems[i].name}" class="ImgSmall">
        <h4>${MenuItems[i].name}<h4>
        <p>${MenuItems[i].category}<p>
        <p>$ ${MenuItems[i].price}<p>
        <p>${MenuItems[i].description}<p>
    </div>
    `;
    console.log(testHtml)
    document.querySelector("#test").innerHTML += testHtml
}