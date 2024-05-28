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
// Call make_great function to modify magicians names
var great_magicians = make_great(magician_names);
// Call show_magicians that show modified list of magicians
show_magicians(great_magicians);
