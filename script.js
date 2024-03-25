document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const messageDiv = document.getElementById('message');
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // You can add more validation logic here
  
      // For demonstration purposes, simply display the entered data
      const message = `Username: ${username}<br>Email: ${email}<br>Password: ${password}`;
      messageDiv.innerHTML = message;
    });
  });