var apple = "apple";
var upperCaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["Apple", "Banana", "Orange"];
//Test for equality
console.log("Is apple is equal to apple");
console.log(apple == "apple");
//Test for inequality
console.log("Is apple not equal to apple");
console.log(apple != "apple");
//Tests using lowercase Function
console.log("\n APPLE is equal to apple after converting lower case");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\n APPLE is  not equal to apple after converting lower case");
console.log(upperCaseApple.toLowerCase() !== "apple");
//numerical Tests
console.log("\n Is ten is equal to twenty");
console.log(ten == twenty);
// Not Equal to
console.log("\n Is ten is not equal to twenty");
console.log(ten !== twenty);
//greater than
console.log("\n Is ten is greater than twenty");
console.log(ten > twenty);
//less than
console.log("\n Is twenty is less than ten");
console.log(twenty < ten);
//greater than or equal to
console.log("\n Is ten is greater than or equal to 5");
console.log(ten >= 5);
//less than or equal to
console.log("\n Is twenty is less than or equal to ten");
console.log(twenty <= ten);
//Test using "and","or" operators
//Using &&(and)
console.log("\n twenty is not equal to ten AND twenty is greater then ten");
console.log(twenty != ten && twenty > ten);
console.log("\n twenty is not equal to ten AND twenty is greater then 30");
console.log(twenty != ten && twenty > 30);
// Using || (or)
console.log("\n Is 20 is greater than to 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n Is 20 is greater than to 50 OR 20 is  not equal  to 20");
console.log(20 > 50 || 20 !== 20);
//Test whether an item is include in Array
console.log("\n Is orange include in my Fruits Array");
console.log(fruits.includes("orange"));
console.log("\n  orange is not include in my Fruits Array");
console.log(!fruits.includes("orange"));
