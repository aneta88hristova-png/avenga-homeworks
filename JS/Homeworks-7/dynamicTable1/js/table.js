import { AppState, Elements } from "./state.js";
import {
  updateTableStats,
  showError,
  clearError,
  validateTableDimensions,
} from "./utils.js";
import { initializeTableEvents } from "./events.js";

// Table Generation
export function generateTableHTML(rows, columns) {
  let html = `
    <table id="dynamicTable">
      <thead>
        <tr>
          ${Array.from(
            { length: columns },
            (_, i) => `<th>Column ${i + 1}</th>`
          ).join("")}
        </tr>
      </thead>
      <tbody>
  `;

  for (let row = 1; row <= rows; row++) {
    html += `<tr id="row-${row}" data-row="${row}">`;

    for (let col = 1; col <= columns; col++) {
      const cellId = `cell-${row}-${col}`;
      const clickCount = AppState.clickCounts.get(cellId) || 0;

      html += `
        <td id="${cellId}" data-row="${row}" data-col="${col}">
          <div class="cell-content">
            <span class="row-label">Row-${row}</span>
            <span class="col-label">Col-${col}</span>
            ${
              clickCount > 0
                ? `<span class="click-counter">${clickCount}</span>`
                : ""
            }
          </div>
        </td>
      `;
    }

    html += "</tr>";
  }

  html += `
      </tbody>
    </table>
  `;

  return html;
}

// Table Creation
export function createTable() {
  try {
    const rows = parseInt(Elements.rowsInput.value, 10);
    const columns = parseInt(Elements.colsInput.value, 10);

    const validated = validateTableDimensions(rows, columns);
    AppState.tableConfig.rows = validated.rows;
    AppState.tableConfig.columns = validated.columns;

    clearError();

    // Generate and display table
    const tableHTML = generateTableHTML(validated.rows, validated.columns);
    Elements.tableContainer.innerHTML = tableHTML;

    // Update statistics
    updateTableStats(validated.rows, validated.columns);

    // Initialize event listeners
    initializeTableEvents();

    console.log(`Table created: ${validated.rows} x ${validated.columns}`);
    return true;
  } catch (error) {
    showError(error.message);
    return false;
  }
}

// Clear Table
export function clearTable() {
  Elements.tableContainer.innerHTML = `
    <div class="table-placeholder">
      <i class="fas fa-table placeholder-icon"></i>
      <p>Table cleared</p>
      <small>Configure settings above and click "Create Table"</small>
    </div>
  `;

  AppState.clickCounts.clear();
  clearError();
  updateTableStats(0, 0);
  console.log("Table cleared");
}

// Update Row Numbers after Drag & Drop
export function updateRowNumbers() {
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row, index) => {
    const rowNumber = index + 1;
    row.id = `row-${rowNumber}`;
    row.dataset.row = rowNumber;

    const cells = row.querySelectorAll("td");
    cells.forEach((cell, colIndex) => {
      const colNumber = colIndex + 1;
      const cellId = `cell-${rowNumber}-${colNumber}`;

      cell.id = cellId;
      cell.dataset.row = rowNumber;
      cell.dataset.col = colNumber;

      // Update row and column labels
      const rowLabel = cell.querySelector(".row-label");
      const colLabel = cell.querySelector(".col-label");
      if (rowLabel) rowLabel.textContent = `Row-${rowNumber}`;
      if (colLabel) colLabel.textContent = `Col-${colNumber}`;
    });
  });
}
