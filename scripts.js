document.querySelector('form').addEventListener('submit', function(event) {
    let valid = true;

    const nameInput = document.getElementById('name');
    const subjectInput = document.getElementById('subject');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!nameInput.checkValidity()) {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    if (!subjectInput.checkValidity()) {
        document.getElementById('subject-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('subject-error').style.display = 'none';
    }

    if (!emailInput.checkValidity()) {
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    if (!messageInput.checkValidity()) {
        document.getElementById('message-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('message-error').style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();
    }
});






