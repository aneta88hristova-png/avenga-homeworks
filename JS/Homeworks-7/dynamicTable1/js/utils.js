import { AppState, Elements } from "./state.js";

// Validation Functions
export function validateTableDimensions(rows, columns) {
  rows = parseInt(rows);
  columns = parseInt(columns);

  if (isNaN(rows) || isNaN(columns)) {
    throw new Error("Please enter valid numbers for both rows and columns");
  }

  if (rows < 1 || rows > 50) {
    throw new Error("Number of rows must be between 1 and 50");
  }

  if (columns < 1 || columns > 20) {
    throw new Error("Number of columns must be between 1 and 20");
  }

  return { rows, columns };
}

// Error Handling
export function showError(message) {
  if (Elements.errorDiv) {
    Elements.errorDiv.textContent = message;
    Elements.errorDiv.style.display = "block";
  }
}

export function clearError() {
  if (Elements.errorDiv) {
    Elements.errorDiv.style.display = "none";
  }
}

// Statistics
export function updateTableStats(rows, columns) {
  if (Elements.rowCount) Elements.rowCount.textContent = rows || 0;
  if (Elements.colCount) Elements.colCount.textContent = columns || 0;
  if (Elements.cellCount)
    Elements.cellCount.textContent = (rows || 0) * (columns || 0);
  if (Elements.dragStatus) {
    Elements.dragStatus.textContent = AppState.isDragEnabled
      ? "Enabled"
      : "Disabled";
  }
}

// Feature Toggles
export function toggleDragAndDrop() {
  AppState.isDragEnabled = !AppState.isDragEnabled;

  if (Elements.dragText) {
    Elements.dragText.textContent = AppState.isDragEnabled
      ? "Disable Drag & Drop"
      : "Enable Drag & Drop";
  }

  if (Elements.dragToggleBtn) {
    Elements.dragToggleBtn.classList.toggle("active", AppState.isDragEnabled);
  }

  if (Elements.dragStatus) {
    Elements.dragStatus.textContent = AppState.isDragEnabled
      ? "Enabled"
      : "Disabled";
  }

  return AppState.isDragEnabled;
}

export function toggleHighlight() {
  AppState.isHighlightEnabled = !AppState.isHighlightEnabled;

  if (Elements.highlightText) {
    Elements.highlightText.textContent = AppState.isHighlightEnabled
      ? "Disable Highlight"
      : "Enable Highlight";
  }

  if (Elements.highlightToggleBtn) {
    Elements.highlightToggleBtn.classList.toggle(
      "active",
      AppState.isHighlightEnabled
    );
  }

  return AppState.isHighlightEnabled;
}

// Helper Functions
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
