// ============== MAIN MENU ==============
const MainMenu = {
    show: function() {
        console.log("\n" + "=".repeat(60));
        console.log("🌌 GALACTIC LEDGER MAIN MENU");
        console.log("=".repeat(60));
        
        if (window.SecuritySystem.currentUser) {
            console.log(`👤 Logged in as: ${window.SecuritySystem.currentUser.username}`);
            console.log(`🎖️ Clearance: ${window.SecuritySystem.currentUser.clearance}`);
        }
        
        console.log("\n1. 🔐 Login / Authentication");
        console.log("2. 💸 Transfer money");
        console.log("3. 💰 Check balance");
        console.log("4. 📈 Calculate interest");
        console.log("5. 🧾 Pay utility bills");
        console.log("6. 🔍 Search user / transactions");
        console.log("7. 📊 Audit reports");
        console.log("8. ⚙️ Admin tools");
        console.log("9. 🖥️ System diagnostics");
        console.log("0. 👋 Logout / Exit");
        
        this.handleChoice();
    },
    
    handleChoice: function() {
        const choice = prompt("\nChoose option (0-9):");
        
        if (choice === "0") {
            window.SecuritySystem.logout();
            console.log("👋 Goodbye!");
            return;
        }
        
        if (choice === "1") {
            if (window.SecuritySystem.authenticate()) {
                this.show();
            } else {
                console.log("❌ Authentication failed");
                this.show();
            }
        }
        
        else if (choice === "2") {
            if (!window.SecuritySystem.currentUser) {
                console.log("❌ Please login first!");
                this.show();
                return;
            }
            
            const toUser = prompt("Recipient user ID:");
            const amount = parseFloat(prompt("Amount:"));
            const currency = prompt("Currency (Credits/Gold/Oxygen-Tokens/Scrip):");
            
            if (!["Credits", "Gold", "Oxygen-Tokens", "Scrip"].includes(currency)) {
                console.log("❌ Invalid currency");
                this.show();
                return;
            }
            
            window.TransactionSystem.processTransfer(
                window.SecuritySystem.currentUser.id,
                toUser,
                amount,
                currency
            );
            
            this.show();
        }
        
        else if (choice === "3") {
            if (!window.SecuritySystem.currentUser) {
                console.log("❌ Please login first!");
                this.show();
                return;
            }
            
            window.TransactionSystem.getUserBalance(window.SecuritySystem.currentUser.id);
            this.show();
        }
        
        else if (choice === "4") {
            const userId = prompt("User ID for interest calculation:");
            window.InterestSystem.getUserInterest(userId);
            this.show();
        }
        
        else if (choice === "5") {
            if (!window.SecuritySystem.currentUser) {
                console.log("❌ Please login first!");
                this.show();
                return;
            }
            
            console.log("\n🧾 UTILITY