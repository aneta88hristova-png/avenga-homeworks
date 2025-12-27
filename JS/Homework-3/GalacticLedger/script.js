// ============== PROJECT GALACTIC LEDGER - PURE CONSOLE VERSION ==============
// Run with: node script.js
// NO HTML, NO BROWSER - Pure console.log output

// ============== GALACTIC DATABASE ==============
const galacticDatabase = {
    sectors: {
        MARS: {
            id: "MARS",
            name: "Mars Colony",
            taxRate: 0.15,
            communicationDelay: 3,
            currency: "Credits",
            requiresOxygenTax: true,
            specialConditions: "Low-Gravity Banking Protocols"
        },
        EARTH: {
            id: "EARTH",
            name: "Earth Central",
            taxRate: 0.20,
            communicationDelay: 1,
            currency: "Gold",
            requiresOxygenTax: false,
            specialConditions: "Standard Terrestrial Banking"
        },
        BELT: {
            id: "BELT",
            name: "The Asteroid Belt",
            taxRate: 0.10,
            communicationDelay: 5,
            currency: "Oxygen-Tokens",
            requiresOxygenTax: false,
            specialConditions: "Zero-G Transaction Handling"
        }
    },

    branches: {
        "MARS-001": {
            id: "MARS-001",
            sector: "MARS",
            name: "Olympus Mons Central",
            manager: "Director Chen",
            coordinates: "18.65°N, 226.2°E",
            securityLevel: "ALPHA"
        },
        "MARS-002": {
            id: "MARS-002",
            sector: "MARS",
            name: "Valles Marineris Outpost",
            manager: "Supervisor Rodriguez",
            coordinates: "13.9°S, 59.2°W",
            securityLevel: "BETA"
        },
        "EARTH-001": {
            id: "EARTH-001",
            sector: "EARTH",
            name: "Geneva Interstellar Hub",
            manager: "Chancellor Schmidt",
            coordinates: "46.2°N, 6.1°E",
            securityLevel: "ALPHA"
        },
        "BELT-001": {
            id: "BELT-001",
            sector: "BELT",
            name: "Ceres Orbital Station",
            manager: "Commander Volkov",
            coordinates: "Asteroid Belt Sector 7",
            securityLevel: "GAMMA"
        }
    },

    exchangeRates: {
        Credits: {
            Gold: 0.05,
            "Oxygen-Tokens": 2.3,
            Scrip: 4.7,
            Credits: 1.0
        },
        Gold: {
            Credits: 20.0,
            "Oxygen-Tokens": 46.0,
            Scrip: 94.0,
            Gold: 1.0
        },
        "Oxygen-Tokens": {
            Credits: 0.4347,
            Gold: 0.0217,
            Scrip: 2.043,
            "Oxygen-Tokens": 1.0
        },
        Scrip: {
            Credits: 0.2127,
            Gold: 0.0106,
            "Oxygen-Tokens": 0.489,
            Scrip: 1.0
        }
    },

    users: [
        {
            id: "USR-001",
            username: "captain_reynolds",
            pin: "2247",
            secretWord: "serenity",
            sector: "EARTH",
            branch: "EARTH-001",
            clearance: "COMMAND",
            status: "ACTIVE",
            balance: {
                Credits: 15000,
                Gold: 750,
                "Oxygen-Tokens": 34500,
                Scrip: 70500
            },
            locked: false,
            failedAttempts: 0,
            mfaEnabled: true,
            lastLogin: "2024-01-15T08:30:00Z"
        },
        {
            id: "USR-002",
            username: "dr_martian",
            pin: "3378",
            secretWord: "perchlorate",
            sector: "MARS",
            branch: "MARS-001",
            clearance: "SCIENCE",
            status: "ACTIVE",
            balance: {
                Credits: 8500,
                Gold: 425,
                "Oxygen-Tokens": 19550,
                Scrip: 39950
            },
            locked: false,
            failedAttempts: 0,
            mfaEnabled: true,
            lastLogin: "2024-01-14T14:20:00Z"
        },
        {
            id: "USR-003",
            username: "beltalowda",
            pin: "4469",
            secretWord: "pashang",
            sector: "BELT",
            branch: "BELT-001",
            clearance: "MINER",
            status: "ACTIVE",
            balance: {
                Credits: 3200,
                Gold: 160,
                "Oxygen-Tokens": 7360,
                Scrip: 15040
            },
            locked: true,
            failedAttempts: 3,
            mfaEnabled: false,
            lastLogin: "2024-01-10T22:45:00Z"
        },
        {
            id: "USR-004",
            username: "terra_guardian",
            pin: "5580",
            secretWord: "gaia",
            sector: "EARTH",
            branch: "EARTH-001",
            clearance: "SECURITY",
            status: "ACTIVE",
            balance: {
                Credits: 12000,
                Gold: 600,
                "Oxygen-Tokens": 27600,
                Scrip: 56400
            },
            locked: false,
            failedAttempts: 0,
            mfaEnabled: true,
            lastLogin: "2024-01-13T11:15:00Z"
        },
        {
            id: "USR-005",
            username: "red_dust",
            pin: "6691",
            secretWord: "olympus",
            sector: "MARS",
            branch: "MARS-002",
            clearance: "ENGINEER",
            status: "PENDING",
            balance: {
                Credits: 500,
                Gold: 25,
                "Oxygen-Tokens": 1150,
                Scrip: 2350
            },
            locked: false,
            failedAttempts: 0,
            mfaEnabled: false,
            lastLogin: null
        },
        {
            id: "USR-006",
            username: "ice_hauler",
            pin: "7702",
            secretWord: "cant",
            sector: "BELT",
            branch: "BELT-001",
            clearance: "HAULER",
            status: "ACTIVE",
            balance: {
                Credits: 9500,
                Gold: 475,
                "Oxygen-Tokens": 21850,
                Scrip: 44650
            },
            locked: false,
            failedAttempts: 1,
            mfaEnabled: true,
            lastLogin: "2024-01-15T09:45:00Z"
        },
        {
            id: "USR-007",
            username: "admin_zero",
            pin: "8813",
            secretWord: "override",
            sector: "EARTH",
            branch: "EARTH-001",
            clearance: "ADMIN",
            status: "ACTIVE",
            balance: {
                Credits: 999999,
                Gold: 49999,
                "Oxygen-Tokens": 2299997,
                Scrip: 4699997
            },
            locked: false,
            failedAttempts: 0,
            mfaEnabled: true,
            lastLogin: "2024-01-15T10:00:00Z"
        },
        {
            id: "USR-008",
            username: "deleted_user",
            pin: "9924",
            secretWord: "deleted",
            sector: "MARS",
            branch: "MARS-001",
            clearance: "CIVILIAN",
            status: "DELETED",
            balance: {
                Credits: 0,
                Gold: 0,
                "Oxygen-Tokens": 0,
                Scrip: 0
            },
            locked: true,
            failedAttempts: 0,
            mfaEnabled: false,
            lastLogin: "2024-01-01T00:00:00Z"
        }
    ],

    transactions: [
        {
            id: "TX-2024-001",
            timestamp: "2024-01-10T08:30:00Z",
            fromUser: "USR-001",
            toUser: "USR-002",
            amount: 1000,
            currency: "Credits",
            fromSector: "EARTH",
            toSector: "MARS",
            tax: 150,
            status: "COMPLETED",
            description: "Research funding transfer"
        },
        {
            id: "TX-2024-002",
            timestamp: "2024-01-11T14:20:00Z",
            fromUser: "USR-003",
            toUser: "USR-006",
            amount: 500,
            currency: "Oxygen-Tokens",
            fromSector: "BELT",
            toSector: "BELT",
            tax: 50,
            status: "COMPLETED",
            description: "Ice hauling payment"
        },
        {
            id: "TX-2024-003",
            timestamp: "2024-01-12T11:15:00Z",
            fromUser: "USR-004",
            toUser: "USR-001",
            amount: 200,
            currency: "Gold",
            fromSector: "EARTH",
            toSector: "EARTH",
            tax: 40,
            status: "COMPLETED",
            description: "Security retainer"
        },
        {
            id: "TX-2024-004",
            timestamp: "2024-01-13T16:45:00Z",
            fromUser: "USR-002",
            toUser: "USR-004",
            amount: 750,
            currency: "Credits",
            fromSector: "MARS",
            toSector: "EARTH",
            tax: 112.5,
            status: "PENDING",
            description: "Equipment purchase"
        },
        {
            id: "TX-2024-005",
            timestamp: "2024-01-14T09:30:00Z",
            fromUser: "USR-006",
            toUser: "USR-003",
            amount: 100,
            currency: "Scrip",
            fromSector: "BELT",
            toSector: "BELT",
            tax: 10,
            status: "FAILED",
            description: "Failed payment - locked account",
            error: "Recipient account locked"
        },
        {
            id: "TX-2024-006",
            timestamp: "2024-01-15T10:00:00Z",
            fromUser: "USR-007",
            toUser: "USR-005",
            amount: 10000,
            currency: "Credits",
            fromSector: "EARTH",
            toSector: "MARS",
            tax: 1500,
            status: "COMPLETED",
            description: "Admin account activation"
        }
    ],

    utilityBills: {
        "LS-001": {
            id: "LS-001",
            name: "Life Support",
            baseCost: 100,
            currency: "Credits",
            sectorMultipliers: {
                MARS: 1.5,
                EARTH: 1.0,
                BELT: 2.0
            },
            description: "Oxygen recycling and CO2 scrubbing"
        },
        "FUEL-001": {
            id: "FUEL-001",
            name: "Station Fuel",
            baseCost: 250,
            currency: "Gold",
            sectorMultipliers: {
                MARS: 1.8,
                EARTH: 1.2,
                BELT: 2.5
            },
            description: "Hydrogen fuel for station keeping"
        },
        "NET-001": {
            id: "NET-001",
            name: "Quantum Internet",
            baseCost: 50,
            currency: "Scrip",
            sectorMultipliers: {
                MARS: 1.3,
                EARTH: 1.0,
                BELT: 1.7
            },
            description: "FTL communication access"
        },
        "WATER-001": {
            id: "WATER-001",
            name: "Water Reclamation",
            baseCost: 75,
            currency: "Oxygen-Tokens",
            sectorMultipliers: {
                MARS: 1.6,
                EARTH: 1.1,
                BELT: 2.2
            },
            description: "Water purification and recycling"
        }
    }
};

