// ============== SECURITY SYSTEM ==============
const SecuritySystem = {
    currentUser: null,
    sessionLocked: false,
    
    authenticate: function() {
        console.log("\n🔐 MULTI-FACTOR AUTHENTICATION");
        console.log("=".repeat(40));
        
        const username = prompt("Username:");
        const user = this.findUser(username, 0);
        
        if (!user) {
            console.log("❌ User not found");
            return false;
        }
        
        if (user.locked) {
            console.log("🔒 Account locked!");
            return false;
        }
        
        const pin = prompt("PIN:");
        if (user.pin !== pin) {
            console.log("❌ Wrong PIN");
            return false;
        }
        
        const secret = prompt("Secret word:");
        if (user.secret !== secret) {
            console.log("❌ Wrong secret word");
            return false;
        }
        
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const answer = prompt(`CAPTCHA: ${num1} + ${num2} = ?`);
        
        if (parseInt(answer) !== num1 + num2) {
            console.log("❌ Wrong CAPTCHA");
            return false;
        }
        
        this.currentUser = user;
        console.log(`✅ Welcome ${user.username}!`);
        console.log(`📍 Sector: ${window.GalacticDatabase.sectors[user.sector].name}`);
        console.log(`🎖️ Clearance: ${user.clearance}`);
        return true;
    },
    
    findUser: function(username, index) {
        if (index >= window.GalacticDatabase.users.length) return null;
        if (window.GalacticDatabase.users[index].username === username) {
            return window.GalacticDatabase.users[index];
        }
        return this.findUser(username, index + 1);
    },
    
    logout: function() {
        this.currentUser = null;
        console.log("👋 Logged out");
    }
};

window.SecuritySystem = SecuritySystem;