// ============== TRANSACTION SYSTEM ==============
const TransactionSystem = {
  processTransfer: function (fromUserId, toUserId, amount, currency) {
    console.log("\n" + "=".repeat(60));
    console.log("🌌 INTER-PLANETARY TRANSFER");
    console.log("=".repeat(60));

    const fromUser = window.SearchEngine.findUserById(fromUserId, 0);
    const toUser = window.SearchEngine.findUserById(toUserId, 0);

    if (!fromUser || !toUser) {
      console.log("❌ User not found");
      return false;
    }

    if (fromUser.locked || fromUser.status !== "ACTIVE") {
      console.log("❌ Sender account not active");
      return false;
    }

    if (toUser.locked || toUser.status !== "ACTIVE") {
      console.log("❌ Recipient account not active");
      return false;
    }

    if (fromUser.balance[currency] < amount) {
      console.log(`❌ Insufficient ${currency}`);
      return false;
    }

    const tax = window.CurrencySystem.calculateTax(
      amount,
      fromUser.sector,
      toUser.sector
    );

    const total = amount + tax;

    console.log(`\n💰 TRANSACTION SUMMARY:`);
    console.log(`   Amount: ${amount} ${currency}`);
    console.log(`   Tax: ${tax.toFixed(2)} ${currency}`);
    console.log(`   Total: ${total.toFixed(2)} ${currency}`);

    const confirm = prompt("Confirm? (yes/no):");

    if (confirm !== "yes") {
      console.log("❌ Transfer cancelled");
      return false;
    }

    fromUser.balance[currency] -= total;

    if (fromUser.sector !== toUser.sector) {
      const fromCurr =
        window.GalacticDatabase.sectors[fromUser.sector].currency;
      const toCurr = window.GalacticDatabase.sectors[toUser.sector].currency;
      const converted = window.CurrencySystem.convert(amount, fromCurr, toCurr);
      toUser.balance[toCurr] += converted;
      console.log(`🔄 Converted to ${toCurr}: ${converted.toFixed(2)}`);
    } else {
      toUser.balance[currency] += amount;
    }

    const tx = {
      id: `TX-${Date.now()}`,
      fromUser: fromUserId,
      toUser: toUserId,
      amount: amount,
      currency: currency,
      tax: tax,
      fromSector: fromUser.sector,
      toSector: toUser.sector,
      timestamp: new Date().toISOString(),
      status: "COMPLETED",
    };

    window.GalacticDatabase.transactions.push(tx);

    console.log("\n✅ TRANSACTION SUCCESSFUL!");
    console.log(`📋 ID: ${tx.id}`);
    console.log(`👤 From: ${fromUser.username} (${fromUser.sector})`);
    console.log(`👤 To: ${toUser.username} (${toUser.sector})`);
    console.log(
      `💰 Sender new balance: ${fromUser.balance[currency]} ${currency}`
    );

    return true;
  },

  getUserBalance: function (userId) {
    const user = window.SearchEngine.findUserById(userId, 0);

    if (!user) {
      console.log("❌ User not found");
      return;
    }

    console.log(`\n💰 ${user.username}'s BALANCE:`);
    console.log(`   Credits: ${user.balance.Credits}`);
    console.log(`   Gold: ${user.balance.Gold}`);
    console.log(`   Oxygen-Tokens: ${user.balance["Oxygen-Tokens"]}`);
    console.log(`   Scrip: ${user.balance.Scrip}`);
    console.log(
      `📍 Sector: ${window.GalacticDatabase.sectors[user.sector].name}`
    );
    console.log(`🎖️ Clearance: ${user.clearance}`);
    console.log(`📊 Status: ${user.status}`);
  },
};

window.TransactionSystem = TransactionSystem;
