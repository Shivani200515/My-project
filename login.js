document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username && password) {
        if(password.length >=8) {
      document.getElementById("message").innerText = "Login successful!";
    } else {
           document.getElementById("message").innerText = "Password must be at least 8 characters.";
            }
    } else {
      document.getElementById("message").innerText = "Please enter username and password.";
    }
  });
});
