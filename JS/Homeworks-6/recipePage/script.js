const startButton = document.getElementById("startButton");
const recipeDisplay = document.getElementById("recipeDisplay");
const recipeNameElement = document.getElementById("recipeName");
const ingredientsList = document.getElementById("ingredientsList");
const ingredientsTable = document
  .getElementById("ingredientsTable")
  .getElementsByTagName("tbody")[0];
const ingredientCount = document.getElementById("ingredientCount");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", createRecipe);

resetButton.addEventListener("click", function () {
  recipeDisplay.classList.add("hidden");
  startButton.style.display = "block";

  clearIngredients();
  setTimeout(createRecipe, 300);
});

function createRecipe() {
  const recipeName = prompt("What's the name of your recipe?");
  if (!recipeName) return;

  const numInput = prompt("How many ingredients do we need?");
  const numIngredients = parseInt(numInput);

  if (isNaN(numIngredients) || numIngredients <= 0) {
    alert("Please enter a valid number!");
    return;
  }

  const ingredients = [];
  for (let i = 0; i < numIngredients; i++) {
    const ingredient = prompt(`Enter ingredient #${i + 1}:`);
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  displayRecipe(recipeName, ingredients);
}

function displayRecipe(name, ingredients) {
  recipeNameElement.textContent = name;

  ingredientsList.innerHTML = "";
  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    ingredientsList.appendChild(listItem);
  });

  ingredientsTable.innerHTML = "";
  ingredients.forEach((ingredient, index) => {
    const row = ingredientsTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.textContent = index + 1;
    cell2.textContent = ingredient;
    cell3.textContent = "To taste";
  });

  ingredientCount.textContent = `Total ingredients: ${ingredients.length}`;

  recipeDisplay.classList.remove("hidden");

  startButton.style.display = "none";
}

function clearIngredients() {
  ingredientsList.innerHTML = "";
  ingredientsTable.innerHTML = "";
  recipeNameElement.textContent = "Recipe Name Will Appear Here";
  ingredientCount.textContent = "Total ingredients: 0";
}

clearIngredients();
