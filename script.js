document.addEventListener("DOMContentLoaded", function () {
    // Fetch the latest release from the GitHub API
    fetch('https://api.github.com/repos/PaulGamerBoy101/101-Net/releases/latest')
        .then(response => response.json())
        .then(data => {
            // Get the download link for the latest release
            const downloadUrl = data.zipball_url;  // This will give the .zip URL for the latest release

            // Set the download button link dynamically
            document.getElementById("download-btn").href = downloadUrl;
        })
        .catch(error => {
            console.error("Error fetching the latest release:", error);
        });
});
