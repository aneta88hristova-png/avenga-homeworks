import { AppState, Elements } from "./state.js";
import { highlightRowAndColumn } from "./ui.js";

// Global drag state
window.isDraggingActive = false;

// Cell Event Handlers
export function handleCellClick(event) {
  if (window.isDraggingActive) {
    event.preventDefault();
    return;
  }

  const cell = event.currentTarget;
  const cellId = cell.id;

  // Update click counter
  const currentCount = AppState.clickCounts.get(cellId) || 0;
  const newCount = currentCount + 1;
  AppState.clickCounts.set(cellId, newCount);

  // Update click counter display
  let counter = cell.querySelector(".click-counter");
  if (!counter) {
    counter = document.createElement("span");
    counter.className = "click-counter";
    cell.appendChild(counter);
  }
  counter.textContent = newCount;

  // Apply highlight if enabled
  if (AppState.isHighlightEnabled) {
    highlightRowAndColumn(cell);
  }
}

export function handleCellDoubleClick(event) {
  if (window.isDraggingActive) {
    event.preventDefault();
    return;
  }

  event.stopPropagation();
  const cell = event.currentTarget;

  // Save original content
  const originalContent = cell.innerHTML;

  // Create input for editing
  const currentText = cell.textContent.replace(/\s*\d+$/, "").trim();
  cell.innerHTML = `
    <div class="cell-edit-container">
      <input type="text" value="${currentText}" class="cell-edit-input" autofocus>
      <div class="edit-buttons">
        <button class="edit-btn save-btn"><i class="fas fa-check"></i></button>
        <button class="edit-btn cancel-btn"><i class="fas fa-times"></i></button>
      </div>
    </div>
  `;

  const input = cell.querySelector(".cell-edit-input");
  input.focus();
  input.select();

  // Save on button click
  cell
    .querySelector(".save-btn")
    .addEventListener("click", () => saveCellEdit(cell, input.value));
  cell
    .querySelector(".cancel-btn")
    .addEventListener("click", () => cancelCellEdit(cell, originalContent));

  // Save on Enter, cancel on Escape
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveCellEdit(cell, input.value);
    if (e.key === "Escape") cancelCellEdit(cell, originalContent);
  });

  // Save on blur
  input.addEventListener("blur", () => {
    setTimeout(() => {
      if (cell.contains(input)) {
        saveCellEdit(cell, input.value);
      }
    }, 100);
  });
}

function saveCellEdit(cell, newValue) {
  const trimmedValue = newValue.trim();
  if (trimmedValue) {
    const clickCount = AppState.clickCounts.get(cell.id) || 0;
    cell.innerHTML = `
      <div class="cell-content">
        ${trimmedValue}
        ${
          clickCount > 0
            ? `<span class="click-counter">${clickCount}</span>`
            : ""
        }
      </div>
    `;
  }
}

function cancelCellEdit(cell, originalContent) {
  cell.innerHTML = originalContent;
}

// Hover Effects
export function handleCellHoverEnter(event) {
  const cell = event.currentTarget;
  if (window.isDraggingActive || cell.classList.contains("dragging")) {
    return;
  }
  cell.style.transform = "scale(1.01)";
  cell.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
}

export function handleCellHoverLeave(event) {
  const cell = event.currentTarget;
  cell.style.transform = "";
  cell.style.boxShadow = "";
}

// Initialize Table Events
export function initializeTableEvents() {
  const cells = document.querySelectorAll("td");
  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
    cell.addEventListener("dblclick", handleCellDoubleClick);
    cell.addEventListener("mouseenter", handleCellHoverEnter);
    cell.addEventListener("mouseleave", handleCellHoverLeave);
  });
}
