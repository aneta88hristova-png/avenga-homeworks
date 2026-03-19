using System;

namespace RealCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Real Calculator");

            Console.Write("Enter the First number(10): ");
            byte num1 = Convert.ToByte(Console.ReadLine());

            Console.Write("Enter the Second number(15): ");
           
            byte num2 = Convert.ToByte(Console.ReadLine());

            Console.Write("Enter the Operation (+): ");
            string operation = Console.ReadLine();

            if (operation == "+")
            {
                int sum = num1 + num2;
                Console.WriteLine($"The result is: {sum}");
   } 
            else
            {
                Console.WriteLine("Invalid operation. Only '+' is supported.");
        }
            Console.ReadKey();
        }
    }
}

    