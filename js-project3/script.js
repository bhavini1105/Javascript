function generattable() {
    const row = parseInt(document.getElementById('row').value);
    const col = parseInt(document.getElementById('col').value);

    if (row <= 0 || col <= 0) {
        if (row < 0 && col < 0) {
            alert("Rows & Cols are Negative");
        } else if (row > 0 && col < 0) {
            alert("Cols are Negative");
        } else if (row < 0 && col > 0) {
            alert("Rows are Negative");
        } else {
            alert("Rows and Columns must be greater than 0");
        }
    } else {
        const tableContainer = document.getElementById('tablecontainer');
        tableContainer.innerHTML = "";  // Clear the previous table
        const table = document.createElement('table');

        for (let i = 1; i <= row; i++) {  // Start row index at 1
            const tr = document.createElement('tr');
            for (let j = 1; j <= col; j++) {  // Start col index at 1
                const td = document.createElement('td');
                td.textContent = i + "x" + j;  // Display rowxcol format
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        tableContainer.appendChild(table);
    }
    
}
