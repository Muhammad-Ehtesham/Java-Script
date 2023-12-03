// var userName = prompt("Enter your username:");
//   var phoneNumber = prompt("Enter your phone number:");
//   var email = prompt("Enter your email address:");
//   var password = prompt("Enter your password:");
//   var confirmPassword = prompt("Confirm your password:");

//   if (!userName || !phoneNumber || !email || !password || !confirmPassword) {
//     alert("Please fill in all required fields.");
//   }
//   else{
//     if (password !== confirmPassword) {
//         alert("Passwords do not match. Please try again.");
//       }
//     else{
//         alert("You are successfully registered!");
//     }
//   }  

// --------------------Task 2-----------------------------
const name=[];
name[0]=prompt("Enter string: ");
name[1]=[...name[0]].reverse().join("");
console.log(name)
if(name[0]===name[1]){
    console.log("It's Plaindrom");
}
else{
    console.log("It's not Plaindrom");
}  