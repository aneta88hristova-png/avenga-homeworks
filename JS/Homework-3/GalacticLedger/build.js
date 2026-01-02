// build.js - Run this to combine all files

const fs = require("fs");
const path = require("path");

const modulesDir = "./modules";
const outputFile = "./main.js";

let combinedCode = `// ============================================
// 🌌 GALACTIC LEDGER SYSTEM - COMBINED FILE
// Generated: ${new Date().toISOString()}
// ============================================

console.log("🚀 Loading Galactic Ledger System...");

`;

// Read all module files
const moduleFiles = [
  "01_database.js",
  "02_security.js",
  "03_search.js",
  "04_currency.js",
  "05_interest.js",
  "06_transactions.js",
  "07_utilities.js",
  "08_audit.js",
  "09_admin.js",
  "10_menu.js",
];

moduleFiles.forEach((file) => {
  const filePath = path.join(modulesDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    combinedCode += `\n// ========== ${file} ==========\n\n`;
    combinedCode += content + "\n";
    console.log(`✅ Added ${file}`);
  }
});

// Add startup code
combinedCode += `
// ========== START SYSTEM ==========
console.log("\\n" + "=".repeat(50));
console.log("🚀 GALACTIC LEDGER SYSTEM READY");
console.log("=".repeat(50));

// Start the system
window.MainMenu.show();
`;

// Write combined file
fs.writeFileSync(outputFile, combinedCode);
console.log(`\n✅ Combined file created: ${outputFile}`);
console.log(`📏 Total size: ${combinedCode.length} characters`);
