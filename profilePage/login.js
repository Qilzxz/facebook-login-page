function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    const alertmsg = document.getElementById("alert-container");
    var correctEmail = "aqilaliadam@gmail.com";
    var correctPassword = "aqilali123";

    if (email === correctEmail && password === correctPassword) {
        // Redirect to a success page or perform other actions
        window.location.href = "/profilePage/profilePage.html";
        return false; // Prevent form submission
    } else {
        // Display an alert message for incorrect credentials
        alertmsg.style.display = 'block';
        return false; // Prevent form submission
    }
}