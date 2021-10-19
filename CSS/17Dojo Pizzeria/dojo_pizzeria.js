//***************Defining sandwish

// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);

//****************function to craft a sandwich

// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

//*Create a function called pizzaOven that returns a JavaScript (Pizza) Object */
var pizza = {
    "crust" : ["deep dish", "traditional", "hand tossed"],
    "sauce": "marinara",
    "cheeses" : ["mozzarella","feta"],
    "toppings" : ["pepporni", "sausage", "mushrooms", "olives", "onions"],
    "pizzaOven": function(){
        console.log("crust:    " + pizza.crust);
        console.log("protein:  " + pizza.sauce);
        console.log("cheese:   " + pizza.cheeses);
        console.log("toppings: " + pizza.toppings);
        }   
    }

    
// pizza.pizzaOven();

//*Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"] */
// console.log(pizza["crust"][0])
// console.log(pizza["crust"][1])
// console.log(pizza["cheeses"][0])
// console.log(pizza["toppings"][0])
// console.log(pizza["toppings"][1])

//Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"] */
// console.log(pizza["crust"][2])
// console.log(pizza["sauce"])
// console.log(pizza["cheeses"][0])
// console.log(pizza["cheeses"][1])
// console.log(pizza["toppings"][0])
// console.log(pizza["toppings"][2])
// console.log(pizza["toppings"][3])
// console.log(pizza["toppings"][4])

//Create 2 more pizzas with any toppings we like! */

// console.log(pizza["crust"][2])
// console.log(pizza["toppings"])