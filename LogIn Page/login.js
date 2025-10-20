function validateForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const gmailValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!gmailValid.test(email)) {
        alert("Please enter a valid Gmail address ending with @gmail.com");
        return false;
    }

    if (!passwordValid.test(password)) {
        alert("Password must be 8+ characters with combination of letters, numbers & special character");
        return false;
    }

    alert("Login Successful!");
    return true;
}