import { AppState, Elements } from "./state.js";
import { createTable, clearTable } from "./table.js";
import { initializeDragAndDrop, disableDragAndDrop } from "./dragdrop.js";
import { initializeTableEvents } from "./events.js";
import { toggleDragAndDrop, toggleHighlight, debounce } from "./utils.js";
import { showNotification } from "./ui.js";

// Setup Event Listeners
export function setupEventListeners() {
  // Debounced table creation
  const debouncedCreateTable = debounce(createTable, 300);

  // Input change listeners
  Elements.rowsInput.addEventListener("input", debouncedCreateTable);
  Elements.colsInput.addEventListener("input", debouncedCreateTable);

  // Button click listeners
  Elements.createBtn.addEventListener("click", createTable);
  Elements.clearBtn.addEventListener("click", clearTable);
  Elements.dragToggleBtn.addEventListener("click", handleDragToggle);
  Elements.highlightToggleBtn.addEventListener("click", handleHighlightToggle);

  // Keyboard shortcuts
  document.addEventListener("keydown", handleKeyboardShortcuts);
}

// Handle Drag Toggle
function handleDragToggle() {
  const isEnabled = toggleDragAndDrop();

  if (isEnabled) {
    initializeDragAndDrop();
    showNotification("Drag & Drop enabled! Drag rows by any cell.", "success");
  } else {
    disableDragAndDrop();
    showNotification("Drag & Drop disabled", "info");
  }
}

// Handle Highlight Toggle
function handleHighlightToggle() {
  const isEnabled = toggleHighlight();

  if (!isEnabled) {
    const highlights = document.querySelectorAll(
      ".highlighted-row, .highlighted-column"
    );
    highlights.forEach((el) => {
      el.classList.remove("highlighted-row", "highlighted-column");
    });
  }

  showNotification(
    isEnabled ? "Row/Column highlighting enabled" : "Highlighting disabled",
    "info"
  );
}

// Keyboard Shortcuts
function handleKeyboardShortcuts(event) {
  // Ctrl/Cmd + Enter to create table
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    createTable();
  }

  // Escape to clear table
  if (event.key === "Escape") {
    if (confirm("Clear the current table?")) {
      clearTable();
    }
  }

  // D to toggle drag & drop
  if (event.key === "d" && event.altKey) {
    event.preventDefault();
    handleDragToggle();
  }

  // H to toggle highlight
  if (event.key === "h" && event.altKey) {
    event.preventDefault();
    handleHighlightToggle();
  }
}

// Initialize Application
export function init() {
  console.log("Initializing app...");

  setupEventListeners();

  // Set initial values
  Elements.rowsInput.value = AppState.tableConfig.rows;
  Elements.colsInput.value = AppState.tableConfig.columns;

  // Create initial table
  createTable();

  // Show welcome message
  setTimeout(() => {
    showNotification("Welcome! Create your first table.", "info");
  }, 1000);
}

// Start the application
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Export for testing
window.TableApp = {
  createTable,
  clearTable,
  toggleDragAndDrop: handleDragToggle,
  toggleHighlight: handleHighlightToggle,
  AppState,
};
