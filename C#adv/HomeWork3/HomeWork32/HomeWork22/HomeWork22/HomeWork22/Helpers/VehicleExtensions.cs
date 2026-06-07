using HomeWork22.Models;

namespace HomeWork22.Helpers
{
    public static class VehicleExtensions
    {
        public static void Drive(this Car car)
        {
            Console.WriteLine("Driving");
        }

        public static void Wheelie(this MotorBike bike)
        {
            Console.WriteLine("Driving on one wheel");
        }

        public static void Sail(this Boat boat)
        {
            Console.WriteLine("Sailing");
        }

        public static void Fly(this Airplane plane)
        {
            Console.WriteLine("Flying");
        }
    }
}