using HomeWork1_2.Interfaces;
namespace HomeWork1_2.Models
{
    public class Circle : IShape
    {
        public double Radius { get; set; }

        public Circle(double radius)
        {
            Radius = radius;
        }

        public double GetArea()
        {
            double area = Math.PI * Radius * Radius;
            Console.WriteLine($"  Circle (radius: {Radius}) -> Area: {area:F2}");
            return area;
        }
    }
}