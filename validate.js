function validateForm() {
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    const mobileValid = /^[0-9]{10}$/;
    const gmailValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!mobileValid.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }

    if (!gmailValid.test(email)) {
        alert("Please enter a valid Gmail address ending with @gmail.com");
        return false;
    }

    if (!passwordValid.test(password)) {
        alert("Password must be at least 8 characters and include at least one letter, one number, and one special character");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return false;
    }

    alert("Registered Successful!");
    return true;
}