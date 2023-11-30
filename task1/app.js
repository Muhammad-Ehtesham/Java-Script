var userName = prompt("Enter your username:");
  var phoneNumber = prompt("Enter your phone number:");
  var email = prompt("Enter your email address:");
  var password = prompt("Enter your password:");
  var confirmPassword = prompt("Confirm your password:");

  if (!userName || !phoneNumber || !email || !password || !confirmPassword) {
    alert("Please fill in all required fields.");
  }
  else{
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
      }
    else{
        alert("You are successfully registered!");
    }
  }  
  