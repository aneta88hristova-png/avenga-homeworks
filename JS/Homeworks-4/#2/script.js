function validateNumber(num) {
  return typeof num === "number" && !isNaN(num);
}

function sumArray(numbers) {
  // Check if we have exactly 5 numbers
  if (numbers.length !== 5) {
    alert(
      `Error: Need exactly 5 numbers, but you entered ${numbers.length} numbers.`
    );
    return null;
  }

  // Ceck if all are valid numbers
  for (let i = 0; i < numbers.length; i++) {
    if (!validateNumber(numbers[i])) {
      alert(
        `Error: "${numbers[i]}" at position ${i + 1} is not a valid number!`
      );
      return null;
    }
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  alert(`✅ Success!\n\nNumbers: ${numbers.join(", ")}\nSum = ${sum}`);
  return sum;
}

function getAndCalculate() {
  const input = prompt(
    "Quinary Sum Solver\nEnter 5 numbers separated by commas.\n\n" +
      "📋 Example: 1,2,3,4,5\n" +
      "Your 5 numbers:"
  );

  // Check if user clicked Cancel
  if (input === null) {
    alert("You cancelled the input.");
    return;
  }

  // Check for empty entries
  for (let i = 0; i < items.length; i++) {
    if (items[i].trim() === "") {
      alert(
        `Error: Position ${
          i + 1
        } is empty!\n\nPlease enter a number in every position.`
      );
      return;
    }
  }

  // Now convert to numbers
  const numbers = items.map((item) => {
    const trimmed = item.trim();
    return Number(trimmed);
  });

  sumArray(numbers);
}

getAndCalculate();
