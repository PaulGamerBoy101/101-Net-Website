document.addEventListener("DOMContentLoaded", function () {
    fetchBookmarks();
});

function fetchBookmarks() {
    const username = localStorage.getItem("username"); // Assume username is stored in localStorage after login
    if (!username) {
        alert("You must be logged in to view bookmarks.");
        return;
    }

    const bookmarksUrl = `https://your-backend-server.com/bookmarks/${username}.json`;

    fetch(bookmarksUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load bookmarks");
            }
            return response.json();
        })
        .then(data => {
            populateBookmarks(data);
        })
        .catch(error => {
            console.error("Error loading bookmarks:", error);
            document.getElementById("bookmarksTable").innerHTML = '<tr><td colspan="2">Error loading bookmarks.</td></tr>';
        });
}

function populateBookmarks(bookmarks) {
    const table = document.getElementById("bookmarksTable");
    table.innerHTML = ""; // Clear existing content

    bookmarks.forEach(bookmark => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${bookmark.name}</td>
            <td><a href="${bookmark.url}" target="_blank">${bookmark.url}</a></td>
        `;
        table.appendChild(row);
    });
}