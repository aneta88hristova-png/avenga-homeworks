fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const products = data.products;
    console.log(" Fetched", products.length, "products");

    // 1. All laptops in stock ordered by price descending
    const laptopsInStock = products
      .filter(
        (p) =>
          p.category === "laptops" &&
          p.stock > 0 &&
          p.availabilityStatus === "In Stock",
      )
      .sort((a, b) => b.price - a.price);

    console.log(
      "1. Laptops in stock:",
      laptopsInStock.length > 0
        ? ` ${laptopsInStock.length} laptop(s) found`
        : " No laptops in stock",
    );

    // 2. The first grocery item
    const firstGrocery = products.find((p) => p.category === "groceries");
    console.log("2. First grocery item:", firstGrocery);

    // 3. Index of the first "Samsung" smartphone
    const samsungIndex = products.findIndex(
      (p) => p.category === "smartphones" && p.brand === "Samsung",
    );

    const allSmartphones = products.filter((p) => p.category === "smartphones");

    console.log(
      "3. Samsung smartphone:",
      samsungIndex !== -1
        ? ` Index ${samsungIndex} (of ${allSmartphones.length} total)`
        : ` None of ${allSmartphones.length} smartphones`,
    );

    // 4. Check if there is any item from the brand "Sony"
    const hasSony = products.some((p) => p.brand === "Sony");

    console.log(
      "4. Any Sony products?",
      hasSony ? "Yes, Sony products exist" : "No Sony products found",
    );

    // 5. The name of the highest rated skincare product
    const highestRatedSkincare = products
      .filter(
        (p) =>
          p.category === "skincare" ||
          (p.tags && p.tags.includes("skincare")) ||
          (p.description && p.description.toLowerCase().includes("skincare")),
      )
      .sort((a, b) => b.rating - a.rating)[0];

    console.log(
      "5. Highest rated skincare:",
      highestRatedSkincare
        ? ` ${highestRatedSkincare.title} ( ${highestRatedSkincare.rating})`
        : " No skincare products found",
    );

    // 6. The average discount percentage of products with a rating above 4.5
    const avgDiscount = products
      .filter((p) => p.rating > 4.5)
      .map((p) => p.discountPercentage)
      .reduce((sum, discount, _, array) => sum + discount / array.length, 0);

    console.log("6. Average discount:", avgDiscount.toFixed(2) + "%");

    // 7. Find the product with the highest price
    const highestPricedProduct = products.reduce((max, product) =>
      product.price > max.price ? product : max,
    );

    console.log("7. Product with the highest price:", highestPricedProduct);

    // 8. Average price of all iPhone smartphones
    const iPhones = products.filter(
      (p) =>
        p.category === "smartphones" &&
        p.title.toLowerCase().includes("iphone"),
    );

    const avgIPhonePrice =
      iPhones.length > 0
        ? iPhones.reduce((sum, p) => sum + p.price, 0) / iPhones.length
        : null;

    console.log(
      "8. Average price of iPhones:",
      avgIPhonePrice
        ? `$${avgIPhonePrice.toFixed(2)}`
        : "No iPhones found in the data",
    );

    // 9. The product with the lowest price
    const lowestPricedProduct = products.reduce((min, product) =>
      product.price < min.price ? product : min
    );

    console.log("9. Product with the lowest price:", lowestPricedProduct);

  }) 
  .catch((error) => console.error("Error:", error)); 
   /* Кај функциите за кои што нема информации во API, ставив if-else тернарен оператор за да не ми фрла грешка.
   За тие што има, само ги користам методите и ги прикажувам резултатите,  да заштедам на време...:) */