console.log("🚀 Loading Galactic Ledger System...");

// ========== LOAD ALL MODULES ==========

// 1. Load database module
(function() {
    // Inline the database.js content
    const GalacticDatabase = {
        sectors: {
            MARS: { id: "MARS", name: "Mars Colony", taxRate: 0.15 },
            EARTH: { id: "EARTH", name: "Earth Central", taxRate: 0.20 },
            BELT: { id: "BELT", name: "Asteroid Belt", taxRate: 0.10 }
        },
        
        users: [
            { id: "USR-001", username: "captain_neo", pin: "1234", sector: "EARTH", balance: 10000 },
            { id: "USR-002", username: "dr_martian", pin: "5678", sector: "MARS", balance: 5000 },
            { id: "USR-003", username: "beltalowda", pin: "9999", sector: "BELT", balance: 3000 },
            { id: "USR-004", username: "admin_zero", pin: "8813", sector: "EARTH", balance: 999999 }
        ],
        
        exchangeRates: {
            Credits: { Gold: 0.05, "Oxygen-Tokens": 2.3, Scrip: 4.7 },
            Gold: { Credits: 20.0, "Oxygen-Tokens": 46.0, Scrip: 94.0 }
        },
        
        transactions: [],
        
        utilityBills: {
            "LS-001": { name: "Life Support", cost: 100, currency: "Credits" },
            "FUEL-001": { name: "Station Fuel", cost: 250, currency: "Gold" }
        }
    };
    
    window.GalacticDatabase = GalacticDatabase;
    console.log("✅ Database loaded");
})();

// 2. Load security module
(function() {
    const SecuritySystem = {
        currentUser: null,
        
        authenticate: function() {
            const username = prompt("Enter username:");
            const pin = prompt("Enter PIN:");
            
            const user = this.findUser(username, 0);
            
            if (!user) {
                console.log("❌ User not found");
                return false;
            }
            
            if (user.pin !== pin) {
                console.log("❌ Wrong PIN");
                return false;
            }
            
            this.currentUser = user;
            console.log(`✅ Welcome ${user.username}!`);
            return true;
        },
        
        findUser: function(username, index) {
            if (index >= window.GalacticDatabase.users.length) {
                return null;
            }
            
            if (window.GalacticDatabase.users[index].username === username) {
                return window.GalacticDatabase.users[index];
            }
            
            return this.findUser(username, index + 1);
        }
    };
    
    window.SecuritySystem = SecuritySystem;
    console.log("✅ Security system loaded");
})();

// 3. Load transaction module
(function() {
    const TransactionSystem = {
        transferMoney: function(fromUserId, toUserId, amount) {
            console.log(`💸 Transfer ${amount} from ${fromUserId} to ${toUserId}`);
            
            // Find users
            const fromUser = this.findUserById(fromUserId, 0);
            const toUser = this.findUserById(toUserId, 0);
            
            if (!fromUser || !toUser) {
                console.log("❌ User not found");
                return;
            }
            
            if (fromUser.balance < amount) {
                console.log("❌ Insufficient funds");
                return;
            }
            
            // Calculate tax
            let tax = 0;
            if (fromUser.sector === toUser.sector) {
                tax = amount * window.GalacticDatabase.sectors[fromUser.sector].taxRate;
            } else {
                tax = amount * 0.25; // Higher for interplanetary
            }
            
            const total = amount + tax;
            
            // Update balances
            fromUser.balance -= total;
            toUser.balance += amount;
            
            // Record transaction
            window.GalacticDatabase.transactions.push({
                id: `TX-${Date.now()}`,
                fromUser: fromUserId,
                toUser: toUserId,
                amount: amount,
                tax: tax,
                date: new Date().toISOString()
            });
            
            console.log(`✅ Transfer successful!`);
            console.log(`   Tax: ${tax}`);
            console.log(`   Your new balance: ${fromUser.balance}`);
        },
        
        findUserById: function(userId, index) {
            if (index >= window.GalacticDatabase.users.length) {
                return null;
            }
            
            if (window.GalacticDatabase.users[index].id === userId) {
                return window.GalacticDatabase.users[index];
            }
            
            return this.findUserById(userId, index + 1);
        }
    };
    
    window.TransactionSystem = TransactionSystem;
    console.log("✅ Transaction system loaded");
})();

