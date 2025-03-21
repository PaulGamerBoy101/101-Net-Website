document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform login check
        checkCredentials(username, password);
    });
});

function checkCredentials(username, password) {
    const userlistUrl = "userlist.json"; // Replace with your actual URL

    fetch(userlistUrl)
        .then(response => response.json())
        .then(data => {
            const user = data.find(user => user.username === username && user.password === password);

            if (user) {
                // Redirect to the user's bookmarks and history
                redirectToUserFiles(user);
            } else {
                // Show error message if credentials are incorrect
                document.getElementById("error-message").innerText = "Invalid username or password.";
            }
        })
        .catch(error => {
            console.error("Error checking credentials:", error);
            document.getElementById("error-message").innerText = "Error verifying credentials.";
        });
}

function redirectToUserFiles(user) {
    const bookmarksUrl = `https://your-server.com/bookmarks/${user.username}_bookmarks.json`; // Adjust with actual path
    const historyUrl = `https://your-server.com/history/${user.username}_history.json`; // Adjust with actual path

    // Redirect to the bookmarks page with the user data
    window.location.href = bookmarksUrl;
}