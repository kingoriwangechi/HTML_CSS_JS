document.getElementById("ContactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("output").innerHTML = "<p>Message sent successfully!</p>";
});