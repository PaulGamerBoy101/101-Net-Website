document.addEventListener("DOMContentLoaded", function () {
    // Fetch the latest release from the GitHub API
    fetch('https://api.github.com/repos/PaulGamerBoy101/101-Net/releases/latest')
        .then(response => response.json())
        .then(data => {
            // Get the assets array from the release
            const assets = data.assets;

            // Check if there are any assets
            if (assets.length > 0) {
                const downloadSection = document.getElementById("download-section");

                // Loop through each asset
                assets.forEach(asset => {
                    const downloadLink = document.createElement("a");
                    downloadLink.href = asset.browser_download_url; // URL to the asset
                    downloadLink.textContent = `Download ${asset.name}`; // Asset file name
                    downloadLink.style.display = "block"; // Add spacing for each link
                    downloadSection.appendChild(downloadLink);
                });
            } else {
                console.error("No assets found in the latest release.");
            }
        })
        .catch(error => {
            console.error("Error fetching the latest release:", error);
        });
});
