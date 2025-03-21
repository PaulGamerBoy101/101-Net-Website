document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");

    // Event listener for login button
    loginButton.addEventListener("click", function () {
        // Redirect to login page
        window.location.href = "login.html";
    });

    // Fetch and display the README content
    fetchReadme();

    // Fetch the latest release for download
    fetchLatestRelease();
});

function fetchReadme() {
    const readmeUrl = "https://raw.githubusercontent.com/PaulGamerBoy101/101-Net/main/README.md";

    fetch(readmeUrl)
        .then(response => response.text())
        .then(data => {
            const converter = new showdown.Converter();
            let html = converter.makeHtml(data);
            html = removeImages(html);  // Remove images from the README content
            document.getElementById("readme-content").innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading README:", error);
            document.getElementById("readme-content").innerHTML = "<p>Error loading README.</p>";
        });
}

function fetchLatestRelease() {
    const apiUrl = "https://api.github.com/repos/PaulGamerBoy101/101-Net/releases/latest";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.assets.length > 0) {
                document.getElementById("download-btn").href = data.assets[0].browser_download_url;
            } else {
                document.getElementById("download-btn").href = "https://github.com/PaulGamerBoy101/101-Net/releases";
            }
        })
        .catch(error => {
            console.error("Error fetching release:", error);
            document.getElementById("download-btn").href = "https://github.com/PaulGamerBoy101/101-Net/releases";
        });
}

// Function to remove image tags from the HTML content
function removeImages(html) {
    // Remove all <img> tags from the HTML string
    return html.replace(/<img[^>]*>/g, '');
}