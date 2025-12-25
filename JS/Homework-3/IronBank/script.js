// IronBank Banking System
const bankData = {
  admin: { pin: "0000", balance: 1000000, history: [] },
  user1: { pin: "1234", balance: 500, history: [] },
  user2: { pin: "9999", balance: 10, history: [] },
  Aneta: { pin: "5555", balance: -500, history: [] },
};

let currentUser = null;

// Main menu - start the bank
function startBank() {
  console.log("🏦 Welcome to IronBank!");
  showMainMenu();
}

// Show main menu
function showMainMenu() {
  const choice = prompt(
    "Welcome to IRONBANK \n" + "1. Login\n" + "2. Exit\n" + "Choose option: 1 or 2"
  );

  if (choice === "1") {
    login();
  } else if (choice === "2") {
    alert("Thank you for using IronBank!");
    return;
  } else if (choice === null) {
    alert("Goodbye!");
    return;
  } else {
    alert("Invalid choice! Please enter 1 or 2");
    showMainMenu();
  }
}

// Login function
function login() {
  const username = prompt("Enter username:");//check users in bankData"

  if (username === null) {
    showMainMenu();
    return;
  }

  // Check if user exists
  if (!bankData[username]) {
    alert("User not found!");
    login();
    return;
  }

  const pin = prompt("Enter PIN:");//check PINs in bankData"

  if (pin === null) {
    showMainMenu();
    return;
  }

  // Check if PIN is correct
  if (bankData[username].pin === pin) {
    currentUser = username;
    alert(`Welcome ${username}!`);
    showUserMenu();
  } else {
    alert("Wrong PIN!");
    login();
  }
}

// User menu after login
function showUserMenu() {
  const menu =
    `=== ${currentUser.toUpperCase()} ===\n` +
    `Balance: $${bankData[currentUser].balance}\n\n` +
    "1. Check Balance\n" +
    "2. Deposit Money\n" +
    "3. Withdraw Money\n" +
    "4. Transfer Money\n" +
    "5. View History\n" +
    "6. Change PIN\n" +
    "7. Logout\n\n" +
    "Choose option:";

  const choice = prompt(menu);

  if (choice === null) {
    logout();
    return;
  }

  switch (choice) {
    case "1":
      checkBalance();
      break;
    case "2":
      deposit();
      break;
    case "3":
      withdraw();
      break;
    case "4":
      transfer();
      break;
    case "5":
      viewHistory();
      break;
    case "6":
      changePin();
      break;
    case "7":
      logout();
      break;
    default:
      alert("Invalid choice!");
      showUserMenu();
  }
}

// 1. Check balance
function checkBalance() {
  alert(`Your balance: $${bankData[currentUser].balance}`);
  showUserMenu();
}

// 2. Deposit money
function deposit() {
  const amountStr = prompt("Enter amount to deposit:");

  if (amountStr === null) {
    showUserMenu();
    return;
  }

  const amount = parseFloat(amountStr);

  // Validation
  if (isNaN(amount)) {
    alert("Invalid amount! Please enter a number.");
    deposit();
    return;
  }

  if (amount <= 0) {
    alert("Amount must be greater than 0!");
    deposit();
    return;
  }

  // Add to balance
  bankData[currentUser].balance += amount;

  // Add to history
  const date = new Date().toLocaleString();
  bankData[currentUser].history.push(`Deposit: +$${amount} at ${date}`);

  alert(
    `Success! Deposited $${amount}\nNew balance: $${bankData[currentUser].balance}`
  );
  showUserMenu();
}

