document.addEventListener("DOMContentLoaded", function () {
    fetchHistory();
});

function fetchHistory() {
    const historyUrl = "https://your-server.com/history.json"; // Replace with actual URL or server endpoint

    fetch(historyUrl)
        .then(response => response.json())
        .then(data => {
            const historyContent = data.history || []; // assuming the response is an object with a 'history' array
            displayHistory(historyContent);
        })
        .catch(error => {
            console.error("Error loading history:", error);
            document.getElementById("history-content").innerHTML = "<p>Error loading history.</p>";
        });
}

function displayHistory(historyContent) {
    const historyElement = document.getElementById("history-content");

    if (historyContent.length === 0) {
        historyElement.innerHTML = "<p>No history available.</p>";
    } else {
        let html = "<ul>";
        historyContent.forEach(item => {
            html += `<li>${item}</li>`;  // Assuming each history entry is a string, you can adjust if it's more complex
        });
        html += "</ul>";

        historyElement.innerHTML = html;
    }
}