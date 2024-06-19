document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (username && email && password) {
      var message = "Sign up successful!\n";
      message += "Username: " + username + "\n";
      message += "Email: " + email + "\n";
      message += "Password: " + password;
      document.getElementById("message").innerText = message;
    } else {
        document.getElementById("message").innerText = "Password must be at least 8 characters.";
    }
} else {
      document.getElementById("message").innerText = "Please fill out all fields.";
    }
  });
  
