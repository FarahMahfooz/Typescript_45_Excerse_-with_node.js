// Define a function to create  a car object with optional options...
// Initialize a car object with manufacturer and model
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    //Add aditional options to the car object
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
// Call the function to create a car object
// print the variable all information store correctly in car object
console.log(make_car("Toyota", "Corolla", ["color", "red"]));
console.log(make_car("Ford", "Fiesta", ["colore", "blue"], ["Sunroof", "true"]));
