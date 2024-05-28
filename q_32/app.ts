// Array of Current Users
let current_users = ["usman","ali","areeba","zain","osama"];

//Array of New Users
let new_users = ["Hamza","Ayesha","Ali","sultan","Areeba"];

//loop through new_users to check for username avalibility
new_users.forEach(new_one_user =>{ 
    // Making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

//print Different messages using IF- Eles
if (our_condition){
    console.log(`Sorry ${new_one_user}, is already taken!`)
    
}else{
     console.log(`This username ${new_one_user} is available`)
}
})