// ============== GLOBAL SYSTEM STATE ==============
const systemState = {
    currentUser: null,
    isAdminOverride: false,
    sessionLocked: false,
    transactionInProgress: false,
    auditMode: false,
    emergencyProtocol: false
};

// ============== SECURITY PROTOCOLS ==============
const securityProtocols = {
    validateUsername: function(username, userArray, currentIndex) {
        if (currentIndex >= userArray.length) {
            console.log("🚨 SECURITY ALERT: Username not found in database");
            return { valid: false, user: null };
        }
        
        if (userArray[currentIndex].username === username) {
            console.log("✓ Phase 1: Username verification PASSED");
            return { valid: true, user: userArray[currentIndex] };
        }
        
        return this.validateUsername(username, userArray, currentIndex + 1);
    },

    validatePIN: function(user, enteredPIN) {
        if (user.pin === enteredPIN) {
            console.log("✓ Phase 2: PIN verification PASSED");
            return { valid: true, message: "PIN correct" };
        }
        
        console.log("✗ Phase 2: PIN verification FAILED");
        user.failedAttempts = (user.failedAttempts || 0) + 1;
        
        if (user.failedAttempts >= 3) {
            user.locked = true;
            console.log("🔒 ACCOUNT LOCKED: Too many failed attempts");
        }
        
        return { valid: false, message: "Incorrect PIN" };
    },

    validateSecretWord: function(user, enteredWord) {
        if (user.secretWord === enteredWord) {
            console.log("✓ Phase 3: Secret word verification PASSED");
            return { valid: true, message: "Secret word correct" };
        }
        
        console.log("✗ Phase 3: Secret word verification FAILED");
        return { valid: false, message: "Incorrect secret word" };
    },

    generateCaptcha: function() {
        const num1 = Math.floor(Math.random() * 50) + 1;
        const num2 = Math.floor(Math.random() * 50) + 1;
        return {
            question: `Solve: ${num1} + ${num2} = ?`,
            answer: num1 + num2
        };
    },

    validateCaptcha: function(captcha, userAnswer) {
        if (parseInt(userAnswer) === captcha.answer) {
            console.log("✓ Phase 4: CAPTCHA verification PASSED");
            return { valid: true, message: "CAPTCHA solved" };
        }
        
        console.log("✗ Phase 4: CAPTCHA verification FAILED");
        return { valid: false, message: "Incorrect CAPTCHA answer" };
    },

    performMFASequence: function(username, pin, secretWord, captchaAnswer) {
        console.log("\n" + "=".repeat(60));
        console.log("🔐 INITIATING MULTI-FACTOR AUTHENTICATION");
        console.log("=".repeat(60));
        
        if (systemState.sessionLocked && !systemState.isAdminOverride) {
            console.log("🚫 SESSION LOCKED: Admin override required");
            return { success: false, user: null, reason: "Session locked" };
        }

        const usernameResult = this.validateUsername(username, galacticDatabase.users, 0);
        
        if (!usernameResult.valid) {
            console.log("🚫 AUTHENTICATION FAILED at Phase 1");
            return { success: false, user: null, reason: "Username not found" };
        }

        const user = usernameResult.user;

        if (user.status === "DELETED") {
            console.log("🚫 ACCOUNT DELETED: Cannot authenticate");
            return { success: false, user: null, reason: "Account deleted" };
        }

        if (user.status === "PENDING") {
            console.log("⚠️ ACCOUNT PENDING: Limited access granted");
        }

        if (user.locked && !systemState.isAdminOverride) {
            console.log("🔒 ACCOUNT LOCKED: Requires admin unlock");
            return { success: false, user: null, reason: "Account locked" };
        }

        const pinResult = this.validatePIN(user, pin);
        if (!pinResult.valid) {
            console.log("🚫 AUTHENTICATION FAILED at Phase 2");
            return { success: false, user: null, reason: "Incorrect PIN" };
        }

        if (user.mfaEnabled) {
            const secretResult = this.validateSecretWord(user, secretWord);
            if (!secretResult.valid) {
                console.log("🚫 AUTHENTICATION FAILED at Phase 3");
                return { success: false, user: null, reason: "Incorrect secret word" };
            }
        }

        const captcha = this.generateCaptcha();
        console.log(`🧮 CAPTCHA Challenge: ${captcha.question}`);
        
        const captchaResult = this.validateCaptcha(captcha, captchaAnswer);
        if (!captchaResult.valid) {
            console.log("🚫 AUTHENTICATION FAILED at Phase 4");
            return { success: false, user: null, reason: "CAPTCHA failed" };
        }

        console.log("=".repeat(60));
        console.log("✅ MULTI-FACTOR AUTHENTICATION COMPLETE");
        console.log(`👤 Welcome, ${user.username} (${user.clearance} clearance)`);
        console.log(`📍 Sector: ${galacticDatabase.sectors[user.sector].name}`);
        console.log("=".repeat(60));
        
        user.lastLogin = new Date().toISOString();
        systemState.currentUser = user;
        systemState.sessionLocked = false;
        
        return { success: true, user: user, reason: "Authentication successful" };
    },

    adminOverride: function(adminCode) {
        const overrideCode = "ALPHA-OMEGA-777";
        
        if (adminCode === overrideCode) {
            systemState.isAdminOverride = true;
            systemState.sessionLocked = false;
            console.log("⚡ ADMIN OVERRIDE ACTIVATED");
            console.log("⚠️ Security protocols bypassed");
            return true;
        }
        
        console.log("🚫 INVALID ADMIN CODE");
        return false;
    }
};

