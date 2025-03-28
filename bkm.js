document.getElementById("addRow").addEventListener("click", function() {
    const table = document.getElementById("bookmarkTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const nameCell = newRow.insertCell(0);
    const urlCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);
    
    nameCell.innerHTML = '<input type="text" placeholder="Enter name">';
    urlCell.innerHTML = '<input type="text" placeholder="Enter URL">';
    actionCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

document.getElementById("exportJson").addEventListener("click", function() {
    const table = document.getElementById("bookmarkTable").getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName("tr");
    const bookmarks = [];
    
    for (let row of rows) {
        const name = row.cells[0].getElementsByTagName("input")[0].value;
        const url = row.cells[1].getElementsByTagName("input")[0].value;
        if (name && url) {
            bookmarks.push({ name, url });
        }
    }
    
    const blob = new Blob([JSON.stringify(bookmarks, null, 4)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "bookmarks.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
