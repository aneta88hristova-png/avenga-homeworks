using HomeWork22.Models;
using HomeWork22.Helpers;

namespace HomeWork22
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== VEHICLE INHERITANCE DEMO ===\n");

            Car car = new Car();
            MotorBike motorBike = new MotorBike();
            Boat boat = new Boat();
            Airplane plane = new Airplane();

            Console.WriteLine(" VEHICLE INFORMATION:\n");
            car.DisplayInfo();
            motorBike.DisplayInfo();
            boat.DisplayInfo();
            plane.DisplayInfo();

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine("\n VEHICLE ACTIONS (EXTENSION METHODS):\n");

            car.Drive();
            motorBike.Wheelie();
            boat.Sail();
            plane.Fly();

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine("\n ADDITIONAL DEMO WITH LIST:\n");

            List<Vehicle> vehicles = new List<Vehicle>
            {
                new Car(),
                new MotorBike(),
                new Boat(),
                new Airplane(),
                new Car(),
                new MotorBike()
            };

            int index = 1;
            foreach (Vehicle vehicle in vehicles)
            {
                Console.Write($"{index}. ");
                vehicle.DisplayInfo();

                if (vehicle is Car c)
                    c.Drive();
                else if (vehicle is MotorBike mb)
                    mb.Wheelie();
                else if (vehicle is Boat b)
                    b.Sail();
                else if (vehicle is Airplane a)
                    a.Fly();

                index++;
                Console.WriteLine();
            }

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}