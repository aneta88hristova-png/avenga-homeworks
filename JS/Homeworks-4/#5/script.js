function findSumOfMinMaxWithBonus(items) {
  const numbers = [];

  for (let i = 0; i < items.length; i++) {
    if (typeof items[i] === "number" && !isNaN(items[i])) {
      numbers.push(items[i]);
    }
  }

  if (numbers.length < 2) {
    return "Error: Need at least 2 numbers in the array!";
  }

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  const sum = min + max;

  return `Max: ${max.toFixed(2)}, Min: ${min.toFixed(2)}, Sum: ${sum.toFixed(
    2
  )}`;
}

function calculateFromPrompt() {
  const input = prompt(
    "Enter numbers separated by commas\n" +
      "Examples:\n" +
      "• 3, 5, 6, 8, 11 (integers)\n" +
      "• 3.5, 6.8, 11.2 (decimals)\n" +
      "• 2, 4.5, 7.25 (mixed)\n\n" +
      "Your numbers:"
  );

  if (input === null || input.trim() === "") {
    alert("You didn't enter any numbers!");
    return;
  }

  const items = input.split(",").map((item) => {
    const trimmed = item.trim();
    const num = Number(trimmed);

    if (trimmed === "" || isNaN(num)) {
      return trimmed;
    }
    return num;
  });

  const result = findSumOfMinMaxWithBonus(items);
  alert(result);
  console.log("Input:", items);
  console.log("Result:", result);
}

calculateFromPrompt();
