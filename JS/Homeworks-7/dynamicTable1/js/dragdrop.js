import { AppState } from "./state.js";
import { showNotification } from "./ui.js";
import { updateTableStats } from "./utils.js";

let dragImage = null;

// Create drag image
function createCustomDragImage() {
  const existing = document.querySelector(".drag-ghost");
  if (existing) existing.remove();

  dragImage = document.createElement("div");
  dragImage.className = "drag-ghost";
  dragImage.style.cssText = `
    position: fixed;
    top: -1000px;
    left: -1000px;
    background: #2196F3;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    z-index: 10000;
    pointer-events: none;
    transform: translate(-50%, -50%);
    border: 1px solid white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  `;
  document.body.appendChild(dragImage);
  return dragImage;
}

// Initialize Drag & Drop
export function initializeDragAndDrop() {
  console.log("Initializing drag & drop...");

  const rows = document.querySelectorAll("tbody tr");
  console.log(`Found ${rows.length} rows`);

  rows.forEach((row, index) => {
    // Ensure row has ID
    if (!row.id) {
      row.id = `row-${Date.now()}-${index}`;
    }

    // Set draggable
    row.setAttribute("draggable", "true");
    row.style.cursor = "move";

    // Remove old listeners and add new ones
    const newRow = row.cloneNode(true);
    row.parentNode.replaceChild(newRow, row);

    newRow.addEventListener("dragstart", handleDragStart);
    newRow.addEventListener("dragover", handleDragOver);
    newRow.addEventListener("dragleave", handleDragLeave);
    newRow.addEventListener("drop", handleDrop);
    newRow.addEventListener("dragend", handleDragEnd);
  });
}

// Event Handlers
function handleDragStart(e) {
  console.log("Drag started for:", this.id);

  window.isDraggingActive = true;
  AppState.isDragging = true;

  // Set data transfer
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", this.id);

  // Create drag image
  const img = createCustomDragImage();
  img.textContent = `Moving Row ${this.dataset.row || ""}`;
  img.style.left = `${e.clientX}px`;
  img.style.top = `${e.clientY}px`;

  // Visual feedback
  this.classList.add("dragging");
  this.style.opacity = "0.4";
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";

  // Remove classes from other rows
  const rows = document.querySelectorAll("tr");
  rows.forEach((row) => {
    if (row !== this && !row.classList.contains("dragging")) {
      row.classList.remove("drop-zone", "drop-above", "drop-below");
    }
  });

  // Add visual feedback to current row
  this.classList.add("drop-zone");

  // Determine drop position
  const rect = this.getBoundingClientRect();
  if (e.clientY < rect.top + rect.height / 2) {
    this.classList.add("drop-above");
    this.classList.remove("drop-below");
  } else {
    this.classList.add("drop-below");
    this.classList.remove("drop-above");
  }
}

function handleDragLeave() {
  this.classList.remove("drop-zone", "drop-above", "drop-below");
}

function handleDrop(e) {
  e.preventDefault();
  e.stopPropagation();

  this.classList.remove("drop-zone", "drop-above", "drop-below");

  const draggedRowId = e.dataTransfer.getData("text/plain");
  const draggedRow = document.getElementById(draggedRowId);

  if (draggedRow && draggedRow !== this) {
    console.log(`Moving ${draggedRowId} to position of ${this.id}`);

    // Determine drop position
    const rect = this.getBoundingClientRect();
    const dropAbove = e.clientY < rect.top + rect.height / 2;

    if (dropAbove) {
      this.parentNode.insertBefore(draggedRow, this);
    } else {
      if (this.nextSibling) {
        this.parentNode.insertBefore(draggedRow, this.nextSibling);
      } else {
        this.parentNode.appendChild(draggedRow);
      }
    }

    // Update row numbers and stats
    updateRowNumbers();
    updateTableStats(AppState.tableConfig.rows, AppState.tableConfig.columns);

    // Show notification
    if (typeof showNotification === "function") {
      showNotification("Row moved successfully", "success");
    }
  }
}

function handleDragEnd() {
  console.log("Drag ended");

  window.isDraggingActive = false;
  AppState.isDragging = false;

  // Remove classes
  this.classList.remove("dragging");
  this.style.opacity = "";

  // Remove drag image
  if (dragImage && dragImage.parentNode) {
    dragImage.remove();
    dragImage = null;
  }

  // Remove drop classes from all rows
  document
    .querySelectorAll(".drop-zone, .drop-above, .drop-below")
    .forEach((el) => {
      el.classList.remove("drop-zone", "drop-above", "drop-below");
    });
}

// Update row numbers (called from table.js)
function updateRowNumbers() {
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach((row, index) => {
    const rowNumber = index + 1;
    row.id = `row-${rowNumber}`;
    row.dataset.row = rowNumber;
  });
}

// Disable Drag & Drop
export function disableDragAndDrop() {
  const rows = document.querySelectorAll("tr");
  rows.forEach((row) => {
    row.setAttribute("draggable", "false");
    row.style.cursor = "default";
  });
}
