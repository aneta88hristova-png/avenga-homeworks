using System;

class Program
{
    static int AgeCalculator(DateTime birthday)
    {
        int age = DateTime.Today.Year - birthday.Year;
        if (birthday > DateTime.Today.AddYears(-age)) age--;
        return age;
    }

    static void Main()
    {
        Console.Write("Enter your birthday (YYYY-MM-DD): ");

        try
        {
            DateTime birthday = DateTime.ParseExact(Console.ReadLine(), "yyyy-MM-dd", null);

            if (birthday > DateTime.Today)
            {
                Console.WriteLine("Birthday cannot be in the future!");
                return;
            }
            int age = AgeCalculator(birthday);

            if (age > 122)
            {
                Console.WriteLine($"Please enter a valid birthday (between 1903 and {DateTime.Today.Year}):");
                return;
            }

            if (age < 0)
            {
                Console.WriteLine("Invalid age!");
                return;
            }

            Console.WriteLine($"Your age: {age}");

            if (birthday.Month == DateTime.Today.Month && birthday.Day == DateTime.Today.Day)
            {
                Console.WriteLine("Happy Birthday!");
            }
        }
        catch (FormatException)
        {
            Console.WriteLine("Invalid format! Use YYYY-MM-DD (example: 1990-05-15)");
        }
    }
}