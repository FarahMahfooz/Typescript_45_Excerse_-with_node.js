// Define a function with a rest parameter that accept items arugment that representing our sandwich
function makeSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items");
    item.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("Now Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of arugment
makeSandwich("Chicken", "Bread", "Mayo", "Egg");
makeSandwich("Bread", "Potatos", "Cheese");
makeSandwich("Butter", "Cheese", "Chicken", "Chill Souce", "Mayo", "Bread");
