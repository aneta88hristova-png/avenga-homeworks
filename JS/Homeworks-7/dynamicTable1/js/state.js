// Application State Management
export const AppState = {
  isDragEnabled: false,
  isHighlightEnabled: false,
  clickCounts: new Map(),
  tableConfig: {
    rows: 5,
    columns: 4,
  },
  isDragging: false,
};

// DOM Elements
export const Elements = {
  rowsInput: document.getElementById("rows"),
  colsInput: document.getElementById("columns"),
  errorDiv: document.getElementById("error"),
  tableContainer: document.getElementById("tableContainer"),
  createBtn: document.getElementById("createBtn"),
  clearBtn: document.getElementById("clearBtn"),
  dragToggleBtn: document.getElementById("dragToggleBtn"),
  highlightToggleBtn: document.getElementById("highlightToggleBtn"),
  dragText: document.getElementById("dragText"),
  highlightText: document.getElementById("highlightText"),
  rowCount: document.getElementById("rowCount"),
  colCount: document.getElementById("colCount"),
  cellCount: document.getElementById("cellCount"),
  dragStatus: document.getElementById("dragStatus"),
};
