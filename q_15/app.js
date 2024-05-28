var guestList = ["Seerat", "Sultan", "Safaan", "Subhan"];
var dontcome = guestList[0];
console.log(dontcome, "Not come");
guestList.splice(0, 1, "Mehfooz");
guestList.forEach(function (guest) { return console.log("Salaam ".concat(guest, ",would u like to Dinner with me ?")); });
