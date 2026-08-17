using EfSimpleApp.Data;
using EfSimpleApp.Models;

using var context = new AppDbContext();

Console.WriteLine("=== MIN APP MED SQL SERVER ===");
Console.WriteLine();

// 1. LÄGG TILL EN PRODUKT
Console.Write("Ange produktnamn: ");
string? name = Console.ReadLine();

Console.Write("Ange pris: ");
decimal price = decimal.Parse(Console.ReadLine() ?? "0");

Console.Write("Ange antal i lager: ");
int stock = int.Parse(Console.ReadLine() ?? "0");

var product = new Product
{
    Name = name ?? "Okänd",
    Price = price,
    StockQuantity = stock
};

context.Products.Add(product);
context.SaveChanges();

Console.WriteLine($"✅ Produkten '{product.Name}' är tillagd!");
Console.WriteLine();

// 2. VISA ALLA PRODUKTER I DATABASEN
Console.WriteLine("2. Alla produkter i databasen:");

// Hämta alla produkter från databasen
var products = context.Products.ToList();

if (products.Count == 0)
{
    Console.WriteLine("Inga produkter hittades.");
}
else
{
    foreach (var p in products)
    {
        Console.WriteLine($"📦 {p.Name} - {p.Price:F2} kr - {p.StockQuantity} st i lager");
    }
}

Console.WriteLine();
Console.WriteLine("Tryck på valfri knapp för att avsluta...");
Console.ReadKey();