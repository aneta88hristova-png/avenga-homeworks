// ============== AUDIT SYSTEM ==============
const AuditSystem = {
  searchTransactions: function (criteria, index, results) {
    if (index >= window.GalacticDatabase.transactions.length) {
      console.log(`\n🔍 AUDIT SEARCH COMPLETE`);
      console.log(`   Found: ${results.length} transactions`);
      return this.generateReport(results);
    }

    const tx = window.GalacticDatabase.transactions[index];
    let match = true;

    if (
      criteria.userId &&
      tx.fromUser !== criteria.userId &&
      tx.toUser !== criteria.userId
    ) {
      match = false;
    }

    if (
      criteria.sector &&
      tx.fromSector !== criteria.sector &&
      tx.toSector !== criteria.sector
    ) {
      match = false;
    }

    if (criteria.status && tx.status !== criteria.status) {
      match = false;
    }

    if (criteria.minAmount && tx.amount < criteria.minAmount) {
      match = false;
    }

    if (criteria.maxAmount && tx.amount > criteria.maxAmount) {
      match = false;
    }

    if (match) {
      results.push(tx);
    }

    return this.searchTransactions(criteria, index + 1, results);
  },

  generateReport: function (transactions) {
    console.log("\n" + "=".repeat(60));
    console.log("📊 AUDIT REPORT");
    console.log("=".repeat(60));

    let totalAmount = 0;
    let totalTax = 0;

    const aggregate = function (index, totals) {
      if (index >= transactions.length) {
        return totals;
      }

      const tx = transactions[index];
      totals.amount += tx.amount;
      totals.tax += tx.tax || 0;

      if (!totals.bySector[tx.fromSector]) {
        totals.bySector[tx.fromSector] = 0;
      }
      totals.bySector[tx.fromSector]++;

      if (!totals.byStatus[tx.status]) {
        totals.byStatus[tx.status] = 0;
      }
      totals.byStatus[tx.status]++;

      return aggregate(index + 1, totals);
    };

    const totals = aggregate(0, {
      amount: 0,
      tax: 0,
      bySector: {},
      byStatus: {},
    });

    console.log(`📈 TOTAL TRANSACTIONS: ${transactions.length}`);
    console.log(`💰 TOTAL AMOUNT: ${totals.amount.toFixed(2)}`);
    console.log(`🏛️ TOTAL TAX: ${totals.tax.toFixed(2)}`);

    console.log("\n📍 BY SECTOR:");
    Object.keys(totals.bySector).forEach((sector) => {
      console.log(`   ${sector}: ${totals.bySector[sector]} transactions`);
    });

    console.log("\n📊 BY STATUS:");
    Object.keys(totals.byStatus).forEach((status) => {
      console.log(`   ${status}: ${totals.byStatus[status]} transactions`);
    });

    console.log("\n📋 RECENT TRANSACTIONS:");
    const recent = transactions.slice(-5).reverse();
    recent.forEach((tx) => {
      console.log(`   ${tx.id}: ${tx.amount} ${tx.currency} (${tx.status})`);
    });

    return {
      transactionCount: transactions.length,
      totalAmount: totals.amount,
      totalTax: totals.tax,
      bySector: totals.bySector,
      byStatus: totals.byStatus,
    };
  },

  getUserAudit: function (userId) {
    console.log(`\n🔍 AUDIT FOR USER: ${userId}`);

    const user = window.SearchEngine.findUserById(userId, 0);

    if (!user) {
      console.log("❌ User not found");
      return;
    }

    console.log(`👤 ${user.username}`);
    console.log(`📍 ${window.GalacticDatabase.sectors[user.sector].name}`);
    console.log(`🎖️ ${user.clearance}`);
    console.log(`📊 Status: ${user.status}`);

    const userTx = window.SearchEngine.searchTransactions(userId, 0, []);

    console.log(`\n📋 TRANSACTION HISTORY:`);
    console.log(`   Total transactions: ${userTx.length}`);

    let sent = 0;
    let received = 0;
    let taxPaid = 0;

    const calculate = function (index, totals) {
      if (index >= userTx.length) {
        return totals;
      }

      const tx = userTx[index];

      if (tx.fromUser === userId) {
        totals.sent += tx.amount;
        totals.tax += tx.tax || 0;
      } else {
        totals.received += tx.amount;
      }

      return calculate(index + 1, totals);
    };

    const totals = calculate(0, { sent: 0, received: 0, tax: 0 });

    console.log(`   Total sent: ${totals.sent.toFixed(2)}`);
    console.log(`   Total received: ${totals.received.toFixed(2)}`);
    console.log(`   Total tax paid: ${totals.tax.toFixed(2)}`);
    console.log(
      `   Net balance: ${(totals.received - totals.sent).toFixed(2)}`
    );

    return {
      user: user,
      transactions: userTx,
      totals: totals,
    };
  },
};

window.AuditSystem = AuditSystem;
