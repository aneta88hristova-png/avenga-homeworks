using HomeWork1_2.Models;

namespace HomeWork1_2
{
    class Program
    {
        static void Main(string[] args)
        {
            bool running = true;

            while (running)
            {
                Console.Clear();
                Console.WriteLine("=== SHAPE AREA CALCULATOR (cm) ===\n");
                Console.WriteLine("1. Calculate Rectangle Area (cm²)");
                Console.WriteLine("2. Calculate Circle Area (cm²)");
                Console.WriteLine("3. Calculate Triangle Area (cm²)");
                Console.WriteLine("4. Calculate All Shapes (cm²)");
                Console.WriteLine("5. Exit");
                Console.Write("\nChoose an option (1-5): ");

                string choice = Console.ReadLine();

                switch (choice)
                {
                    case "1":
                        CalculateRectangle();
                        break;
                    case "2":
                        CalculateCircle();
                        break;
                    case "3":
                        CalculateTriangle();
                        break;
                    case "4":
                        CalculateAllShapes();
                        break;
                    case "5":
                        running = false;
                        Console.WriteLine("\nThank you for using the program!");
                        break;
                    default:
                        Console.WriteLine("\n Invalid choice! Press any key...");
                        Console.ReadKey();
                        break;
                }
            }
        }

        static void CalculateRectangle()
        {
            Console.Clear();
            Console.WriteLine("=== RECTANGLE AREA (cm²) ===\n");
            Console.WriteLine("Enter measurements in centimeters (cm)\n");

            double width = GetValidPositiveDouble("Enter width (cm): ");
            double height = GetValidPositiveDouble("Enter height (cm): ");

            Rectangle rectangle = new Rectangle(width, height);
            double area = rectangle.GetArea();

            Console.WriteLine($"\n Rectangle ({width} cm x {height} cm)");
            Console.WriteLine($" Area = {area} cm²");

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static void CalculateCircle()
        {
            Console.Clear();
            Console.WriteLine("=== CIRCLE AREA (cm²) ===\n");
            Console.WriteLine("Enter measurements in centimeters (cm)\n");

            double radius = GetValidPositiveDouble("Enter radius (cm): ");

            Circle circle = new Circle(radius);
            double area = circle.GetArea();

            Console.WriteLine($"\nCircle (radius: {radius} cm)");
            Console.WriteLine($"● Area = {area:F2} cm²");

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static void CalculateTriangle()
        {
            Console.Clear();
            Console.WriteLine("=== TRIANGLE AREA (cm²) ===\n");
            Console.WriteLine("Enter measurements in centimeters (cm)\n");

            double baseLength = GetValidPositiveDouble("Enter base (cm): ");
            double height = GetValidPositiveDouble("Enter height (cm): ");

            Triangle triangle = new Triangle(baseLength, height);
            double area = triangle.GetArea();

            Console.WriteLine($"\n Triangle (base: {baseLength} cm, height: {height} cm)");
            Console.WriteLine($" Area = {area} cm²");

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static void CalculateAllShapes()
        {
            Console.Clear();
            Console.WriteLine("=== ALL SHAPES AREA (cm²) ===\n");
            Console.WriteLine("Enter measurements in centimeters (cm)\n");

            Console.WriteLine(" RECTANGLE");
            double width = GetValidPositiveDouble("  Enter width (cm): ");
            double height = GetValidPositiveDouble("  Enter height (cm): ");
            Rectangle rectangle = new Rectangle(width, height);

            Console.WriteLine("\n CIRCLE");
            double radius = GetValidPositiveDouble("  Enter radius (cm): ");
            Circle circle = new Circle(radius);

            Console.WriteLine("\n TRIANGLE");
            double baseLength = GetValidPositiveDouble("  Enter base (cm): ");
            double triangleHeight = GetValidPositiveDouble("  Enter height (cm): ");
            Triangle triangle = new Triangle(baseLength, triangleHeight);

            double rectangleArea = rectangle.GetArea();
            double circleArea = circle.GetArea();
            double triangleArea = triangle.GetArea();
            double totalArea = rectangleArea + circleArea + triangleArea;

            Console.WriteLine("\n" + new string('=', 50));
            Console.WriteLine("\n RESULTS (cm²):\n");
            Console.WriteLine($"  Rectangle: {rectangleArea} cm²");
            Console.WriteLine($"  Circle: {circleArea:F2} cm²");
            Console.WriteLine($"  Triangle: {triangleArea} cm²");
            Console.WriteLine($"\n  TOTAL AREA: {totalArea:F2} cm²");

            Console.WriteLine("\nPress any key to continue...");
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

                bool containsLetters = false;
                foreach (char c in input)
                {
                    if (char.IsLetter(c))
                    {
                        containsLetters = true;
                        break;
                    }
                }

                if (containsLetters)
                {
                    Console.WriteLine("   ERROR: Please enter numbers only (not letters)! Try again.\n");
                    continue;
                }

                if (!double.TryParse(input, out result))
                {
                    Console.WriteLine("   ERROR: Enter a valid number (use '.' for decimals)! Try again.\n");
                    continue;
                }

                if (result <= 0)
                {
                    Console.WriteLine("  ERROR: Value must be greater than 0 cm! Try again.\n");
                    continue;
                }

                return result;
            }
        }
    }
}