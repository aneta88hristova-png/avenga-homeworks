using System;

namespace SumOfEven
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = new int[6];// колку елементи има низата
            int sum = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                Console.Write($"Enter integer no.{i + 1}: ");

                while (!int.TryParse(Console.ReadLine(), out numbers[i]))
                {
                    Console.Write($"Invalid input! Enter integer no.{i + 1}: ");
                }
            }

            foreach (int number in numbers)
            {
                if (number % 2 == 0)
                {
                    sum += number;
                }
            }

            Console.WriteLine($"The result is: {sum}");
        }
    }
}