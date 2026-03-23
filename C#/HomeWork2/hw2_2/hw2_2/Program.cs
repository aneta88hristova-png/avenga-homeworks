using System;

namespace StudentGroup
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] studentsG1 = { "Zdravko", "Petko", "Stanko", "Branko", "Trajko" };
            string[] studentsG2 = { "Ana", "Elena", "Mario", "Ivana", "Stefan" };

            int groupNumber;

            Console.Write("Enter student group (there is 1 or 2): ");

            while (!int.TryParse(Console.ReadLine(), out groupNumber) || (groupNumber != 1 && groupNumber != 2))
            {
                Console.Write("Invalid input! Please enter 1 or 2: ");
            }

            if (groupNumber == 1)
            {
                Console.WriteLine("The Students in G1 are:");
                foreach (string student in studentsG1)
                {
                    Console.WriteLine(student);
                }
            }
            else
            {
                Console.WriteLine("The Students in G2 are:");
                foreach (string student in studentsG2)
                {
                    Console.WriteLine(student);
                }
            }

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}