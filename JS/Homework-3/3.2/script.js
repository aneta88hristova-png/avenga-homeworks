function humanToDogYears(humanAge) {
  const dogAge = humanAge * 7;
  console.log(`${humanAge} human years = ${dogAge} dog years`);
  return dogAge;
}

function dogToHumanYears(dogAge) {
  const humanAge = dogAge / 7;
  console.log(`${dogAge} dog years = ${humanAge.toFixed(1)} human years`);
  return humanAge;
}

function runTests() {
  console.log("=== Dog Age Calculator Tests ===\n");

  // Test 1
  console.log("Test 1:");
  humanToDogYears(5);

  // Test 2
  console.log("\nTest 2:");
  humanToDogYears(10);

  // Test 3
  console.log("\nTest 3:");
  humanToDogYears(30);

  // Test 4
  console.log("\nTest 4:");
  dogToHumanYears(7);

  // Test 5
  console.log("\nTest 5:");
  dogToHumanYears(49);
}

// Interactive functions
function testHumanToDog() {
  const input = document.getElementById("ageInput").value;
  if (input && !isNaN(input)) {
    console.log(`User Input: ${input} human years`);
    humanToDogYears(Number(input));
  } else {
    console.log("Error: Please enter a valid number!");
  }
}

function testDogToHuman() {
  const input = document.getElementById("ageInput").value;
  if (input && !isNaN(input)) {
    console.log(`User Input: ${input} dog years`);
    dogToHumanYears(Number(input));
  } else {
    console.log("Error: Please enter a valid number!");
  }
}

console.log("Page loaded. Click buttons to test or press F12 to see console.");