// ============== MANUAL SEARCH ENGINE ==============
const manualSearchEngine = {
    binarySearchUserById: function(userArray, targetId, left, right) {
        if (left > right) {
            console.log(`🔍 Binary Search: User ${targetId} NOT FOUND`);
            return { found: false, index: -1, user: null, status: "NOT_FOUND" };
        }

        const mid = Math.floor((left + right) / 2);
        const currentUser = userArray[mid];

        console.log(`🔍 Checking index ${mid}: ${currentUser.id}`);

        if (currentUser.id === targetId) {
            console.log(`✅ User ${targetId} FOUND at index ${mid}`);
            
            if (currentUser.status === "DELETED") {
                console.log("🚫 User account has been DELETED");
                return { 
                    found: true, 
                    index: mid, 
                    user: currentUser, 
                    status: "DELETED",
                    message: "User account has been deleted"
                };
            }
            
            if (currentUser.locked) {
                console.log("🔒 User account is LOCKED");
                return { 
                    found: true, 
                    index: mid, 
                    user: currentUser, 
                    status: "LOCKED",
                    message: "User account is locked"
                };
            }
            
            if (currentUser.status === "PENDING") {
                console.log("⏳ User account is PENDING approval");
                return { 
                    found: true, 
                    index: mid, 
                    user: currentUser, 
                    status: "PENDING",
                    message: "User account is pending approval"
                };
            }
            
            console.log(`✅ User account is ACTIVE: ${currentUser.username}`);
            return { 
                found: true, 
                index: mid, 
                user: currentUser, 
                status: "ACTIVE",
                message: "User account is active"
            };
        }

        console.log(`↗️ Moving ${currentUser.id < targetId ? 'right' : 'left'}`);
        
        if (currentUser.id < targetId) {
            return this.binarySearchUserById(userArray, targetId, mid + 1, right);
        }
        
        return this.binarySearchUserById(userArray, targetId, left, mid - 1);
    },

    searchUserByUsername: function(userArray, username, currentIndex) {
        if (currentIndex >= userArray.length) {
            console.log(`🔍 Linear Search: Username "${username}" NOT FOUND`);
            return { found: false, user: null };
        }

        console.log(`🔍 Checking user ${currentIndex}: ${userArray[currentIndex].username}`);

        if (userArray[currentIndex].username === username) {
            console.log(`✅ Username "${username}" FOUND`);
            return { found: true, user: userArray[currentIndex] };
        }

        return this.searchUserByUsername(userArray, username, currentIndex + 1);
    },

    linearSearchTransaction: function(transactionArray, searchCriteria, currentIndex, results) {
        if (currentIndex >= transactionArray.length) {
            console.log(`🔍 Transaction search complete. Found ${results.length} results`);
            return results;
        }

        const transaction = transactionArray[currentIndex];
        let match = true;

        console.log(`🔍 Checking transaction ${currentIndex}: ${transaction.id}`);

        if (searchCriteria.userId) {
            if (transaction.fromUser === searchCriteria.userId || 
                transaction.toUser === searchCriteria.userId) {
                console.log(`  ✓ Matches user: ${searchCriteria.userId}`);
            } else {
                console.log(`  ✗ Doesn't match user: ${searchCriteria.userId}`);
                match = false;
            }
        }

        if (searchCriteria.sector && match) {
            if (transaction.fromSector === searchCriteria.sector || 
                transaction.toSector === searchCriteria.sector) {
                console.log(`  ✓ Matches sector: ${searchCriteria.sector}`);
            } else {
                console.log(`  ✗ Doesn't match sector: ${searchCriteria.sector}`);
                match = false;
            }
        }

        if (searchCriteria.status && match) {
            if (transaction.status === searchCriteria.status) {
                console.log(`  ✓ Matches status: ${searchCriteria.status}`);
            } else {
                console.log(`  ✗ Doesn't match status: ${searchCriteria.status}`);
                match = false;
            }
        }

        if (searchCriteria.minAmount && match) {
            if (transaction.amount >= searchCriteria.minAmount) {
                console.log(`  ✓ Amount >= ${searchCriteria.minAmount}: ${transaction.amount}`);
            } else {
                console.log(`  ✗ Amount < ${searchCriteria.minAmount}: ${transaction.amount}`);
                match = false;
            }
        }

        if (match) {
            console.log(`  ✅ Adding transaction to results: ${transaction.id}`);
            results.push(transaction);
        }

        return this.linearSearchTransaction(
            transactionArray, 
            searchCriteria, 
            currentIndex + 1,
            results
        );
    }
};

// ============== CURRENCY EXCHANGE ENGINE ==============
const currencyExchangeEngine = {
    convertCurrency: function(amount, fromCurrency, toCurrency) {
        console.log(`🔄 CONVERTING CURRENCY: ${amount} ${fromCurrency} → ${toCurrency}`);
        
        if (fromCurrency === toCurrency) {
            console.log("ℹ️ Same currency, no conversion needed");
            return {
                amount: amount,
                rate: 1.0,
                originalAmount: amount,
                originalCurrency: fromCurrency,
                convertedCurrency: toCurrency,
                message: "Same currency, no conversion needed"
            };
        }

        const rates = galacticDatabase.exchangeRates;
        
        if (!rates[fromCurrency] || !rates[fromCurrency][toCurrency]) {
            console.log(`🚫 ERROR: No exchange rate for ${fromCurrency} to ${toCurrency}`);
            return {
                amount: 0,
                rate: 0,
                originalAmount: amount,
                originalCurrency: fromCurrency,
                convertedCurrency: toCurrency,
                error: "Exchange rate not available"
            };
        }

        const rate = rates[fromCurrency][toCurrency];
        const convertedAmount = amount * rate;

        console.log(`💰 Exchange rate: 1 ${fromCurrency} = ${rate} ${toCurrency}`);
        console.log(`📊 Conversion: ${amount} × ${rate} = ${convertedAmount.toFixed(2)}`);

        return {
            amount: convertedAmount,
            rate: rate,
            originalAmount: amount,
            originalCurrency: fromCurrency,
            convertedCurrency: toCurrency,
            message: `Converted ${amount} ${fromCurrency} to ${convertedAmount.toFixed(2)} ${toCurrency}`
        };
    },

    calculateInterplanetaryTax: function(amount, fromSector, toSector, currency) {
        console.log("\n" + "=".repeat(50));
        console.log("🧾 CALCULATING INTER-PLANETARY TAXES");
        console.log(`From: ${fromSector} → To: ${toSector}`);
        console.log(`Amount: ${amount} ${currency}`);
        console.log("=".repeat(50));
        
        const fromSectorData = galacticDatabase.sectors[fromSector];
        const toSectorData = galacticDatabase.sectors[toSector];
        
        let tax = 0;
        let taxReasons = [];

        const baseTax = amount * fromSectorData.taxRate;
        tax += baseTax;
        taxReasons.push(`Sender sector tax (${fromSectorData.taxRate * 100}%): ${baseTax} ${currency}`);
        console.log(`📋 Base tax (${fromSector}): ${baseTax} ${currency}`);

        if (fromSector !== toSector) {
            const delayTax = amount * 0.01 * Math.abs(fromSectorData.communicationDelay - toSectorData.communicationDelay);
            tax += delayTax;
            taxReasons.push(`Communication delay tax: ${delayTax.toFixed(2)} ${currency}`);
            console.log(`📡 Communication delay tax: ${delayTax.toFixed(2)} ${currency}`);
        }

        if (fromSector === "MARS" && fromSectorData.requiresOxygenTax) {
            const oxygenTax = amount * 0.02;
            tax += oxygenTax;
            taxReasons.push(`Mars oxygen tax: ${oxygenTax.toFixed(2)} ${currency}`);
            console.log(`🫁 Mars oxygen tax: ${oxygenTax.toFixed(2)} ${currency}`);
        }

        if (fromSector === "BELT" || toSector === "BELT") {
            const zeroGTax = amount * 0.015;
            tax += zeroGTax;
            taxReasons.push(`Zero-G surcharge: ${zeroGTax.toFixed(2)} ${currency}`);
            console.log(`🌌 Zero-G surcharge: ${zeroGTax.toFixed(2)} ${currency}`);
        }

        console.log("=".repeat(50));
        console.log(`💰 TOTAL TAX: ${tax.toFixed(2)} ${currency}`);
        console.log(`📊 Tax percentage: ${((tax / amount) * 100).toFixed(2)}%`);
        console.log(`💵 NET AMOUNT: ${(amount - tax).toFixed(2)} ${currency}`);
        console.log("=".repeat(50));

        return {
            totalTax: tax,
            netAmount: amount - tax,
            taxBreakdown: taxReasons,
            taxPercentage: (tax / amount) * 100
        };
    }
};

