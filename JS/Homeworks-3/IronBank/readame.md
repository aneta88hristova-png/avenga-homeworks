
📜 The "IronBank" Legacy System
Role: Junior Mainframe Developer Deadline: [Insert Date] Estimated Code Length: 300 - 500+ Lines

📖 Scenario
You have been hired to maintain the banking software for "IronBank," a secure facility that runs on 1980s technology. The system cannot handle modern code.

The system does not support Loops (for, while).

The system does not support Classes or this.

The system has no graphical interface (HTML/CSS is broken).

Your job is to build a fully functional Banking Terminal using only JavaScript functions, conditional logic (if/else), and browser dialogs (prompt, alert, confirm).

🚫 Technical Constraints (The "Iron Rules")
NO LOOPS: You are strictly forbidden from using for, while, or do...while loops.

Hint: If you need to repeat a menu or print a list, you must use Recursion (a function calling itself).

NO CLASSES: You cannot use class or constructor functions. You must use a global Object (const bankData = { ... }) to store all user data.

NO DOM: Do not write any HTML or CSS. Do not use document.querySelector. The entire app must run via prompt() and alert().

NO ARRAY METHODS (Optional Hard Mode): Try to avoid .map() or .filter(). Use manual index access if possible.

💾 Data Structure Requirement
You must start your program with this exact data structure (you may add more users):



JavaScript


const bankData = {
    "admin": { pin: "0000", balance: 1000000, history: [] },
    "user1": { pin: "1234", balance: 500, history: [] },
    "user2": { pin: "9999", balance: 10, history: [] }
};
// NOTE: "history" will be an array of strings, e.g., ["Deposit: +500", "Withdraw: -100"]
🛠 Functional Requirements
Your program must include a Main Menu that loops indefinitely (via recursion) until the user chooses "Exit".

1. Authentication System
Ask for Username. Check if the user exists in bankData.

Ask for PIN. Check if it matches the user's PIN.

If correct, welcome the user and show the Dashboard.

If incorrect, show an error and restart the login process.

2. The Dashboard (Menu)
Once logged in, present a menu (using prompt) with the following options:

Check Balance

Deposit Funds

Withdraw Funds

Transfer Money

View Transaction History

Change PIN

Logout

3. Feature Details (The Validation Heavy Lifting)
Every input must be validated. If validation fails, show an alert and restart that specific feature.

Deposit:

Input cannot be negative or zero.

Input must be a number.

Update balance.

Add string to history array (e.g., "Deposited $500 at [Date]").

Withdraw:

Input cannot be more than the current balance.

Confirm the action using confirm().

Update balance and history.

Transfer (Complex):

Ask for recipient username. Verify recipient exists in bankData.

Prevent user from transferring to themselves.

Ask for amount. Verify sender has enough balance.

Deduct from Sender. Add to Recipient.

Crucial: Add a history log to the Sender ("Sent $X to User2") AND the Recipient ("Received $X from User1").

History (The Recursion Challenge):

Since you cannot use a loop to print the array, you must write a recursive function that reads the history array and creates a single long string to display in an alert.

💡 Hint: How to "Loop" without Loops?
If the user enters the wrong input, or finishes an action, how do you keep the program running? Call the function again.



JavaScript


function mainMenu() {
    let choice = prompt("1. Login \n2. Exit");
    if (choice === "1") {
        login();
    } else if (choice === "2") {
        return; // Stops the program
    } else {
        alert("Invalid choice");
        mainMenu(); // <--- RECURSION: Function calls itself to restart
    }
}
✅ Evaluation Criteria
Code Volume: Does the solution cover all edge cases? (Expected: extensive if/else chains).

Stability: Does the app crash if I click "Cancel" on a prompt? (It shouldn't).

Data Integrity: Does money disappear? Do transfers correctly update both users?

Formatting: Are currency amounts displayed cleanly (e.g., using string concatenation)?