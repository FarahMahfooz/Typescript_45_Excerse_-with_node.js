// Define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "THE Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Harry Poter", "Iqbal", "Usman"];
// Making a copy of Orignal array through .slice()function
var copy_magician_name = magician_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_name);
//Show both array Original and copied
// Original
console.log("Original Array\n");
show_magicians(magician_names);
// Copied
console.log("\n Copied Array\n");
show_magicians(copy_great_magicians);