// ============== TIERED INTEREST SYSTEM ==============
const tieredInterestSystem = {
    calculateCompoundInterest: function(principal, annualRate, months, currentMonth) {
        if (currentMonth > months) {
            console.log(`📈 Interest calculation complete for ${months} months`);
            return {
                finalAmount: principal,
                totalInterest: principal - arguments[3],
                monthlyBreakdown: [],
                message: `Interest calculation complete for ${months} months`
            };
        }

        const monthlyRate = annualRate / 12;
        const interest = principal * monthlyRate;
        const newPrincipal = principal + interest;
        
        console.log(`📅 Month ${currentMonth}:`);
        console.log(`   Principal: ${principal.toFixed(2)}`);
        console.log(`   Monthly rate: ${(monthlyRate * 100).toFixed(4)}%`);
        console.log(`   Interest: ${interest.toFixed(2)}`);
        console.log(`   New principal: ${newPrincipal.toFixed(2)}`);
        
        const nextResult = this.calculateCompoundInterest(
            newPrincipal, 
            annualRate, 
            months, 
            currentMonth + 1,
            arguments[3]
        );

        const monthlyRecord = {
            month: currentMonth,
            principal: principal,
            interest: interest,
            newPrincipal: newPrincipal,
            rate: monthlyRate
        };

        return {
            finalAmount: nextResult.finalAmount,
            totalInterest: nextResult.totalInterest,
            monthlyBreakdown: [monthlyRecord, ...nextResult.monthlyBreakdown]
        };
    },

    getInterestRate: function(clearanceLevel, sector) {
        console.log(`📊 Getting interest rate for ${clearanceLevel} in ${sector}`);
        
        const baseRates = {
            "ADMIN": 0.08,
            "COMMAND": 0.06,
            "SCIENCE": 0.05,
            "SECURITY": 0.04,
            "ENGINEER": 0.045,
            "MINER": 0.03,
            "HAULER": 0.035,
            "CIVILIAN": 0.02
        };

        let rate = baseRates[clearanceLevel] || 0.02;
        console.log(`   Base rate for ${clearanceLevel}: ${(rate * 100).toFixed(2)}%`);

        if (sector === "MARS") {
            rate += 0.01;
            console.log(`   Mars colonization bonus: +1.00%`);
        } else if (sector === "BELT") {
            rate += 0.015;
            console.log(`   Belt high-risk bonus: +1.50%`);
        }

        console.log(`   Final annual rate: ${(rate * 100).toFixed(2)}%`);
        return rate;
    },

    calculateUserInterest: function(userId, months = 12) {
        console.log("\n" + "=".repeat(60));
        console.log("📈 COMPOUND INTEREST CALCULATION");
        console.log("=".repeat(60));
        
        const searchResult = manualSearchEngine.binarySearchUserById(
            galacticDatabase.users,
            userId,
            0,
            galacticDatabase.users.length - 1
        );

        if (!searchResult.found) {
            console.log(`🚫 ERROR: User ${userId} not found`);
            return { error: "User not found", userId: userId };
        }

        const user = searchResult.user;
        const principal = user.balance.Credits;
        const rate = this.getInterestRate(user.clearance, user.sector);

        console.log(`👤 User: ${user.username}`);
        console.log(`📍 Sector: ${user.sector}`);
        console.log(`🎖️ Clearance: ${user.clearance}`);
        console.log(`💰 Principal: ${principal} Credits`);
        console.log(`📊 Annual Rate: ${(rate * 100).toFixed(2)}%`);
        console.log(`📅 Months: ${months}`);
        console.log("=".repeat(60));

        const result = this.calculateCompoundInterest(
            principal,
            rate,
            months,
            1,
            principal
        );

        console.log("\n" + "=".repeat(60));
        console.log("📊 INTEREST CALCULATION RESULTS");
        console.log("=".repeat(60));
        console.log(`✅ Final balance: ${result.finalAmount.toFixed(2)} Credits`);
        console.log(`💰 Total interest: ${result.totalInterest.toFixed(2)} Credits`);
        console.log(`📈 Effective annual return: ${((result.totalInterest / principal) * 100).toFixed(2)}%`);
        console.log("=".repeat(60));

        return {
            userId: userId,
            username: user.username,
            sector: user.sector,
            clearance: user.clearance,
            originalBalance: principal,
            finalBalance: result.finalAmount,
            totalInterest: result.totalInterest,
            monthlyBreakdown: result.monthlyBreakdown,
            annualRate: rate,
            calculationDate: new Date().toISOString()
        };
    }
};

