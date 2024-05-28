// Describe a Function
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//Calling the function
describe_city("karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
