// Function to check and return the type
function checkType(value) {
  const type = typeof value;
  console.log(`Value: ${JSON.stringify(value)} | Type: ${type}`);
  return type;
}

// Interactive testing function
function testMyValue() {
  const input = prompt("Enter a value to check its type:");

  // Try to convert input to correct type
  let value;

  if (input === "true") value = true;
  else if (input === "false") value = false;
  else if (input === "null") value = null;
  else if (input === "undefined") value = undefined;
  else if (!isNaN(input) && input !== "") value = Number(input);
  else value = input;

  checkType(value);
}

// Test 5 different types when page loads
console.log("=== Testing 5 Different Data Types ===\n");

// 1. Object
console.log("Test 1 - Object:");
checkType({ name: "John", age: 30 });

// 2. Boolean
console.log("\nTest 2 - Boolean:");
checkType(true);

// 3. Number
console.log("\nTest 3 - Number:");
checkType(42);

// 4. String
console.log("\nTest 4 - String:");
checkType("Hello World");

// 5. Undefined
console.log("\nTest 5 - Undefined:");
let undefinedVariable;
checkType(undefinedVariable);