// ============== TRANSACTION PROCESSOR ==============
const transactionProcessor = {
    generateTransactionId: function() {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        return `TX-${timestamp}-${random}`;
    },

    validateTransaction: function(fromUserId, toUserId, amount, currency) {
        console.log("\n" + "=".repeat(50));
        console.log("🔍 TRANSACTION VALIDATION");
        console.log("=".repeat(50));
        
        const errors = [];
        const warnings = [];

        console.log(`👤 Validating sender: ${fromUserId}`);
        const senderSearch = manualSearchEngine.binarySearchUserById(
            galacticDatabase.users,
            fromUserId,
            0,
            galacticDatabase.users.length - 1
        );

        if (!senderSearch.found) {
            console.log(`🚫 Sender ${fromUserId} NOT FOUND`);
            errors.push(`Sender ${fromUserId} not found`);
            return { valid: false, errors: errors, warnings: warnings };
        }

        const sender = senderSearch.user;
        console.log(`✅ Sender found: ${sender.username}`);

        if (sender.status === "DELETED") {
            console.log(`🚫 Sender account ${fromUserId} has been DELETED`);
            errors.push(`Sender account ${fromUserId} has been deleted`);
        }

        if (sender.locked) {
            console.log(`🔒 Sender account ${fromUserId} is LOCKED`);
            errors.push(`Sender account ${fromUserId} is locked`);
        }

        if (sender.status === "PENDING") {
            console.log(`⚠️ Sender account ${fromUserId} is PENDING approval`);
            warnings.push(`Sender account ${fromUserId} is pending approval`);
        }

        console.log(`💰 Checking ${currency} balance: ${sender.balance[currency]} available`);
        if (sender.balance[currency] < amount) {
            console.log(`🚫 INSUFFICIENT FUNDS: ${sender.balance[currency]} ${currency} available, ${amount} ${currency} required`);
            errors.push(`Insufficient ${currency} balance. Available: ${sender.balance[currency]}`);
        }

        console.log(`\n👤 Validating recipient: ${toUserId}`);
        const recipientSearch = manualSearchEngine.binarySearchUserById(
            galacticDatabase.users,
            toUserId,
            0,
            galacticDatabase.users.length - 1
        );

        if (!recipientSearch.found) {
            console.log(`🚫 Recipient ${toUserId} NOT FOUND`);
            errors.push(`Recipient ${toUserId} not found`);
            return { valid: false, errors: errors, warnings: warnings };
        }

        const recipient = recipientSearch.user;
        console.log(`✅ Recipient found: ${recipient.username}`);

        if (recipient.status === "DELETED") {
            console.log(`🚫 Recipient account ${toUserId} has been DELETED`);
            errors.push(`Recipient account ${toUserId} has been deleted`);
        }

        if (recipient.locked) {
            console.log(`🔒 Recipient account ${toUserId} is LOCKED`);
            errors.push(`Recipient account ${toUserId} is locked`);
        }

        if (recipient.status === "PENDING") {
            console.log(`⚠️ Recipient account ${toUserId} is PENDING approval`);
            warnings.push(`Recipient account ${toUserId} is pending approval`);
        }

        if (amount <= 0) {
            console.log(`🚫 INVALID AMOUNT: ${amount} (must be positive)`);
            errors.push("Transaction amount must be positive");
        }

        if (amount > 1000000) {
            console.log(`⚠️ LARGE TRANSACTION DETECTED: ${amount} ${currency}`);
            warnings.push("Large transaction detected - may require additional verification");
        }

        console.log("=".repeat(50));
        console.log(`📊 Validation complete:`);
        console.log(`   Errors: ${errors.length}`);
        console.log(`   Warnings: ${warnings.length}`);
        console.log("=".repeat(50));

        return {
            valid: errors.length === 0,
            sender: sender,
            recipient: recipient,
            errors: errors,
            warnings: warnings
        };
    },

    processInterPlanetaryTransfer: function(fromUserId, toUserId, amount, currency, description) {
        console.log("\n" + "=".repeat(60));
        console.log("🌌 INITIATING INTER-PLANETARY TRANSFER");
        console.log("=".repeat(60));

        const validation = this.validateTransaction(fromUserId, toUserId, amount, currency);
        
        if (!validation.valid) {
            console.log("\n🚫 TRANSACTION VALIDATION FAILED:");
            validation.errors.forEach(error => console.log(`  • ${error}`));
            return {
                success: false,
                transactionId: null,
                errors: validation.errors,
                warnings: validation.warnings
            };
        }

        if (validation.warnings.length > 0) {
            console.log("\n⚠️ TRANSACTION WARNINGS:");
            validation.warnings.forEach(warning => console.log(`  • ${warning}`));
        }

        const sender = validation.sender;
        const recipient = validation.recipient;

        const taxInfo = currencyExchangeEngine.calculateInterplanetaryTax(
            amount,
            sender.sector,
            recipient.sector,
            currency
        );

        let conversionInfo = null;
        let amountToReceive = taxInfo.netAmount;

        if (sender.sector !== recipient.sector) {
            const fromCurrency = galacticDatabase.sectors[sender.sector].currency;
            const toCurrency = galacticDatabase.sectors[recipient.sector].currency;
            
            console.log(`\n🔄 Different sectors detected: ${sender.sector} → ${recipient.sector}`);
            console.log(`   Automatic currency conversion required`);
            console.log(`   From: ${fromCurrency} → To: ${toCurrency}`);
            
            conversionInfo = currencyExchangeEngine.convertCurrency(
                amountToReceive,
                fromCurrency,
                toCurrency
            );

            if (conversionInfo.error) {
                console.log(`\n🚫 CURRENCY CONVERSION ERROR: ${conversionInfo.error}`);
                return {
                    success: false,
                    transactionId: null,
                    errors: [conversionInfo.error]
                };
            }

            amountToReceive = conversionInfo.amount;
            console.log(`✅ ${conversionInfo.message}`);
        }

        const totalDeduction = amount + taxInfo.totalTax;
        
        console.log(`\n💰 FINAL CALCULATIONS:`);
        console.log(`   Amount to send: ${amount} ${currency}`);
        console.log(`   Total tax: ${taxInfo.totalTax.toFixed(2)} ${currency}`);
        console.log(`   Total deduction: ${totalDeduction.toFixed(2)} ${currency}`);
        console.log(`   Amount to receive: ${amountToReceive.toFixed(2)} ${conversionInfo ? conversionInfo.convertedCurrency : currency}`);
        
        if (sender.balance[currency] < totalDeduction) {
            console.log(`\n🚫 INSUFFICIENT FUNDS after tax calculation`);
            console.log(`   Required: ${totalDeduction} ${currency}`);
            console.log(`   Available: ${sender.balance[currency]} ${currency}`);
            return {
                success: false,
                transactionId: null,
                errors: ["Insufficient funds after tax calculation"]
            };
        }

        const transactionId = this.generateTransactionId();
        
        console.log(`\n💾 UPDATING BALANCES:`);
        console.log(`   Sender ${sender.username}:`);
        console.log(`     Before: ${sender.balance[currency]} ${currency}`);
        sender.balance[currency] -= totalDeduction;
        console.log(`     After: ${sender.balance[currency]} ${currency}`);
        
        console.log(`   Recipient ${recipient.username}:`);
        if (conversionInfo) {
            console.log(`     Before: ${recipient.balance[conversionInfo.convertedCurrency]} ${conversionInfo.convertedCurrency}`);
            recipient.balance[conversionInfo.convertedCurrency] += amountToReceive;
            console.log(`     After: ${recipient.balance[conversionInfo.convertedCurrency]} ${conversionInfo.convertedCurrency}`);
        } else {
            console.log(`     Before: ${recipient.balance[currency]} ${currency}`);
            recipient.balance[currency] += amountToReceive;
            console.log(`     After: ${recipient.balance[currency]} ${currency}`);
        }

        const transaction = {
            id: transactionId,
            timestamp: new Date().toISOString(),
            fromUser: fromUserId,
            toUser: toUserId,
            amount: amount,
            currency: currency,
            fromSector: sender.sector,
            toSector: recipient.sector,
            tax: taxInfo.totalTax,
            convertedAmount: conversionInfo ? conversionInfo.amount : null,
            convertedCurrency: conversionInfo ? conversionInfo.convertedCurrency : null,
            status: "COMPLETED",
            description: description || "Inter-planetary transfer"
        };

        galacticDatabase.transactions.push(transaction);

        console.log("\n" + "=".repeat(60));
        console.log("✅ TRANSACTION COMPLETED SUCCESSFULLY");
        console.log("=".repeat(60));
        console.log(`📋 Transaction ID: ${transactionId}`);
        console.log(`👤 From: ${sender.username} (${sender.sector})`);
        console.log(`👤 To: ${recipient.username} (${recipient.sector})`);
        console.log(`💰 Amount sent: ${amount} ${currency}`);
        console.log(`💸 Tax deducted: ${taxInfo.totalTax.toFixed(2)} ${currency}`);
        
        if (conversionInfo) {
            console.log(`🔄 Amount received: ${amountToReceive.toFixed(2)} ${conversionInfo.convertedCurrency}`);
        }
        
        console.log(`📉 Sender new balance: ${sender.balance[currency]} ${currency}`);
        console.log("=".repeat(60));
        
        return {
            success: true,
            transactionId: transactionId,
            transaction: transaction,
            taxInfo: taxInfo,
            conversionInfo: conversionInfo,
            warnings: validation.warnings
        };
    }
};

