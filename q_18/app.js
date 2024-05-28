var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and Print it in orginal order
var countriesToVisit = ["China", "Denmar", "Brazil", "Argentina"];
console.log("Orignal Order:", countriesToVisit);
//Print the Array in Alphabetical order without modify its Actual Array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//Show that array is still in its Orginal Order
console.log("Still on Orginal Order:", countriesToVisit);
//Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show the Array is still in its Orginal Order
console.log("Still in Orignal Order", countriesToVisit);
//We have Changed the Orginal Array Order Now
console.log("Orginal Array Reversed:", countriesToVisit.reverse());
// Print the Array to show that its back to its orginal order
console.log("Back to Orginal Order:", countriesToVisit.reverse());
// Print the array to show that its order has been changed in Alphabetitcal Order now
console.log("sorted in Alphabetical Order:", countriesToVisit.sort());
//We have Changed the Orginal Array Order Now in reverse order again
console.log("Orginal Array Reversed again:", countriesToVisit.reverse());
