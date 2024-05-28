// Creating a Guest List Array
var guestList = ["Seerat", "Sultan", "Safaan", "Subhan"];
// making variable for those guest who cannot come
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "Not Come");
// Add or remove guest from  guest list of Array
guestList.splice(0, 1, "Mahfooz");
//Message Print for Bigger Table
console.log("Good News ! We Have Found a Bigger Table For Dinner .");
//Adding a new guest at starting index of Array
guestList.unshift("Farah");
// Adding a new guest at ending index of Array
guestList.push("Ayesha");
// Get a  middle index of  our  guest list Array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Osama");
//Print Message of Updated List
console.log("Updated List of our Guests");
//sending a invitation message to our guests one by one ith their name
guestList.forEach(function (oneguest) { return console.log("Salaam ".concat(oneguest, ",would you like to Dinner with me ?")); });