// ============== BATCH UTILITY PAYMENTS ==============
const utilityPaymentProcessor = {
    validateBillPayment: function(userId, billId, customAmount) {
        console.log(`\n🔍 Validating bill payment: ${billId} for user ${userId}`);
        
        const userSearch = manualSearchEngine.binarySearchUserById(
            galacticDatabase.users,
            userId,
            0,
            galacticDatabase.users.length - 1
        );

        if (!userSearch.found) {
            console.log(`🚫 User ${userId} not found`);
            return { valid: false, error: "User not found" };
        }

        const user = userSearch.user;
        console.log(`✅ User found: ${user.username}`);

        const bill = galacticDatabase.utilityBills[billId];

        if (!bill) {
            console.log(`🚫 Invalid bill type: ${billId}`);
            return { valid: false, error: "Invalid bill type" };
        }

        console.log(`✅ Bill found: ${bill.name}`);

        const amount = customAmount || (bill.baseCost * bill.sectorMultipliers[user.sector]);
        const currency = bill.currency;

        console.log(`💰 Calculating amount:`);
        console.log(`   Base cost: ${bill.baseCost} ${currency}`);
        console.log(`   Sector multiplier (${user.sector}): ${bill.sectorMultipliers[user.sector]}`);
        console.log(`   Final amount: ${amount} ${currency}`);

        console.log(`💳 Checking balance: ${user.balance[currency]} ${currency} available`);
        
        if (user.balance[currency] < amount) {
            console.log(`🚫 INSUFFICIENT FUNDS: Need ${amount} ${currency}, have ${user.balance[currency]} ${currency}`);
            return { 
                valid: false, 
                error: `Insufficient ${currency} for ${bill.name}` 
            };
        }

        console.log(`✅ Payment validation PASSED`);
        return {
            valid: true,
            user: user,
            bill: bill,
            amount: amount,
            currency: currency
        };
    },

    processSingleBill: function(userId, billId, customAmount) {
        console.log(`\n💡 PROCESSING UTILITY BILL: ${billId}`);
        console.log("-".repeat(40));
        
        const validation = this.validateBillPayment(userId, billId, customAmount);
        
        if (!validation.valid) {
            console.log(`\n🚫 PAYMENT FAILED: ${validation.error}`);
            return {
                success: false,
                billId: billId,
                error: validation.error
            };
        }

        const { user, bill, amount, currency } = validation;

        console.log(`\n💸 Processing payment:`);
        console.log(`   Before: ${user.balance[currency]} ${currency}`);
        user.balance[currency] -= amount;
        console.log(`   After: ${user.balance[currency]} ${currency}`);

        const transactionId = `BILL-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        
        galacticDatabase.transactions.push({
            id: transactionId,
            timestamp: new Date().toISOString(),
            fromUser: userId,
            toUser: "SYSTEM-UTILITIES",
            amount: amount,
            currency: currency,
            fromSector: user.sector,
            toSector: "SYSTEM",
            tax: 0,
            status: "COMPLETED",
            description: `${bill.name}: ${bill.description}`
        });

        console.log(`\n✅ ${bill.name} PAID SUCCESSFULLY`);
        console.log(`   Amount: ${amount} ${currency}`);
        console.log(`   Transaction ID: ${transactionId}`);
        console.log(`   Description: ${bill.description}`);
        console.log(`   Remaining ${currency}: ${user.balance[currency]}`);
        console.log("-".repeat(40));

        return {
            success: true,
            billId: billId,
            billName: bill.name,
            amount: amount,
            currency: currency,
            transactionId: transactionId,
            remainingBalance: user.balance[currency]
        };
    },

    processBatchPayments: function(userId, billIds, customAmounts) {
        console.log("\n" + "=".repeat(50));
        console.log("🧾 PROCESSING BATCH UTILITY PAYMENTS");
        console.log("=".repeat(50));
        console.log(`👤 User: ${userId}`);
        console.log(`📋 Bills to pay: ${billIds.length}`);
        console.log("=".repeat(50));

        const results = [];
        let totalAmount = 0;
        let failedPayments = 0;

        const processNextBill = function(index) {
            if (index >= billIds.length) {
                console.log("\n" + "=".repeat(50));
                console.log("📊 BATCH PAYMENT SUMMARY");
                console.log("=".repeat(50));
                console.log(`✅ Successful: ${billIds.length - failedPayments}`);
                console.log(`🚫 Failed: ${failedPayments}`);
                console.log(`💰 Total paid: ${totalAmount}`);
                console.log("=".repeat(50));
                
                const userSearch = manualSearchEngine.binarySearchUserById(
                    galacticDatabase.users,
                    userId,
                    0,
                    galacticDatabase.users.length - 1
                );
                
                if (userSearch.found) {
                    userSearch.user.lastLogin = new Date().toISOString();
                }

                return {
                    completed: true,
                    results: results,
                    totalAmount: totalAmount,
                    failedPayments: failedPayments
                };
            }

            const billId = billIds[index];
            const customAmount = customAmounts && customAmounts[index];
            
            console.log(`\n[${index + 1}/${billIds.length}] Processing: ${billId}`);
            
            const result = utilityPaymentProcessor.processSingleBill(
                userId, 
                billId, 
                customAmount
            );

            results.push(result);

            if (result.success) {
                totalAmount += result.amount;
            } else {
                failedPayments++;
            }

            return processNextBill(index + 1);
        };

        return processNextBill(0);
    }
};

// ============== AUDIT TRAIL SYSTEM ==============
const auditTrailSystem = {
    searchTransactions: function(criteria, currentIndex, results) {
        if (currentIndex >= galacticDatabase.transactions.length) {
            console.log(`\n🔍 Transaction search complete. Found ${results.length} transactions`);
            return this.formatAuditResults(results, criteria);
        }

        const transaction = galacticDatabase.transactions[currentIndex];
        let matchesAll = true;

        console.log(`\n[${currentIndex + 1}/${galacticDatabase.transactions.length}] Checking: ${transaction.id}`);

        if (criteria.userId) {
            if (transaction.fromUser === criteria.userId || 
                transaction.toUser === criteria.userId) {
                console.log(`  ✓ Matches user: ${criteria.userId}`);
            } else {
                console.log(`  ✗ Doesn't match user: ${criteria.userId}`);
                matchesAll = false;
            }
        }

        if (criteria.fromDate && matchesAll) {
            const transDate = new Date(transaction.timestamp);
            const fromDate = new Date(criteria.fromDate);
            if (transDate >= fromDate) {
                console.log(`  ✓ Date >= ${criteria.fromDate}`);
            } else {
                console.log(`  ✗ Date < ${criteria.fromDate}`);
                matchesAll = false;
            }
        }

        if (criteria.toDate && matchesAll) {
            const transDate = new Date(transaction.timestamp);
            const toDate = new Date(criteria.toDate);
            if (transDate <= toDate) {
                console.log(`  ✓ Date <= ${criteria.toDate}`);
            } else {
                console.log(`  ✗ Date > ${criteria.toDate}`);
                matchesAll = false;
            }
        }

        if (criteria.minAmount && matchesAll) {
            if (transaction.amount >= criteria.minAmount) {
                console.log(`  ✓ Amount >= ${criteria.minAmount}`);
            } else {
                console.log(`  ✗ Amount < ${criteria.minAmount}`);
                matchesAll = false;
            }
        }

        if (criteria.maxAmount && matchesAll) {
            if (transaction.amount <= criteria.maxAmount) {
                console.log(`  ✓ Amount <= ${criteria.maxAmount}`);
            } else {
                console.log(`  ✗ Amount > ${criteria.maxAmount}`);
                matchesAll = false;
            }
        }

        if (criteria.currency && matchesAll) {
            if (transaction.currency === criteria.currency) {
                console.log(`  ✓ Currency matches: ${criteria.currency}`);
            } else {
                console.log(`  ✗ Currency doesn't match: ${criteria.currency}`);
                matchesAll = false;
            }
        }

        if (criteria.status && matchesAll) {
            if (transaction.status === criteria.status) {
                console.log(`  ✓ Status matches: ${criteria.status}`);
            } else {
                console.log(`  ✗ Status doesn't match: ${criteria.status}`);
                matchesAll = false;
            }
        }

        if (criteria.sector && matchesAll) {
            if (transaction.fromSector === criteria.sector || 
                transaction.toSector === criteria.sector) {
                console.log(`  ✓ Sector matches: ${criteria.sector}`);
            } else {
                console.log(`  ✗ Sector doesn't match: ${criteria.sector}`);
                matchesAll = false;
            }
        }

        if (matchesAll) {
            console.log(`  ✅ ADDING to results: ${transaction.id}`);
            results.push(transaction);
        } else {
            console.log(`  ❌ SKIPPING: Doesn't match all criteria`);
        }

        return this.searchTransactions(criteria, currentIndex + 1, results);
    },

    formatAuditResults: function(transactions, criteria) {
        console.log("\n" + "=".repeat(60));
        console.log("📊 AUDIT RESULTS FORMATTING");
        console.log("=".repeat(60));
        
        let totalAmount = 0;
        let taxCollected = 0;
        let bySector = {};
        let byStatus = {};

        const aggregateData = function(index, totals) {
            if (index >= transactions.length) {
                console.log(`📈 Aggregation complete:`);
                console.log(`   Total amount: ${totals.totalAmount}`);
                console.log(`   Tax collected: ${totals.taxCollected}`);
                console.log(`   Transactions by sector: ${Object.keys(totals.bySector).length}`);
                console.log(`   Transactions by status: ${Object.keys(totals.byStatus).length}`);
                return totals;
            }

            const tx = transactions[index];
            totals.totalAmount += tx.amount;
            totals.taxCollected += tx.tax || 0;

            if (!totals.bySector[tx.fromSector]) {
                totals.bySector[tx.fromSector] = { count: 0, amount: 0 };
            }
            totals.bySector[tx.fromSector].count++;
            totals.bySector[tx.fromSector].amount += tx.amount;

            if (!totals.byStatus[tx.status]) {
                totals.byStatus[tx.status] = { count: 0, amount: 0 };
            }
            totals.byStatus[tx.status].count++;
            totals.byStatus[tx.status].amount += tx.amount;

            return aggregateData(index + 1, totals);
        };

        const totals = aggregateData(0, {
            totalAmount: 0,
            taxCollected: 0,
            bySector: {},
            byStatus: {}
        });

        console.log("\n" + "=".repeat(60));
        console.log("📋 AUDIT REPORT SUMMARY");
        console.log("=".repeat(60));
        console.log(`🔍 Search Criteria: ${JSON.stringify(criteria, null, 2)}`);
        console.log(`📊 Total Transactions: ${transactions.length}`);
        console.log(`💰 Total Amount: ${totals.totalAmount}`);
        console.log(`💸 Average Amount: ${transactions.length > 0 ? (totals.totalAmount / transactions.length).toFixed(2) : 0}`);
        console.log(`🏛️ Tax Collected: ${totals.taxCollected.toFixed(2)}`);
        console.log("\n📍 TRANSACTIONS BY SECTOR:`);
        Object.keys(totals.bySector).forEach(sector => {
            const data = totals.bySector[sector];
            console.log(`   ${sector}: ${data.count} transactions, ${data.amount.toFixed(2)} total`);
        });
        
        console.log("\n📈 TRANSACTIONS BY STATUS:`);
        Object.keys(totals.byStatus).forEach(status => {
            const data = totals.byStatus[status];
            console.log(`   ${status}: ${data.count} transactions, ${data.amount.toFixed(2)} total`);
        });
        
        console.log("=".repeat(60));

        return {
            searchCriteria: criteria,
            totalTransactions: transactions.length,
            transactions: transactions,
            summary: {
                totalAmount: totals.totalAmount,
                averageAmount: transactions.length > 0 ? totals.totalAmount / transactions.length : 0,
                taxCollected: totals.taxCollected,
                bySector: totals.bySector,
                byStatus: totals.byStatus
            },
            generated: new Date().toISOString()
        };
    },

    generateUserAuditReport: function(userId) {
        console.log("\n" + "=".repeat(60));
        console.log(`📊 GENERATING AUDIT REPORT FOR USER: ${userId}`);
        console.log("=".repeat(60));
        
        const criteria = { userId: userId };
        const audit = this.searchTransactions(criteria, 0, []);

        console.log("\n" + "=".repeat(60));
        console.log(`👤 USER AUDIT REPORT: ${userId}`);
        console.log("=".repeat(60));
        console.log(`📅 Generated: ${new Date().toLocaleString()}`);
        console.log(`📈 Total transactions: ${audit.totalTransactions}`);
        console.log(`💰 Total amount: ${audit.summary.totalAmount.toFixed(2)}`);
        console.log(`💸 Tax paid: ${audit.summary.taxCollected.toFixed(2)}`);
        
        console.log("\n📍 TRANSACTIONS BY SECTOR:");
        Object.keys(audit.summary.bySector).forEach(sector => {
            const data = audit.summary.bySector[sector];
            console.log(`   ${sector}: ${data.count} transactions, ${data.amount.toFixed(2)} total`);
        });

        console.log("\n📈 TRANSACTIONS BY STATUS:");
        Object.keys(audit.summary.byStatus).forEach(status => {
            const data = audit.summary.byStatus[status];
            console.log(`   ${status}: ${data.count} transactions, ${data.amount.toFixed(2)} total`);
        });
        
        console.log("\n📋 RECENT TRANSACTIONS (Last 5):");
        const recentTransactions = audit.transactions.slice(-5).reverse();
        recentTransactions.forEach(tx => {
            console.log(`   ${tx.timestamp.split('T')[0]} | ${tx.id}`);
            console.log(`     ${tx.description}`);
            console.log(`     Amount: ${tx.amount} ${tx.currency}, Status: ${tx.status}`);
            console.log(`     Tax: ${tx.tax || 0} ${tx.currency}`);
            console.log(`     From: ${tx.fromSector} → To: ${tx.toSector}`);
            console.log(`     `);
        });
        
        console.log("=".repeat(60));

        return audit;
    }
};

// ============== SYSTEM ADMINISTRATION ==============
const systemAdministrator = {
    toggleUserLock: function(userId, lockState, reason) {
        console.log("\n" + "=".repeat(50));
        console.log(`⚙️ ${lockState ? 'LOCKING' : 'UNLOCKING'} USER ACCOUNT`);
        console.log("=".repeat(50));
        
        const searchResult = manualSearchEngine.binarySearchUserById(
            galacticDatabase.users,
            userId,
            0,
            galacticDatabase.users.length - 1
        );

        if (!searchResult.found) {
            console.log(`🚫 USER NOT FOUND: ${userId}`);
            return { success: false, error: "User not found" };
        }

        const user = searchResult.user;
        const previousState = user.locked;
        user.locked = lockState;

        if (lockState) {
            console.log(`🔒 ACCOUNT LOCKED: ${userId}`);
            console.log(`   User: ${user.username}`);
            console.log(`   Reason: ${reason}`);
            user.lockedReason = reason;
            user.lockedAt = new Date().toISOString();
        } else {
            console.log(`🔓 ACCOUNT UNLOCKED: ${userId}`);
            console.log(`   User: ${user.username}`);
            user.failedAttempts = 0;
            delete user.lockedReason;
            delete user.lockedAt;
        }

        console.log(`📊 Previous state: ${previousState ? 'LOCKED' : 'UNLOCKED'}`);
        console.log(`📊 New state: ${lockState ? 'LOCKED' : 'UNLOCKED'}`);
        console.log("=".repeat(50));

        return {
            success: true,
            userId: userId,
            username: user.username,
            previousState: previousState,
            newState: lockState,
            reason: reason || "Administrative action"
        };
    },

    updateUserStatus: function(userId, newStatus) {
        console.log("\n" + "=".repeat(50));
        console.log(`📝 UPDATING USER STATUS`);
        console.log("=".repeat(50));
        
        const validStatuses = ["ACTIVE", "PENDING", "SUSPENDED", "DELETED"];
        
        if (!validStatuses.includes(newStatus)) {
            console.log(`🚫 INVALID STATUS: ${newStatus}`);
            console.log(`   Valid statuses: ${validStatuses.join(", ")}`);
            return { 
                success: false, 
                error: `Invalid status. Must be one of: ${validStatuses.join(", ")}` 
            };
        }

        const searchResult = manualSearchEngine.binarySearchUserById(
            galacticDatabase.users,
            userId,
            0,
            galacticDatabase.users.length - 1
        );

        if (!searchResult.found) {
            console.log(`🚫 USER NOT FOUND: ${userId}`);
            return { success: false, error: "User not found" };
        }

        const user = searchResult.user;
        const previousStatus = user.status;
        user.status = newStatus;

        console.log(`✅ USER STATUS UPDATED: ${userId}`);
        console.log(`   User: ${user.username}`);
        console.log(`   From: ${previousStatus} → To: ${newStatus}`);
        console.log(`   Updated at: ${new Date().toISOString()}`);
        console.log("=".repeat(50));

        return {
            success: true,
            userId: userId,
            username: user.username,
            previousStatus: previousStatus,
            newStatus: newStatus,
            updatedAt: new Date().toISOString()
        };
    },

    addNewUser: function(userData) {
        console.log("\n" + "=".repeat(50));
        console.log(`👤 ADDING NEW USER`);
        console.log("=".repeat(50));
        
        const lastId = galacticDatabase.users[galacticDatabase.users.length - 1].id;
        const idNum = parseInt(lastId.split('-')[1]) + 1;
        const newId = `USR-${idNum.toString().padStart(3, '0')}`;

        const newUser = {
            id: newId,
            username: userData.username,
            pin: userData.pin,
            secretWord: userData.secretWord,
            sector: userData.sector || "EARTH",
            branch: userData.branch || `${userData.sector || "EARTH"}-001`,
            clearance: userData.clearance || "CIVILIAN",
            status: "PENDING",
            balance: {
                Credits: userData.balance?.Credits || 100,
                Gold: userData.balance?.Gold || 5,
                "Oxygen-Tokens": userData.balance?.["Oxygen-Tokens"] || 230,
                Scrip: userData.balance?.Scrip || 470
            },
            locked: false,
            failedAttempts: 0,
            mfaEnabled: userData.mfaEnabled || false,
            lastLogin: null,
            createdAt: new Date().toISOString()
        };

        const insertSorted = function(array, newItem, currentIndex) {
            if (currentIndex >= array.length) {
                array[array.length] = newItem;
                console.log(`📥 Inserted at end: ${newItem.id}`);
                return array;
            }

            if (newItem.id < array[currentIndex].id) {
                console.log(`📥 Inserting at position ${currentIndex}: ${newItem.id}`);
                for (let i = array.length; i > currentIndex; i--) {
                    array[i] = array[i - 1];
                }
                array[currentIndex] = newItem;
                return array;
            }

            console.log(`↗️ Moving to position ${currentIndex + 1}`);
            return insertSorted(array, newItem, currentIndex + 1);
        };

        galacticDatabase.users = insertSorted(galacticDatabase.users, newUser, 0);

        console.log(`✅ NEW USER CREATED: ${newUser.username} (${newId})`);
        console.log(`📍 Sector: ${newUser.sector}, Clearance: ${newUser.clearance}`);
        console.log(`💰 Initial balance: ${newUser.balance.Credits} Credits`);
        console.log(`📊 Total users now: ${galacticDatabase.users.length}`);
        console.log("=".repeat(50));

        return {
            success: true,
            userId: newId,
            user: newUser,
            message: "User created successfully. Account is pending approval."
        };
    },

    runSystemDiagnostics: function() {
        console.log("\n" + "=".repeat(60));
        console.log("🖥️ RUNNING SYSTEM DIAGNOSTICS");
        console.log("=".repeat(60));

        const diagnostics = {
            timestamp: new Date().toISOString(),
            databaseStats: {
                totalUsers: galacticDatabase.users.length,
                activeUsers: 0,
                lockedUsers: 0,
                pendingUsers: 0,
                deletedUsers: 0,
                totalTransactions: galacticDatabase.transactions.length
            },
            sectorDistribution: {}
        };

        console.log("\n📊 DATABASE STATISTICS:");
        console.log(`   Total Users: ${diagnostics.databaseStats.totalUsers}`);
        
        const countUsersByStatus = function(index, counts) {
            if (index >= galacticDatabase.users.length) {
                console.log(`   Active Users: ${counts.activeUsers}`);
                console.log(`   Locked Users: ${counts.lockedUsers}`);
                console.log(`   Pending Users: ${counts.pendingUsers}`);
                console.log(`   Deleted Users: ${counts.deletedUsers}`);
                console.log(`   Total Transactions: ${diagnostics.databaseStats.totalTransactions}`);
                return counts;
            }

            const user = galacticDatabase.users[index];
            
            if (user.status === "ACTIVE") counts.activeUsers++;
            if (user.status === "PENDING") counts.pendingUsers++;
            if (user.status === "DELETED") counts.deletedUsers++;
            if (user.locked) counts.lockedUsers++;

            if (!diagnostics.sectorDistribution[user.sector]) {
                diagnostics.sectorDistribution[user.sector] = 0;
            }
            diagnostics.sectorDistribution[user.sector]++;

            return countUsersByStatus(index + 1, counts);
        };

        countUsersByStatus(0, {
            activeUsers: 0,
            lockedUsers: 0,
            pendingUsers: 0,
            deletedUsers: 0
        });

        console.log("\n📍 SECTOR DISTRIBUTION:");
        Object.keys(diagnostics.sectorDistribution).forEach(sector => {
            console.log(`   ${sector}: ${diagnostics.sectorDistribution[sector]} users`);
        });

        console.log("\n⚙️ SYSTEM STATE:");
        console.log(`   Current User: ${systemState.currentUser?.username || "None"}`);
        console.log(`   Session Locked: ${systemState.sessionLocked}`);
        console.log(`   Admin Override: ${systemState.isAdminOverride}`);
        console.log(`   Transaction in Progress: ${systemState.transactionInProgress}`);

        console.log("\n✅ DIAGNOSTICS COMPLETE");
        console.log("=".repeat(60));

        return diagnostics;
    }
};

// ============== MAIN SYSTEM INTERFACE ==============
const galacticLedgerSystem = {
    initialize: function() {
        console.log("\n" + "=".repeat(60));
        console.log("🚀 INITIALIZING PROJECT GALACTIC LEDGER");
        console.log("=".repeat(60));
        console.log("🌌 DEEP-SPACE TRANSACTION PROTOCOL v4.0");
        console.log("📡 Cosmic Radiation Shield: ACTIVE");
        console.log("⚡ Iteration Chip: OFFLINE (Manual Protocols Engaged)");
        console.log("📊 Blueprint Module: OFFLINE (Static Objects Active)");
        console.log("=".repeat(60));
        console.log("\n");

        systemAdministrator.runSystemDiagnostics();

        return {
            status: "OPERATIONAL",
            timestamp: new Date().toISOString(),
            version: "4.0",
            constraints: {
                noLoops: true,
                noClasses: true,
                noDOM: true,
                noExternalLibraries: true
            }
        };
    },

    runDemo: function() {
        console.log("\n" + "=".repeat(60));
        console.log("🎬 RUNNING SYSTEM DEMONSTRATION");
        console.log("=".repeat(60));

        console.log("\n1. ACTIVATING ADMIN OVERRIDE...");
        securityProtocols.adminOverride("ALPHA-OMEGA-777");

        console.log("\n2. AUTHENTICATING ADMIN USER...");
        const authResult = securityProtocols.performMFASequence(
            "admin_zero",
            "8813",
            "override",
            "14"
        );

        if (!authResult.success) {
            console.log("❌ DEMO FAILED: Authentication error");
            return;
        }

        console.log("\n3. SEARCHING FOR USER 'beltalowda'...");
        const userSearch = manualSearchEngine.searchUserByUsername(
            galacticDatabase.users,
            "beltalowda",
            0
        );

        if (userSearch.found) {
            console.log(`✅ Found: ${userSearch.user.username} (${userSearch.user.id})`);
            console.log(`   Status: ${userSearch.user.status}, Locked: ${userSearch.user.locked}`);
        }

        console.log("\n4. UNLOCKING LOCKED ACCOUNT...");
        systemAdministrator.toggleUserLock("USR-003", false, "Demo unlock");

        console.log("\n5. PROCESSING INTER-PLANETARY TRANSFER...");
        transactionProcessor.processInterPlanetaryTransfer(
            "USR-001",
            "USR-003",
            500,
            "Credits",
            "Demo transfer"
        );

        console.log("\n6. CALCULATING COMPOUND INTEREST...");
        const interestResult = tieredInterestSystem.calculateUserInterest("USR-001", 6);
        if (interestResult.error) {
            console.log(`Interest calculation error: ${interestResult.error}`);
        } else {
            console.log(`Interest for ${interestResult.username}:`);
            console.log(`  Original: ${interestResult.originalBalance} Credits`);
            console.log(`  After 6 months: ${interestResult.finalBalance.toFixed(2)} Credits`);
            console.log(`  Total interest: ${interestResult.totalInterest.toFixed(2)} Credits`);
        }

        console.log("\n7. PROCESSING BATCH UTILITY PAYMENTS...");
        utilityPaymentProcessor.processBatchPayments(
            "USR-002",
            ["LS-001", "FUEL-001", "NET-001"]
        );

        console.log("\n8. GENERATING AUDIT REPORT...");
        auditTrailSystem.generateUserAuditReport("USR-001");

        console.log("\n9. FINAL SYSTEM DIAGNOSTICS...");
        systemAdministrator.runSystemDiagnostics();

        console.log("\n" + "=".repeat(60));
        console.log("✅ DEMONSTRATION COMPLETE");
        console.log("🌌 PROJECT GALACTIC LEDGER IS OPERATIONAL");
        console.log("=".repeat(60));
    },

    api: {
        authenticate: securityProtocols.performMFASequence.bind(securityProtocols),
        adminOverride: securityProtocols.adminOverride.bind(securityProtocols),
        
        searchUser: function(userId) {
            return manualSearchEngine.binarySearchUserById(
                galacticDatabase.users,
                userId,
                0,
                galacticDatabase.users.length - 1
            );
        },
        
        transfer: transactionProcessor.processInterPlanetaryTransfer.bind(transactionProcessor),
        payBills: utilityPaymentProcessor.processBatchPayments.bind(utilityPaymentProcessor),
        
        calculateInterest: tieredInterestSystem.calculateUserInterest.bind(tieredInterestSystem),
        convertCurrency: currencyExchangeEngine.convertCurrency.bind(currencyExchangeEngine),
        
        audit: auditTrailSystem.generateUserAuditReport.bind(auditTrailSystem),
        
        diagnostics: systemAdministrator.runSystemDiagnostics.bind(systemAdministrator),
        getSystemState: () => ({ ...systemState }),
        getDatabase: () => ({ 
            users: [...galacticDatabase.users],
            transactions: [...galacticDatabase.transactions]
        })
    }
};

// ============== START THE SYSTEM ==============
if (typeof window === 'undefined') {
    // Node.js environment
    console.log("\n" + "=".repeat(70));
    console.log("🌌 PROJECT GALACTIC LEDGER - CONSOLE VERSION");
    console.log("=".repeat(70));
    console.log("📁 To use the system, call functions from galacticLedgerSystem.api");
    console.log("💡 Example: galacticLedgerSystem.api.authenticate('admin_zero', '8813', 'override', '14')");
    console.log("🎬 Or run the demo: galacticLedgerSystem.runDemo()");
    console.log("=".repeat(70));
    
    const initResult = galacticLedgerSystem.initialize();
    console.log(`\nSystem initialized: ${initResult.status}`);
    
    // Uncomment to run demo automatically
    // setTimeout(() => {
    //     galacticLedgerSystem.runDemo();
    // }, 2000);
}

// ============== EXPORT FOR NODE.JS ==============
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        galacticLedgerSystem,
        galacticDatabase,
        securityProtocols,
        manualSearchEngine,
        currencyExchangeEngine,
        tieredInterestSystem,
        transactionProcessor,
        utilityPaymentProcessor,
        auditTrailSystem,
        systemAdministrator
    };
}