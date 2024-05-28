// Array of Current Users
var current_users = ["usman", "ali", "areeba", "zain", "osama"];
//Array of New Users
var new_users = ["Hamza", "Ayesha", "Ali", "sultan", "Areeba"];
//loop through new_users to check for username avalibility
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //print Different messages using IF- Eles
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, ", is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
