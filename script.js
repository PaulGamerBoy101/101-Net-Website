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

                // Clear any existing placeholder message
                downloadSection.innerHTML = "";

                // Loop through each asset
                assets.forEach(asset => {
                    const downloadLink = document.createElement("a");
                    downloadLink.href = asset.browser_download_url; // URL to the asset
                    downloadLink.textContent = `Download ${asset.name}`; // Asset file name
                    downloadLink.className = "asset-link"; // Apply the button style from CSS
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
