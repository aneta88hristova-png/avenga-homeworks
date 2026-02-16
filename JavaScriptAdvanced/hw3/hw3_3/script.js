fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    const recipes = data.recipes;
    console.log("✅ Fetched", recipes.length, "recipes\n");

    // 1. All Desserts 🤤
    const desserts = recipes.filter(
      (r) => r.mealType.includes("Dessert") || r.tags.includes("Dessert"),
    );
    console.log(
      "1. All Desserts:",
      desserts.map((r) => r.name),
    );
    console.log(`   Found ${desserts.length} desserts\n`);

    // 2. Recipes with more than 30 reviews
    const popularRecipes = recipes
      .filter((r) => r.reviewCount > 30)
      .map((r) => r.name);
    console.log("2. Recipes with >30 reviews:", popularRecipes);
    console.log(`   Found ${popularRecipes.length} recipes\n`);

    // 3. Recipes that use Cinnamon as ingredient
    const cinnamonRecipes = recipes
      .filter((r) =>
        r.ingredients.some((i) => i.toLowerCase().includes("cinnamon")),
      )
      .map((r) => r.name);
    console.log("3. Recipes with Cinnamon:", cinnamonRecipes);
    console.log(`   Found ${cinnamonRecipes.length} recipes\n`);

    // 4. Recipes served as both Lunch and Dinner
    const lunchDinnerRecipes = recipes
      .filter(
        (r) => r.mealType.includes("Lunch") && r.mealType.includes("Dinner"),
      )
      .map((r) => r.name);
    console.log("4. Recipes for both Lunch & Dinner:", lunchDinnerRecipes);
    console.log(`   Found ${lunchDinnerRecipes.length} recipes\n`);

    // 5. Ingredients for "Mango Salsa Chicken"
    const mangoSalsa = recipes.find((r) => r.name === "Mango Salsa Chicken");
    console.log("5. Ingredients for Mango Salsa Chicken:");
    if (mangoSalsa) {
      mangoSalsa.ingredients.forEach((ing, i) => {
        console.log(`   ${i + 1}. ${ing}`);
      });
    } else {
      console.log("   Recipe not found");
    }
    console.log("");

    // 6. Average calories for American cuisine
    const americanRecipes = recipes.filter((r) => r.cuisine === "American");
    const avgAmericanCalories =
      americanRecipes.length > 0
        ? americanRecipes.reduce((sum, r) => sum + r.caloriesPerServing, 0) /
          americanRecipes.length
        : 0;
    console.log(
      "6. Average calories (American cuisine):",
      avgAmericanCalories.toFixed(2),
    );
    console.log(`   Based on ${americanRecipes.length} recipes\n`);

    // 7. Average cooking time of all pasta recipes
    const pastaRecipes = recipes.filter((r) =>
      r.tags.some((tag) => tag.toLowerCase().includes("pasta")),
    );
    const avgPastaCookTime =
      pastaRecipes.length > 0
        ? pastaRecipes.reduce((sum, r) => sum + r.cookTimeMinutes, 0) /
          pastaRecipes.length
        : 0;
    console.log(
      "7. Average cooking time (pasta):",
      avgPastaCookTime.toFixed(2) + " minutes",
    );
    console.log(`   Based on ${pastaRecipes.length} recipes\n`);

    // 8. Recipe with the lowest number of reviews
    const lowestReviewed =
      recipes.length > 0
        ? recipes.reduce((min, r) =>
            r.reviewCount < min.reviewCount ? r : min,
          )
        : null;

    console.log("8. Recipe with lowest reviews:");
    if (lowestReviewed) {
      console.log(`   🏆 ${lowestReviewed.name}`);
      console.log(`   📊 Reviews: ${lowestReviewed.reviewCount}`);
      console.log(`   ⭐ Rating: ${lowestReviewed.rating}`);
    }
  })
  .catch((error) => console.error("❌ Error fetching data:", error));
