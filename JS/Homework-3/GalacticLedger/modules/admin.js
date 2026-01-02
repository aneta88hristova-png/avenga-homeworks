// ============== ADMIN SYSTEM ==============
const AdminSystem = {
    adminOverrideCode: "ALPHA-OMEGA-777",
    
    unlockAccount: function(userId) {
        console.log(`\n⚙️ UNLOCKING ACCOUNT: ${userId}`);
        
        const code = prompt("Admin override code:");
        
        if (code !== this.adminOverrideCode) {
            console.log("❌ Invalid admin code");
            return false;
        }
        
        const user = window.SearchEngine.findUserById(userId, 0);
        
        if (!user) {
            console.log("❌ User not found");
            return false;
        }
        
        user.locked = false;
        user.failedAttempts = 0;
        user.status = "ACTIVE";
        
        console.log(`✅ Account ${userId} unlocked`);
        console.log(`👤 User: ${user.username}`);
        
        return true;
    },
    
    changeUserStatus: function(userId, newStatus) {
        console.log(`\n⚙️ CHANGING USER STATUS: ${userId} → ${newStatus}`);
        
        const validStatus = ["ACTIVE", "PENDING", "SUSPENDED", "DELETED"];
        
        if (!validStatus.includes(newStatus)) {
            console.log(`❌ Invalid status. Use: ${validStatus.join(", ")}`);
            return false;
        }
        
        const user = window.SearchEngine.findUserById(userId, 0);
        
        if (!user) {
            console.log("❌ User not found");
            return false;
        }
        
        const oldStatus = user.status;
        user.status = newStatus;
        
        if (newStatus === "DELETED") {
            user.locked = true;
            user.balance = { Credits: 0, Gold: 0, "Oxygen-Tokens": 0, Scrip: 0 };
        }
        
        console.log(`✅ Status changed:`);
        console.log(`   From: ${oldStatus}`);
        console.log(`   To: ${newStatus}`);
        console.log(`   User: ${user.username}`);
        
        return true;
    },
    
    addNewUser: function() {
        console.log("\n⚙️ ADDING NEW USER");
        
        const username = prompt("Username:");
        const pin = prompt("PIN (4 digits):");
        const secret = prompt("Secret word:");
        const sector = prompt("Sector (MARS, EARTH, BELT):");
        const clearance = prompt("Clearance level:");
        
        if (!["MARS", "EARTH", "BELT"].includes(sector)) {
            console.log("❌ Invalid sector");
            return false;
        }
        
        const lastId = window.GalacticDatabase.users[window.GalacticDatabase.users.length - 1].id;
        const idNum = parseInt(lastId.split('-')[1]) + 1;
        const newId = `USR-${idNum.toString().padStart(3, '0')}`;
        
        const newUser = {
            id: newId,
            username: username,
            pin: pin,
            secret: secret,
            sector: sector,
            clearance: clearance,
            status: "PENDING",
            locked: false,
            failedAttempts: 0,
            balance: {
                Credits: 100,
                Gold: 5,
                "Oxygen-Tokens": 230,
                Scrip: 470
            }
        };
        
        window.GalacticDatabase.users.push(newUser);
        
        console.log(`✅ New user created:`);
        console.log(`   ID: ${newId}`);
        console.log(`   Username: ${username}`);
        console.log(`   Sector: ${sector}`);
        console.log(`   Status: PENDING (requires activation)`);
        
        return newId;
    },
    
    systemDiagnostics: function() {
        console.log("\n" + "=".repeat(60));
        console.log("🖥️ SYSTEM DIAGNOSTICS");
        console.log("=".repeat(60));
        
        const users = window.GalacticDatabase.users;
        let active = 0;
        let locked = 0;
        let pending = 0;
        let deleted = 0;
        
        const count = function(index, totals) {
            if (index >= users.length) {
                return totals;
            }
            
            const user = users[index];
            
            if (user.status === "ACTIVE") totals.active++;
            if (user.status === "PENDING") totals.pending++;
            if (user.status === "DELETED") totals.deleted++;
            if (user.locked) totals.locked++;
            
            return count(index + 1, totals);
        };
        
        const totals = count(0, { active: 0, locked: 0, pending: 0, deleted: 0 });
        
        console.log(`📊 USERS: ${users.length} total`);
        console.log(`   Active: ${totals.active}`);
        console.log(`   Locked: ${totals.locked}`);
        console.log(`   Pending: ${totals.pending}`);
        console.log(`   Deleted: ${totals.deleted}`);
        
        console.log(`\n💾 TRANSACTIONS: ${window.GalacticDatabase.transactions.length}`);
        
        let totalValue = 0;
        let totalTax = 0;
        
        const sumTx = function(index, sums) {
            if (index >= window.GalacticDatabase.transactions.length) {
                return sums;
            }
            
            const tx = window.GalacticDatabase.transactions[index];
            sums.value += tx.amount;
            sums.tax += tx.tax || 0;
            
            return sumTx(index + 1, sums);
        };
        
        const sums = sumTx(0, { value: 0, tax: 0 });
        
        console.log(`   Total value: ${sums.value.toFixed(2)}`);
        console.log(`   Total tax: ${sums.tax.toFixed(2)}`);
        
        console.log(`\n📍 SECTOR DISTRIBUTION:`);
        let mars = 0;
        let earth = 0;
        let belt = 0;
        
        const countSectors = function(index, counts) {
            if (index >= users.length) {
                return counts;
            }
            
            const sector = users[index].sector;
            if (sector === "MARS") counts.mars++;
            if (sector === "EARTH") counts.earth++;
            if (sector === "BELT") counts.belt++;
            
            return countSectors(index + 1, counts);
        };
        
        const sectors = countSectors(0, { mars: 0, earth: 0, belt: 0 });
        
        console.log(`   Mars: ${sectors.mars} users`);
        console.log(`   Earth: ${sectors.earth} users`);
        console.log(`   Belt: ${sectors.belt} users`);
        
        console.log(`\n✅ SYSTEM STATUS: OPERATIONAL`);
        console.log("=".repeat(60));
        
        return {
            users: totals,
            transactions: sums,
            sectors: sectors
        };
    }
};

window.AdminSystem = AdminSystem;