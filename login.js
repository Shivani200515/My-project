document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username && password) {
      document.getElementById("message").innerText = "Login successful!";
    } else {
      document.getElementById("message").innerText = "Please enter username and password.";
    }
  });
  