// 3. Withdraw money
function withdraw() {
  const amountStr = prompt("Enter amount to withdraw:");

  if (amountStr === null) {
    showUserMenu();
    return;
  }

  const amount = parseFloat(amountStr);

  // Validation
  if (isNaN(amount)) {
    alert("Invalid amount! Please enter a number.");
    withdraw();
    return;
  }

  if (amount <= 0) {
    alert("Amount must be greater than 0!");
    withdraw();
    return;
  }

  if (amount > bankData[currentUser].balance) {
    alert(`Not enough money! You have $${bankData[currentUser].balance}`);
    withdraw();
    return;
  }

  // Confirm withdrawal
  const confirmWithdraw = confirm(
    `Are you sure you want to withdraw $${amount}?`
  );

  if (!confirmWithdraw) {
    alert("Withdrawal cancelled.");
    showUserMenu();
    return;
  }

  // Subtract from balance
  bankData[currentUser].balance -= amount;

  // Add to history
  const date = new Date().toLocaleString();
  bankData[currentUser].history.push(`Withdrawal: -$${amount} at ${date}`);

  alert(
    `Success! Withdrawn $${amount}\nNew balance: $${bankData[currentUser].balance}`
  );
  showUserMenu();
}

// 4. Transfer money
function transfer() {
  const toUser = prompt("Enter recipient username:");//Write Aneta som recipient 

  if (toUser === null) {
    showUserMenu();
    return;
  }

  // Check if recipient exists
  if (!bankData[toUser]) {
    alert("Recipient not found!");
    transfer();
    return;
  }

  // Check if transferring to yourself
  if (toUser === currentUser) {
    alert("Cannot transfer to yourself!");
    transfer();
    return;
  }

  const amountStr = prompt(`Enter amount to transfer to ${toUser}:`);

  if (amountStr === null) {
    showUserMenu();
    return;
  }

  const amount = parseFloat(amountStr);

  // Validation
  if (isNaN(amount)) {
    alert("Invalid amount! Please enter a number.");
    transfer();
    return;
  }

  if (amount <= 0) {
    alert("Amount must be greater than 0!");
    transfer();
    return;
  }

  if (amount > bankData[currentUser].balance) {
    alert(`Not enough money! You have $${bankData[currentUser].balance}`);
    transfer();
    return;
  }

  // Confirm transfer
  const confirmTransfer = confirm(`Transfer $${amount} to ${toUser}?`);

  if (!confirmTransfer) {
    alert("Transfer cancelled.");
    showUserMenu();
    return;
  }

  // Update balances
  bankData[currentUser].balance -= amount;
  bankData[toUser].balance += amount;

  // Add to history (both users)
  const date = new Date().toLocaleString();
  bankData[currentUser].history.push(`Sent $${amount} to ${toUser} at ${date}`);
  bankData[toUser].history.push(
    `Received $${amount} from ${currentUser} at ${date}`
  );

  alert(
    `Success! Transferred $${amount} to ${toUser}\nYour new balance: $${bankData[currentUser].balance}`
  );
  showUserMenu();
}

// 5. View history (using recursion instead of loops)
function viewHistory() {
  const history = bankData[currentUser].history;

  if (history.length === 0) {
    alert("No transactions yet.");
    showUserMenu();
    return;
  }

  // Create history string using recursion
  const historyText = buildHistoryString(
    history,
    0,
    "Transaction History:\n\n"
  );

  alert(historyText);
  showUserMenu();
}

// Recursive function to build history string
function buildHistoryString(history, index, result) {
  if (index >= history.length) {
    return result;
  }

  result += `${index + 1}. ${history[index]}\n`;
  return buildHistoryString(history, index + 1, result);
}

// 6. Change PIN
function changePin() {
  const oldPin = prompt("Enter current PIN:");

  if (oldPin === null) {
    showUserMenu();
    return;
  }

  // Check old PIN
  if (bankData[currentUser].pin !== oldPin) {
    alert("Wrong PIN!");
    changePin();
    return;
  }

  const newPin = prompt("Enter new PIN (4 digits):");

  if (newPin === null) {
    showUserMenu();
    return;
  }

  // Validate new PIN
  if (newPin.length !== 4 || isNaN(newPin)) {
    alert("PIN must be 4 digits!");
    changePin();
    return;
  }

  const confirmPin = prompt("Confirm new PIN:");

  if (confirmPin !== newPin) {
    alert("PINs don't match!");
    changePin();
    return;
  }

  // Update PIN
  bankData[currentUser].pin = newPin;
  alert("PIN changed successfully!");
  showUserMenu();
}

// 7. Logout
function logout() {
  currentUser = null;
  alert("Logged out successfully!");
  showMainMenu();
}

// Start the bank
startBank();