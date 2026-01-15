// Main function to create the table
function createTable() {
  // Get values from input fields
  const rowsInput = document.getElementById("rows");
  const colsInput = document.getElementById("columns");
  const errorDiv = document.getElementById("error");

  // Convert to numbers
  const rows = parseInt(rowsInput.value);
  const cols = parseInt(colsInput.value);

  // Validate input
  if (isNaN(rows) || isNaN(cols)) {
    showError("Please enter valid numbers");
    return;
  }

  if (rows < 1 || rows > 50) {
    showError("Number of rows must be between 1 and 50");
    return;
  }

  if (cols < 1 || cols > 20) {
    showError("Number of columns must be between 1 and 20");
    return;
  }

  // Hide error if validation passes
  errorDiv.style.display = "none";

  // Create the table
  const tableHTML = generateTableHTML(rows, cols);

  // Display table in container
  const container = document.getElementById("tableContainer");
  container.innerHTML = tableHTML;

  // Log info to console
  console.log(`Table created: ${rows} x ${cols}`);
  console.log(`Total cells: ${rows * cols}`);
}

// Function to generate table HTML
function generateTableHTML(rows, cols) {
  let html = "<table>";

  // Create table header
  html += "<thead><tr>";
  for (let col = 1; col <= cols; col++) {
    html += `<th>Column ${col}</th>`;
  }
  html += "</tr></thead>";

  // Create table body
  html += "<tbody>";
  for (let row = 1; row <= rows; row++) {
    html += "<tr>";
    for (let col = 1; col <= cols; col++) {
      html += `<td>Row-${row} Column-${col}</td>`;
    }
    html += "</tr>";
  }
  html += "</tbody>";

  html += "</table>";
  return html;
}

// Alternative version with click detection on cells
function generateInteractiveTable(rows, cols) {
  let html = "<table>";
  html += "<thead><tr><th>#</th>";

  // Column headers
  for (let col = 1; col <= cols; col++) {
    html += `<th>Column ${col}</th>`;
  }
  html += "</tr></thead>";

  html += "<tbody>";
  for (let row = 1; row <= rows; row++) {
    html += `<tr><th>Row ${row}</th>`;
    for (let col = 1; col <= cols; col++) {
      html += `<td onclick="cellClicked(${row}, ${col})">
                                Row-${row}<br>Column-${col}
                             </td>`;
    }
    html += "</tr>";
  }
  html += "</tbody></table>";
  return html;
}

// Function to display errors
function showError(message) {
  const errorDiv = document.getElementById("error");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
}

// Function to clear the table
function clearTable() {
  document.getElementById("tableContainer").innerHTML = "";
  document.getElementById("error").style.display = "none";
  console.log("Table cleared");
}

// Additional function for interactivity (optional)
function cellClicked(row, col) {
  alert(`You clicked: Row-${row}, Column-${col}`);

  // You can also highlight the cell
  const cells = document.querySelectorAll("td");
  cells.forEach((cell) => (cell.style.backgroundColor = ""));

  event.target.style.backgroundColor = "#ffeb3b";
}

// Auto-create table on page load
window.addEventListener("DOMContentLoaded", () => {
  createTable();

  // Add event listeners for auto-update
  document.getElementById("rows").addEventListener("input", createTable);
  document.getElementById("columns").addEventListener("input", createTable);
});
