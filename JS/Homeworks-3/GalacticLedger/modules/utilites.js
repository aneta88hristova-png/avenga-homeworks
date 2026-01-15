// ============== UTILITIES SYSTEM ==============
const UtilitiesSystem = {
    payBill: function(userId, billId) {
        console.log(`\n🧾 PROCESSING BILL PAYMENT: ${billId}`);
        
        const user = window.SearchEngine.findUserById(userId, 0);
        const bill = window.GalacticDatabase.utilityBills[billId];
        
        if (!user) {
            console.log("❌ User not found");
            return false;
        }
        
        if (!bill) {
            console.log("❌ Invalid bill type");
            return false;
        }
        
        const amount = bill.cost;
        const currency = bill.currency;
        
        console.log(`   Bill: ${bill.name}`);
        console.log(`   Amount: ${amount} ${currency}`);
        console.log(`   User balance: ${user.balance[currency]} ${currency}`);
        
        if (user.balance[currency] < amount) {
            console.log(`❌ Insufficient ${currency}`);
            return false;
        }
        
        user.balance[currency] -= amount;
        
        window.GalacticDatabase.transactions.push({
            id: `BILL-${Date.now()}`,
            fromUser: userId,
            toUser: "SYSTEM",
            amount: amount,
            currency: currency,
            description: bill.name,
            timestamp: new Date().toISOString(),
            status: "COMPLETED"
        });
        
        console.log(`✅ ${bill.name} PAID`);
        console.log(`💰 New balance: ${user.balance[currency]} ${currency}`);
        
        return true;
    },
    
    payAllBills: function(userId) {
        console.log("\n🧾 PROCESSING ALL UTILITY BILLS");
        console.log("=".repeat(40));
        
        const bills = Object.keys(window.GalacticDatabase.utilityBills);
        let total = 0;
        let paid = 0;
        
        const processNext = function(index) {
            if (index >= bills.length) {
                console.log("\n📊 BILL PAYMENT SUMMARY:");
                console.log(`   Total bills: ${bills.length}`);
                console.log(`   Successfully paid: ${paid}`);
                console.log(`   Total amount: ${total}`);
                return;
            }
            
            const billId = bills[index];
            const result = window.UtilitiesSystem.payBill(userId, billId);
            
            if (result) {
                const bill = window.GalacticDatabase.utilityBills[billId];
                total += bill.cost;
                paid++;
            }
            
            processNext(index + 1);
        };
        
        processNext(0);
        
        return { total: total, paid: paid };
    }
};

window.UtilitiesSystem = UtilitiesSystem;