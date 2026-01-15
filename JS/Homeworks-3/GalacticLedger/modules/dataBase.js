// ============== GALACTIC DATABASE ==============
const GalacticDatabase = {
    sectors: {
        MARS: {
            id: "MARS",
            name: "Mars Colony",
            taxRate: 0.15,
            communicationDelay: 3,
            currency: "Credits",
            requiresOxygenTax: true,
            specialConditions: "Low-Gravity Banking"
        },
        EARTH: {
            id: "EARTH",
            name: "Earth Central",
            taxRate: 0.20,
            communicationDelay: 1,
            currency: "Gold",
            requiresOxygenTax: false,
            specialConditions: "Standard Banking"
        },
        BELT: {
            id: "BELT",
            name: "Asteroid Belt",
            taxRate: 0.10,
            communicationDelay: 5,
            currency: "Oxygen-Tokens",
            requiresOxygenTax: false,
            specialConditions: "Zero-G Transactions"
        }
    },

    branches: {
        "MARS-001": { id: "MARS-001", sector: "MARS", name: "Olympus Mons Branch" },
        "EARTH-001": { id: "EARTH-001", sector: "EARTH", name: "Geneva Hub" },
        "BELT-001": { id: "BELT-001", sector: "BELT", name: "Ceres Station" }
    },

    users: [
        {
            id: "USR-001", username: "captain_neo", pin: "1234", secret: "serenity",
            sector: "EARTH", clearance: "COMMAND", status: "ACTIVE", locked: false,
            balance: { Credits: 15000, Gold: 750, "Oxygen-Tokens": 34500, Scrip: 70500 }
        },
        {
            id: "USR-002", username: "dr_martian", pin: "5678", secret: "perchlorate",
            sector: "MARS", clearance: "SCIENCE", status: "ACTIVE", locked: false,
            balance: { Credits: 8500, Gold: 425, "Oxygen-Tokens": 19550, Scrip: 39950 }
        },
        {
            id: "USR-003", username: "beltalowda", pin: "9999", secret: "pashang",
            sector: "BELT", clearance: "MINER", status: "LOCKED", locked: true,
            balance: { Credits: 3200, Gold: 160, "Oxygen-Tokens": 7360, Scrip: 15040 }
        },
        {
            id: "USR-004", username: "admin_zero", pin: "8813", secret: "override",
            sector: "EARTH", clearance: "ADMIN", status: "ACTIVE", locked: false,
            balance: { Credits: 999999, Gold: 49999, "Oxygen-Tokens": 2299997, Scrip: 4699997 }
        }
    ],

    transactions: [],

    utilityBills: {
        "LS-001": { name: "Life Support", cost: 100, currency: "Credits" },
        "FUEL-001": { name: "Station Fuel", cost: 250, currency: "Gold" },
        "NET-001": { name: "Quantum Internet", cost: 50, currency: "Scrip" },
        "WATER-001": { name: "Water Reclamation", cost: 75, currency: "Oxygen-Tokens" }
    }
};

window.GalacticDatabase = GalacticDatabase;