// Creating a Guest List Array
let guestList = ["Seerat","Sultan","Safaan","Subhan"];

// making variable for those guest who cannot come
let dontCome = guestList[0];
 
// print the name of guest who cant come
console.log(dontCome,"Not Come");

// Add or remove guest from  guest list of Array
guestList.splice(0,1,"Mahfooz");

//Message Print for Bigger Table
console.log("Good News ! We Have Found a Bigger Table For Dinner .");

//Adding a new guest at starting index of Array
guestList.unshift("Farah");

// Adding a new guest at ending index of Array
guestList.push("Ayesha");

// Get a  middle index of  our  guest list Array
let middleIndex : number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Osama");

//Print Message of Updated List
console.log("Updated List of our Guests");

//sending a invitation message to our guests one by one ith their name
guestList.forEach(oneguest => console.log(`Salaam ${oneguest},would you like to Dinner with me ?`));

// Inform that only two guest can be invite for dinner
console.log("Unfortunately,the new dinner Table is not arrive on time,so i cant invite you for dinner.");

//using while-loop to remove guests from list untile two guests remain
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest},I can not invite you for Dinner`);
}
//sending a invitations to the last two guests on the list
console.log("Invitations to the last 2  Guests");
guestList.forEach(lasttwo => console.log (`Luckly ${lasttwo},you ara still invited for Dinner.`));

//Removing two guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:",guestList);
