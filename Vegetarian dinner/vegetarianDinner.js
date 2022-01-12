const italyDishes = [
    {
        type: "Stuffed Peppers",
        isVegetarian: true
    },
    {
        type: "Spaghetti Sauce",
        isVegetarian: false
    },
    {
        type: "Cannoli",
        isVegetarian: true
    },
    {
        type: "Lemon Gelato",
        isVegetarian: true
    },
    {
        type: "Authentic Pasta Carbonara",
        isVegetarian: false
    },
    {
        type: "Risotto Balls",
        isVegetarian: true
    },
    {
        type: "Traditional Lasagna",
        isVegetarian: false
    },
    {
        type: "Homemade Manicotti",
        isVegetarian: true
    },
    {
        type: "Almond Chocolate Biscotti",
        isVegetarian: true
    }
]
// const vegetarians = italyDishes.filter(option => option.isVegetarian===true);[  
// ]

// console.log(vegetarians);
//create a list of vegetarian dishes in DOM
// let text = "";

// vegetarians.forEach(listVeg);

// document.getElementById("listVegDishes").innerHTML = text;

// function listVeg(item, index) {
//     text += index + ": " + item + "<br>";
// }

//create a list of vegetarian dishes in DOM

function vegetarianMenu(menu) {
    const menuNode = document.querySelector("#menu"); //leder efter første match på #menu i document(index.html) og tilføjer til menuNode
    const vegetarianOptions = menu.filter(// laver en fitlerliste hvor alle objekter i array'et der har isVegetarian sat til true og laver et nyt objekt med dem, som liste.
        (option) => option.isVegetarian === true //hvis "= true", så kunne det også være string: "true"
    );
    vegetarianOptions.forEach((option) => {//listen bliver så kørt igennem et foreach loop og laver en ny <li> 
        let dish = document.createElement('li');
        dish.textContent = option.type;
        menuNode.appendChild(dish);//tillægger /append 
    });
}
vegetarianMenu(italyDishes);


