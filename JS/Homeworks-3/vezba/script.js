// Interactive square sum calculator

function calculateSumOfSquares() {
  // Welcome message
  alert("Welcome to the Sum of Squares Calculator!");

  // Get start number
  let start;
  while (true) {
    start = prompt("Enter the STARTING number (e.g., 101):");
    start = Number(start);

    if (!isNaN(start) && Number.isInteger(start)) {
      break;
    }
    alert("Please enter a valid integer!");
  }

  // Get end number
  let end;
  while (true) {
    end = prompt(
      "Enter the ENDING number (must be greater than " + start + "):"
    );
    end = Number(end);

    if (!isNaN(end) && Number.isInteger(end) && end > start) {
      break;
    }
    alert("Please enter a valid integer greater than " + start + "!");
  }

  // Calculate
  let sum = 0;
  let details = `Calculation details:\n\n`;

  for (let i = start; i <= end; i++) {
    let square = Math.pow(i, 2);
    sum += square;

    details += `${i}² = ${square}`;

    if (i < end) {
      details += "\n";
    }
  }

  // Show detailed calculation
  let showDetails = confirm(
    "Calculation complete!\n\n" +
      `Sum of squares from ${start} to ${end} = ${sum}\n\n` +
      "Click OK to see detailed calculation, Cancel to exit."
  );

  if (showDetails) {
    alert(details);
  }

  // Ask if user wants to calculate again
  let again = confirm("Do you want to calculate another sum of squares?");

  if (again) {
    calculateSumOfSquares();
  } else {
    alert("Thank you for using the Sum of Squares Calculator!");
  }
}

// Start the calculator
calculateSumOfSquares();
