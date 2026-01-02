// ============== CURRENCY EXCHANGE ==============
const CurrencySystem = {
    exchangeRates: {
        Credits: { Gold: 0.05, "Oxygen-Tokens": 2.3, Scrip: 4.7 },
        Gold: { Credits: 20.0, "Oxygen-Tokens": 46.0, Scrip: 94.0 },
        "Oxygen-Tokens": { Credits: 0.4347, Gold: 0.0217, Scrip: 2.043 },
        Scrip: { Credits: 0.2127, Gold: 0.0106, "Oxygen-Tokens": 0.489 }
    },
    
    convert: function(amount, fromCurrency, toCurrency) {
        console.log(`🔄 Converting ${amount} ${fromCurrency} → ${toCurrency}`);
        
        if (fromCurrency === toCurrency) {
            console.log("✅ Same currency");
            return amount;
        }
        
        const rate = this.exchangeRates[fromCurrency][toCurrency];
        const result = amount * rate;
        
        console.log(`💰 Rate: 1 ${fromCurrency} = ${rate} ${toCurrency}`);
        console.log(`📊 Result: ${result.toFixed(2)} ${toCurrency}`);
        
        return result;
    },
    
    calculateTax: function(amount, fromSector, toSector) {
        console.log(`🧾 Calculating tax: ${fromSector} → ${toSector}`);
        
        const from = window.GalacticDatabase.sectors[fromSector];
        const to = window.GalacticDatabase.sectors[toSector];
        
        let tax = amount * from.taxRate;
        console.log(`📋 Base tax: ${tax.toFixed(2)}`);
        
        if (fromSector !== toSector) {
            const delayTax = amount * 0.01 * Math.abs(from.communicationDelay - to.communicationDelay);
            tax += delayTax;
            console.log(`📡 Delay tax: ${delayTax.toFixed(2)}`);
        }
        
        if (fromSector === "MARS" && from.requiresOxygenTax) {
            const oxygenTax = amount * 0.02;
            tax += oxygenTax;
            console.log(`🫁 Oxygen tax: ${oxygenTax.toFixed(2)}`);
        }
        
        if (fromSector === "BELT" || toSector === "BELT") {
            const zeroGTax = amount * 0.015;
            tax += zeroGTax;
            console.log(`🌌 Zero-G tax: ${zeroGTax.toFixed(2)}`);
        }
        
        console.log(`💰 TOTAL TAX: ${tax.toFixed(2)}`);
        return tax;
    }
};

window.CurrencySystem = CurrencySystem;