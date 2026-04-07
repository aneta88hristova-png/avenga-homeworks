using System;

public class Program
{
    public static void Main()
    {
        Car car1 = new Car("Hyundai", 180);
        Car car2 = new Car("Mazda", 200);
        Car car3 = new Car("Ferrari", 280);
        Car car4 = new Car("Porsche", 260);

        Driver driver1 = new Driver("Bob", 3);
        Driver driver2 = new Driver("Greg", 4);
        Driver driver3 = new Driver("Jill", 5);
        Driver driver4 = new Driver("Aneta", 10);

        Console.Write("Choose a car no.1:\n1. Hyundai\n2. Mazda\n3. Ferrari\n4. Porsche\n");
        int choice1 = GetValidChoice(1, 4);

        Car selectedCar1 = null!;
        if (choice1 == 1) selectedCar1 = car1;
        else if (choice1 == 2) selectedCar1 = car2;
        else if (choice1 == 3) selectedCar1 = car3;
        else if (choice1 == 4) selectedCar1 = car4;


        Console.WriteLine("\nChoose Driver:");
        Console.WriteLine("1. Bob");
        Console.WriteLine("2. Greg");
        Console.WriteLine("3. Jill");
        Console.WriteLine("4. Aneta");

        int driverChoice1 = GetValidChoice(1, 4);

        if (driverChoice1 == 1) selectedCar1.Driver = driver1;
        else if (driverChoice1 == 2) selectedCar1.Driver = driver2;
        else if (driverChoice1 == 3) selectedCar1.Driver = driver3;
        else if (driverChoice1 == 4) selectedCar1.Driver = driver4;

        Console.WriteLine("\nChoose a car no.2:");
        Console.WriteLine("1. Hyundai");
        Console.WriteLine("2. Mazda");
        Console.WriteLine("3. Ferrari");
        Console.WriteLine("4. Porsche");

        int choice2 = GetValidChoice(1, 4);

        while (choice2 == choice1)
        {
            Console.WriteLine("\n This car is already selected for car no.1!");
            Console.WriteLine("Choose a different car:\n");
            Console.WriteLine("1. Hyundai");
            Console.WriteLine("2. Mazda");
            Console.WriteLine("3. Ferrari");
            Console.WriteLine("4. Porsche");
            choice2 = GetValidChoice(1, 4);
        }

        Car selectedCar2 = null!;
        if (choice2 == 1) selectedCar2 = car1;
        else if (choice2 == 2) selectedCar2 = car2;
        else if (choice2 == 3) selectedCar2 = car3;
        else if (choice2 == 4) selectedCar2 = car4;

        Console.WriteLine("\nChoose Driver:");
        Console.WriteLine("1. Bob");
        Console.WriteLine("2. Greg");
        Console.WriteLine("3. Jill");
        Console.WriteLine("4. Aneta");

        int driverChoice2 = GetValidChoice(1, 4);

        Driver selectedDriver2 = null!;
        if (driverChoice2 == 1) selectedDriver2 = driver1;
        else if (driverChoice2 == 2) selectedDriver2 = driver2;
        else if (driverChoice2 == 3) selectedDriver2 = driver3;
        else if (driverChoice2 == 4) selectedDriver2 = driver4;

        while (selectedDriver2 == selectedCar1.Driver)
        {
            Console.WriteLine($"\n {selectedDriver2.Name} is already driving car no.1!");
            Console.WriteLine("Choose a different driver:\n");
            Console.WriteLine("1. Bob");
            Console.WriteLine("2. Greg");
            Console.WriteLine("3. Jill");
            Console.WriteLine("4. Aneta");

            driverChoice2 = GetValidChoice(1, 4);

            if (driverChoice2 == 1) selectedDriver2 = driver1;
            else if (driverChoice2 == 2) selectedDriver2 = driver2;
            else if (driverChoice2 == 3) selectedDriver2 = driver3;
            else if (driverChoice2 == 4) selectedDriver2 = driver4;
        }

        selectedCar2.Driver = selectedDriver2;

        Console.WriteLine("\n----RACE RESULTS----");

        int speed1 = selectedCar1.CalculateSpeed(selectedCar1.Driver);
        int speed2 = selectedCar2.CalculateSpeed(selectedCar2.Driver);

        Console.WriteLine($"{selectedCar1.Model} ({selectedCar1.Speed}) + {selectedCar1.Driver.Name} ({selectedCar1.Driver.Skill}) = {speed1}");
        Console.WriteLine($"{selectedCar2.Model} ({selectedCar2.Speed}) + {selectedCar2.Driver.Name} ({selectedCar2.Driver.Skill}) = {speed2}");

        if (speed1 > speed2)
            Console.WriteLine("\n Car no. 1 was faster!");
        else if (speed2 > speed1)
            Console.WriteLine("\n Car no. 2 was faster!");
        else
            Console.WriteLine("\n It's a tie!");
    }

    static int GetValidChoice(int min, int max)
    {
        int choice;
        string? input;

        while (true)
        {
            input = Console.ReadLine();

            if (string.IsNullOrEmpty(input))
            {
                Console.Write($"Invalid input! Enter number {min}-{max}: ");
                continue;
            }

            if (int.TryParse(input, out choice))
            {
                if (choice >= min && choice <= max)
                {
                    return choice;
                }
            }

            Console.Write($"Invalid choice! Enter number {min}-{max}: ");
        }
    }
}