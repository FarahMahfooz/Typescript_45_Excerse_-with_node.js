// Making a Function
function make_shirt(size:string = "large", printMessage: string = "I LOVE TYPESCRIPT") {
    console.log(`You Selected ${size} size shirt with ${printMessage} prints on shirt.`)

}

// Calling a function with by-default values
make_shirt();

// Calling a function now eith Medium size and default value
make_shirt("Medium")

// Calling a function now with small size and also different message
make_shirt("small","I LOVE JAVASCRIPT")