// 4. Load interest module
(function() {
    const InterestSystem = {
        calculateCompound: function(principal, rate, months, currentMonth) {
            if (currentMonth > months) {
                console.log(`📈 Calculation complete for ${months} months`);
                return principal;
            }
            
            const monthlyRate = rate / 12;
            const interest = principal * monthlyRate;
            const newPrincipal = principal + interest;
            
            console.log(`Month ${currentMonth}:`);
            console.log(`  Interest: ${interest.toFixed(2)}`);
            console.log(`  New total: ${newPrincipal.toFixed(2)}`);
            
            return this.calculateCompound(newPrincipal, rate, months, currentMonth + 1);
        }
    };
    
    window.InterestSystem = InterestSystem;
    console.log("✅ Interest system loaded");
})();

// 5. Load main menu
(function() {
    const MainMenu = {
        show: function() {
            console.log("\n📋 MAIN MENU:");
            console.log("1. Login");
            console.log("2. Transfer money");
            console.log("3. Calculate interest");
            console.log("4. View balance");
            console.log("5. Pay bills");
            console.log("6. Search user");
            console.log("7. Exit");
            
            const choice = prompt("Choose option (1-7):");
            this.handleChoice(choice);
        },
        
        handleChoice: function(choice) {
            if (choice === "1") {
                if (window.SecuritySystem.authenticate()) {
                    this.show();
                } else {
                    this.show();
                }
            } else if (choice === "2") {
                if (!window.SecuritySystem.currentUser) {
                    console.log("❌ Please login first!");
                    this.show();
                    return;
                }
                
                const toUser = prompt("Recipient ID (USR-001, USR-002, etc):");
                const amount = parseFloat(prompt("Amount:"));
                
                window.TransactionSystem.transferMoney(
                    window.SecuritySystem.currentUser.id,
                    toUser,
                    amount
                );
                
                this.show();
            } else if (choice === "3") {
                const principal = parseFloat(prompt("Principal amount:"));
                const months = parseInt(prompt("Months (1-12):"));
                
                const result = window.InterestSystem.calculateCompound(
                    principal,
                    0.05, // 5% annual
                    months,
                    1
                );
                
                console.log(`💰 Final amount after ${months} months: ${result.toFixed(2)}`);
                this.show();
            } else if (choice === "4") {
                if (window.SecuritySystem.currentUser) {
                    console.log(`💰 Your balance: ${window.SecuritySystem.currentUser.balance}`);
                } else {
                    console.log("❌ Please login first!");
                }
                this.show();
            } else if (choice === "5") {
                this.payBills();
            } else if (choice === "6") {
                this.searchUser();
            } else if (choice === "7") {
                console.log("👋 Goodbye!");
                return;
            } else {
                console.log("❌ Invalid choice!");
                this.show();
            }
        },
        
        payBills: function() {
            if (!window.SecuritySystem.currentUser) {
                console.log("❌ Please login first!");
                this.show();
                return;
            }
            
            console.log("\n🧾 AVAILABLE BILLS:");
            console.log("1. Life Support (100 Credits)");
            console.log("2. Station Fuel (250 Gold)");
            console.log("3. Pay all bills");
            
            const choice = prompt("Choose bill (1-3):");
            
            if (choice === "1") {
                this.processBill("LS-001", 100, "Credits");
            } else if (choice === "2") {
                this.processBill("FUEL-001", 250, "Gold");
            } else if (choice === "3") {
                this.processAllBills();
            }
            
            this.show();
        },
        
        processBill: function(billId, amount, currency) {
            const user = window.SecuritySystem.currentUser;
            
            if (user.balance < amount) {
                console.log(`❌ Insufficient ${currency}!`);
                return;
            }
            
            user.balance -= amount;
            console.log(`✅ Paid ${billId}: ${amount} ${currency}`);
            console.log(`💰 New balance: ${user.balance}`);
        },
        
        processAllBills: function() {
            console.log("🧾 Processing all bills...");
            this.processBill("LS-001", 100, "Credits");
            this.processBill("FUEL-001", 250, "Gold");
        },
        
        searchUser: function() {
            const userId = prompt("Enter user ID to search:");
            
            const user = window.TransactionSystem.findUserById(userId, 0);
            
            if (user) {
                console.log(`✅ User found: ${user.username}`);
                console.log(`   Sector: ${user.sector}`);
                console.log(`   Balance: ${user.balance}`);
            } else {
                console.log("❌ User not found");
            }
            
            this.show();
        }
    };
    
    window.MainMenu = MainMenu;
    console.log("✅ Main menu loaded");
})();

// ========== START THE SYSTEM ==========
console.log("\n" + "=".repeat(50));
console.log("🚀 GALACTIC LEDGER SYSTEM READY");
console.log("=".repeat(50));

// Start the menu
window.MainMenu.show();