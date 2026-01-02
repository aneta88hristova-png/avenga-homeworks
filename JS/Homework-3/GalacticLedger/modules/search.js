// ============== SEARCH ENGINE ==============
const SearchEngine = {
  binarySearchUser: function (targetId, left, right) {
    if (left > right) {
      console.log(`🔍 User ${targetId} NOT FOUND`);
      return null;
    }

    const mid = Math.floor((left + right) / 2);
    const user = window.GalacticDatabase.users[mid];

    console.log(`🔍 Checking index ${mid}: ${user.id}`);

    if (user.id === targetId) {
      console.log(`✅ Found: ${user.username}`);

      if (user.status === "DELETED") {
        console.log("🚫 Account deleted");
      } else if (user.locked) {
        console.log("🔒 Account locked");
      } else if (user.status === "PENDING") {
        console.log("⏳ Account pending");
      } else {
        console.log(`✅ Account active`);
      }

      return user;
    }

    if (user.id < targetId) {
      console.log("   ➡️ Searching right");
      return this.binarySearchUser(targetId, mid + 1, right);
    } else {
      console.log("   ⬅️ Searching left");
      return this.binarySearchUser(targetId, left, mid - 1);
    }
  },

  searchTransactions: function (userId, index, results) {
    if (index >= window.GalacticDatabase.transactions.length) {
      return results;
    }

    const tx = window.GalacticDatabase.transactions[index];

    if (tx.fromUser === userId || tx.toUser === userId) {
      results.push(tx);
    }

    return this.searchTransactions(userId, index + 1, results);
  },

  findUserById: function (userId, index) {
    if (index >= window.GalacticDatabase.users.length) return null;
    if (window.GalacticDatabase.users[index].id === userId) {
      return window.GalacticDatabase.users[index];
    }
    return this.findUserById(userId, index + 1);
  },
};

window.SearchEngine = SearchEngine;
