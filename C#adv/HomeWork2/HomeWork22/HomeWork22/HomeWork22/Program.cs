using HomeWork22.Models;

namespace HomeWork22
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== VEHICLE INHERITANCE DEMO ===\n");

            Vehicle car = new Car();
            Vehicle motorBike = new MotorBike();
            Vehicle boat = new Boat();
            Vehicle plane = new Airplane();

        
            car.DisplayInfo();
            motorBike.DisplayInfo();
            boat.DisplayInfo();
            plane.DisplayInfo();

            Console.WriteLine("\n" + new string('=', 50));
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
                index++;
            }

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}