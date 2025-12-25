function atmWithPrompt() {
  const accountBalance = 2500;

  console.log("=== ATM Machine ===");
  console.log(`Your balance: ${accountBalance}`);

  const input = prompt(
    `Enter amount to withdraw (Balance: ${accountBalance}):`
  );

  if (input === null) {
    const result = "Cancelled";
    console.log("❌ Withdrawal cancelled");
    console.log("Return value:", result);
    return result;
  }

  const withdrawAmount = parseFloat(input);

  // First check if it's not a number
  if (isNaN(withdrawAmount)) {
    const result = "Invalid amount";
    console.log("Invalid amount! Not a number.");
    console.log("Return value:", result);
    alert("Please enter a valid number!");
    return result;
  }

  // Check if it's negative
  if (withdrawAmount < 0) {
    const result = "Invalid amount";
    console.log("Invalid amount! Negative number.");
    console.log("Return value:", result);
    alert("Cannot withdraw negative amount!");
    return result;
  }

  // Check if it's 0
  if (withdrawAmount === 0) {
    const result = "Zero withdrawal";
    console.log("User requested 0 withdrawal");
    console.log("Return value:", result);
    alert("Zero amount requested. No money withdrawn. Balance unchanged.");
    return result;
  }

  // Rest of the code for positive amounts...
  if (withdrawAmount > accountBalance) {
    const result = "Not enough money";
    console.log(` Not enough money!`);
    console.log(`Requested: ${withdrawAmount} | Balance: ${accountBalance}`);
    console.log("Return value:", result);
    alert(`Not enough money! You only have ${accountBalance}`);
    return result;
  } else {
    const newBalance = accountBalance - withdrawAmount;
    const result = {
      withdrawn: withdrawAmount,
      balance: newBalance,
      message: "Withdrawal successful",
    };

    console.log(" Withdrawal successful!");
    console.log(`Withdrawn: ${withdrawAmount}`);
    console.log(`New balance: ${newBalance}`);
    console.log("Return value:", result);

    alert(`Success! Withdrawn: ${withdrawAmount}\nNew balance: ${newBalance}`);

    return result;
  }
}

// Test it
const result = atmWithPrompt();
console.log("\n=== FINAL RESULT ===");
console.log("Function returned:", result);
