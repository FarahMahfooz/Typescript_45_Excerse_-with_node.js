// Define a function to create  a car object with optional options...
 // Initialize a car object with manufacturer and model
function make_car(manufacturer: string, model: string,...options:[string,any][]):object{
    let car = {manufacturer,model};
        //Add aditional options to the car object

    options.forEach( ([key,value])=> car[key]= value);
    return car;
}

// Call the function to create a car object
// print the variable all information store correctly in car object

console.log(make_car("Toyota","Corolla",["color","red"],));
console.log(make_car("Ford","Fiesta",["colore","blue"],["Sunroof","true"]));