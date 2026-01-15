import { AppState } from "./state.js";

// Notification System
export function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((n) => n.remove());

  // Create notification
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;

  const icons = {
    info: "fas fa-info-circle",
    success: "fas fa-check-circle",
    warning: "fas fa-exclamation-triangle",
    error: "fas fa-times-circle",
  };

  notification.innerHTML = `
    <i class="${icons[type] || icons.info}"></i>
    <span>${message}</span>
    <button class="notification-close"><i class="fas fa-times"></i></button>
  `;

  document.body.appendChild(notification);

  // Auto-remove
  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => notification.remove(), 300);
  }, 4000);

  // Close button
  notification
    .querySelector(".notification-close")
    .addEventListener("click", () => {
      notification.remove();
    });
}

// Highlight Feature
export function highlightRowAndColumn(cell) {
  // Remove previous highlights
  const previousHighlights = document.querySelectorAll(
    ".highlighted-row, .highlighted-column"
  );
  previousHighlights.forEach((el) => {
    el.classList.remove("highlighted-row", "highlighted-column");
  });

  const row = cell.parentElement;
  const columnIndex = Array.from(row.children).indexOf(cell);

  // Highlight row
  row.classList.add("highlighted-row");

  // Highlight column
  const table = document.getElementById("dynamicTable");
  if (table) {
    const rows = table.querySelectorAll("tr");
    rows.forEach((r) => {
      const columnCell = r.children[columnIndex];
      if (columnCell) {
        columnCell.classList.add("highlighted-column");
      }
    });
  }
}
