document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            return;
        }

        alert('Your message has been sent!');
        form.reset(); 
    });
});
