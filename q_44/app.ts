// Define a function with a rest parameter that accept items arugment that representing our sandwich
function makeSandwich(...item : string[]){
    console.log("\nMaking a sandwich with the following items");
    
        item.forEach(singleItem => console.log("-"+ singleItem));

      console.log("Now Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arugment
makeSandwich("Chicken","Bread","Mayo","Egg");

makeSandwich("Bread","Potatos","Cheese");

makeSandwich("Butter","Cheese","Chicken","Chill Souce","Mayo","Bread");