using System;

namespace AverageNummber
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Average Number Calculator");

            Console.Write("Enter the First number(10): ");
            float num1 = float.Parse(Console.ReadLine());

            Console.Write("Enter the Second number(15): ");
            float num2 = float.Parse(Console.ReadLine());

            Console.Write("Enter the Third number(20): ");
            float num3 = float.Parse(Console.ReadLine());

            Console.Write("Enter the Fourth number(30): ");
            float num4 = float.Parse(Console.ReadLine());

            float average = (num1 + num2 + num3 + num4) / 4;

            Console.WriteLine($"The average of {num1}, {num2}, {num3} and {num4} is: {average}");

            Console.ReadKey();
        }
    }

}
//float num1 = Convert.ToSingle(Console.ReadLine()); hantera null automatiskt, om användaren inte skriver något så blir det 0.0f
//float num1 = float.Parse(Console.ReadLine() ?? "0");  // Om null, använd "0"