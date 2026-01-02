// ============== INTEREST SYSTEM ==============
const InterestSystem = {
  rates: {
    ADMIN: 0.08,
    COMMAND: 0.06,
    SCIENCE: 0.05,
    SECURITY: 0.04,
    ENGINEER: 0.045,
    MINER: 0.03,
    HAULER: 0.035,
    CIVILIAN: 0.02,
  },

  calculateCompound: function (
    principal,
    annualRate,
    months,
    currentMonth,
    log
  ) {
    if (currentMonth > months) {
      console.log(`📈 Calculation complete for ${months} months`);
      return {
        finalAmount: principal,
        totalInterest: principal - arguments[3],
        monthlyLog: log,
      };
    }

    const monthlyRate = annualRate / 12;
    const interest = principal * monthlyRate;
    const newPrincipal = principal + interest;

    const monthLog = {
      month: currentMonth,
      start: principal,
      interest: interest,
      end: newPrincipal,
    };

    log.push(monthLog);

    console.log(`📅 Month ${currentMonth}:`);
    console.log(`   Start: ${principal.toFixed(2)}`);
    console.log(`   Interest: ${interest.toFixed(2)}`);
    console.log(`   End: ${newPrincipal.toFixed(2)}`);

    return this.calculateCompound(
      newPrincipal,
      annualRate,
      months,
      currentMonth + 1,
      log,
      arguments[3]
    );
  },

  getUserInterest: function (userId) {
    console.log("\n" + "=".repeat(50));
    console.log("📈 INTEREST CALCULATION");
    console.log("=".repeat(50));

    const user = window.SearchEngine.findUserById(userId, 0);

    if (!user) {
      console.log("❌ User not found");
      return;
    }

    const baseRate = this.rates[user.clearance] || 0.02;
    let rate = baseRate;

    console.log(`👤 User: ${user.username}`);
    console.log(`🎖️ Clearance: ${user.clearance}`);
    console.log(`📍 Sector: ${user.sector}`);
    console.log(`💰 Balance: ${user.balance.Credits} Credits`);
    console.log(`📊 Base rate: ${(baseRate * 100).toFixed(2)}%`);

    if (user.sector === "MARS") {
      rate += 0.01;
      console.log(`   Mars bonus: +1.00%`);
    } else if (user.sector === "BELT") {
      rate += 0.015;
      console.log(`   Belt bonus: +1.50%`);
    }

    console.log(`📈 Final rate: ${(rate * 100).toFixed(2)}% annual`);

    const result = this.calculateCompound(
      user.balance.Credits,
      rate,
      12,
      1,
      [],
      user.balance.Credits
    );

    console.log("\n" + "=".repeat(50));
    console.log("📊 FINAL RESULTS");
    console.log("=".repeat(50));
    console.log(`💰 Final amount: ${result.finalAmount.toFixed(2)} Credits`);
    console.log(
      `📈 Total interest: ${result.totalInterest.toFixed(2)} Credits`
    );
    console.log(
      `📊 ROI: ${((result.totalInterest / user.balance.Credits) * 100).toFixed(
        2
      )}%`
    );

    return result;
  },
};

window.InterestSystem = InterestSystem;
