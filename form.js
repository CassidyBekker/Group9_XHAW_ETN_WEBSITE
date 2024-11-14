document.addEventListener("DOMContentLoaded", () => {
    // Add event listener to the submit button
    document.querySelector('.submit').addEventListener('click', submitForm);
});

function submitForm() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const message = document.getElementById("message").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // ERROR HANDLING: Check if any field is empty
    if (!name || !email || !phone || !message || !surname) {
        alert("Please fill in all fields before submitting.");
        return; // Stop form submission if any field is empty
    }

    // Prepare mailto link
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
        `Name: ${name}\nSurname: ${surname}\nMessage: ${message}\nEmail: ${email}\nPhone: ${phone}`
    );
    const mailtoLink = `mailto:EmpoweringTheNation@gmail.com?subject=${subject}&body=${body}`;

    // Trigger the mailto link
    window.location.href = mailtoLink;

     // Message alert for successful submission
     alert("Submission Successful! Thank you for contacting us. We'll be in touch shortly.");

    // Clear form fields after submission
    clearInputs();
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("message").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}
