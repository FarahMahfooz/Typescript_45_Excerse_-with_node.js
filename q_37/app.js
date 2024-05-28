// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I LOVE TYPESCRIPT"; }
    console.log("You Selected ".concat(size, " size shirt with ").concat(printMessage, " prints on shirt."));
}
// Calling a function with by-default values
make_shirt();
// Calling a function now eith Medium size and default value
make_shirt("Medium");
// Calling a function now with small size and also different message
make_shirt("small", "I LOVE JAVASCRIPT");
