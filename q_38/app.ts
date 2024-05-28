// Describe a Function
function  describe_city(city: string,country:string = "pakistan") {
    console.log(`${city} is in ${country}`); 
    
}

//Calling the function
describe_city("karachi");

describe_city("Lahore");

describe_city("Berlin","Germany");