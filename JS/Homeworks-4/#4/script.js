alert("Enter ANY numbers between 1 and 20");

const start = parseInt(prompt("Enter START number (1-20):"));
const end = parseInt(prompt("Enter END number (1-20):"));

if (start >= 1 && start <= 20 && end >= 1 && end <= 20 && start <= end) {
  console.log(`=== VISIBLE OUTPUT: Numbers ${start} to ${end} ===`);

  for (let i = start; i <= end; i++) {
    console.log(`Number: ${i}`);

    if (i % 2 === 0) {
      console.log("→ Adding: [NEW LINE] \\n");
      console.log("\n"); // Actual new line (you'll see empty line)
    } else {
      console.log('→ Adding: [SPACE] " "');
      console.log(" "); // Actual space (invisible, but we showed it above)
    }
  }

  console.log(`✅ Finished! Check for empty lines after even numbers.`);
} else {
  alert("❌ Invalid input!");
}
