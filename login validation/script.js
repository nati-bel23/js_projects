var nameError = document.getElementById("name-error");
var phoneNOError = document.getElementById("phoneNO-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function setError(element, message) {
    element.style.color = "red";
    element.textContent = message;
}

function setSuccess(element) {
    element.style.color = "seagreen";
    element.textContent = "✓";
}

function validateName() {
    var name = document.getElementById("contact-name").value.trim();

    if (name.length === 0) {
        setError(nameError, "Name is required");
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        setError(nameError, "Write full name (First Last)");
        return false;
    }

    setSuccess(nameError);
    return true;
}

function validatePhone() {
    var phone = document.getElementById("contact-phone").value.trim();

    if (phone.length === 0) {
        setError(phoneNOError, "Phone no is required");
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        setError(phoneNOError, "Phone no should be 10 digits");
        return false;
    }

    setSuccess(phoneNOError);
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value.trim();

    if (email.length === 0) {
        setError(emailError, "Email is required");
        return false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        setError(emailError, "Please enter a valid email address");
        return false;
    }

    setSuccess(emailError);
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value.trim();

    if (message.length < 30) {
        setError(messageError, "Message must be at least 30 characters");
        return false;
    }

    setSuccess(messageError);
    return true;
}

function validateForm() {
    // Run all validators; if any fail, prevent form submission
    var nameValid = validateName();
    var phoneValid = validatePhone();
    var emailValid = validateEmail();
    var messageValid = validateMessage();

    if (!nameValid || !phoneValid || !emailValid || !messageValid) {
        submitError.style.color = "red";
        submitError.innerHTML = "Please fix the errors above";
        return false;
    }

    submitError.style.color = "green";
    submitError.innerHTML = "Form submitted successfully!";


    setTimeout(function () {
        submitError.innerHTML = "";
    }, 3000);

    return false;
}

