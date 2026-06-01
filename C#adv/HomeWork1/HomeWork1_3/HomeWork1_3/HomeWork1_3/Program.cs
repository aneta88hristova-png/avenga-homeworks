using System;
using System.Collections.Generic;
using HomeWork1_3.Models;

namespace HomeWork1_3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== ABSTRACT SHAPE CLASS DEMO ===\n");
            Console.WriteLine("Enter measurements in centimeters (cm)\n");

            Console.WriteLine(" CIRCLE");
            double radius = GetValidPositiveDouble("  Enter radius (cm): ");
            Circle circle = new Circle(radius);

            Console.WriteLine("\n TRIANGLE");
            Console.WriteLine("  For area calculation:");
            double baseLength = GetValidPositiveDouble("    Enter base (cm): ");
            double height = GetValidPositiveDouble("    Enter height (cm): ");
            Console.WriteLine("  For perimeter calculation:");
            double sideA = GetValidPositiveDouble("    Enter side A (cm): ");
            double sideB = GetValidPositiveDouble("    Enter side B (cm): ");
            double sideC = GetValidPositiveDouble("    Enter side C (cm): ");

            Triangle triangle = new Triangle(sideA, sideB, sideC, baseLength, height);

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine("\n RESULTS:\n");

            Console.WriteLine($" CIRCLE (radius: {radius} cm)");
            Console.WriteLine($"   Area: {circle.CalculateArea():F2} cm²");
            Console.WriteLine($"   Perimeter (Circumference): {circle.CalculatePerimeter():F2} cm");

            Console.WriteLine($"\n TRIANGLE");
            Console.WriteLine($"   Base: {baseLength} cm, Height: {height} cm");
            Console.WriteLine($"   Sides: {sideA} cm, {sideB} cm, {sideC} cm");
            Console.WriteLine($"   Area: {triangle.CalculateArea():F2} cm²");
            Console.WriteLine($"   Perimeter: {triangle.CalculatePerimeter():F2} cm");

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine("\n POLYMORPHISM DEMO (List<Shape>):\n");

            List<Shape> shapes = new List<Shape>
            {
                circle,
                triangle,
                new Circle(5),
                new Triangle(3, 4, 5, 3, 4) 
            };

            foreach (Shape shape in shapes)
            {
                shape.DisplayInfo();
            }

            double totalArea = 0;
            double totalPerimeter = 0;

            foreach (Shape shape in shapes)
            {
                totalArea += shape.CalculateArea();
                totalPerimeter += shape.CalculatePerimeter();
            }

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine("\n SUMMARY:\n");
            Console.WriteLine($"   Total Area of all shapes: {totalArea:F2} cm²");
            Console.WriteLine($"   Total Perimeter of all shapes: {totalPerimeter:F2} cm");

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }

        static double GetValidPositiveDouble(string prompt)
        {
            double result;
            while (true)
            {
                Console.Write(prompt);
                string input = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(input))
                {
                    Console.WriteLine("   ERROR: You must enter a value! Try again.\n");
                    continue;
                }

                if (!double.TryParse(input, out result))
                {
                    Console.WriteLine("   ERROR: Enter a valid number (use '.' for decimals)! Try again.\n");
                    continue;
                }

                if (result <= 0)
                {
                    Console.WriteLine("   ERROR: Must be greater than 0 cm! Try again.\n");
                    continue;
                }

                return result;
            }
        }
    }
}