using CarHomework;

var cars = CarsData.Cars;

Console.WriteLine("\n========================================");
Console.WriteLine(" CAR ANALYSIS WITH LINQ");
Console.WriteLine("========================================\n");

// TASK 1: European Cars
Console.WriteLine("TASK 1: European Cars");
Console.WriteLine("----------------------------------------");
var europeanCars = cars.Where(c => c.Origin == "Europe").ToList();
foreach (var car in europeanCars)
{
    Console.WriteLine($"  • {car.Model} ({car.HorsePower} HP)");
}
Console.WriteLine($"  Total: {europeanCars.Count} cars\n");

// TASK 2: >6 Cylinders OR (4 Cylinders AND HP>110)
Console.WriteLine("TASK 2: >6 Cylinders OR (4 Cylinders AND HP>110)");
Console.WriteLine("----------------------------------------");
var moreThan6 = cars.Where(c => c.Cylinders > 6).ToList();
var fourCylHighHP = cars.Where(c => c.Cylinders == 4 && c.HorsePower > 110).ToList();
var combined = moreThan6.Union(fourCylHighHP).ToList();

Console.WriteLine($"  Cars with >6 cylinders: {moreThan6.Count}");
Console.WriteLine($"  Cars with 4 cylinders and HP>110: {fourCylHighHP.Count}");
Console.WriteLine($"  Combined total: {combined.Count}\n");

foreach (var car in combined.Take(5))
{
    Console.WriteLine($"    • {car.Model}: {car.Cylinders} cyl, {car.HorsePower} HP");
}
Console.WriteLine();

// TASK 3: Count by Origin
Console.WriteLine("TASK 3: Car Count by Origin");
Console.WriteLine("----------------------------------------");
var byOrigin = cars.GroupBy(c => c.Origin)
                   .Select(g => new { Origin = g.Key, Count = g.Count() });
foreach (var group in byOrigin)
{
    Console.WriteLine($"  {group.Origin} {group.Count} models");
}
Console.WriteLine();

// TASK 4: High Performance Cars (>200 HP)
Console.WriteLine("TASK 4: High Performance Cars (>200 HP) - MPG Statistics");
Console.WriteLine("----------------------------------------");
var highPerf = cars.Where(c => c.HorsePower > 200).ToList();

if (highPerf.Any())
{
    Console.WriteLine($"  Number of cars: {highPerf.Count}");
    Console.WriteLine($"  Lowest MPG: {highPerf.Min(c => c.MilesPerGalon):F2}");
    Console.WriteLine($"  Highest MPG: {highPerf.Max(c => c.MilesPerGalon):F2}");
    Console.WriteLine($"  Average MPG: {highPerf.Average(c => c.MilesPerGalon):F2}");
    
    Console.WriteLine("\n  These cars are:");
    foreach (var car in highPerf)
    {
        Console.WriteLine($"    • {car.Model}: {car.HorsePower} HP, {car.MilesPerGalon} MPG");
    }
}
else
{
    Console.WriteLine("  No cars found with more than 200 HP");
}

Console.WriteLine("\n========================================");
Console.WriteLine("All tasks completed!");
Console.WriteLine("Press any key to exit...");
Console.ReadKey();
