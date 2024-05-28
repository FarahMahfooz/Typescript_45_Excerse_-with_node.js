let guestList = ["Seerat","Sultan","Safaan","Subhan"];

let dontcome = guestList[0];

console.log(dontcome,"Not come");

guestList.splice(0,1,"Mehfooz");

guestList.forEach(guest => console.log(`Salaam ${guest},would u like to Dinner with me ?`));