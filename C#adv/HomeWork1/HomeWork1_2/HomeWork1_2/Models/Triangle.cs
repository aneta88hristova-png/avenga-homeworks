using HomeWork1_2.Interfaces;

namespace HomeWork1_2.Models
{
    public class Triangle : IShape
    {
        public double Base { get; set; }
        public double Height { get; set; }

        public Triangle(double baseLength, double height)
        {
            Base = baseLength;
            Height = height;
        }

        public double GetArea()
        {
            double area = (Base * Height) / 2;
            Console.WriteLine($"  Triangle (base: {Base}, height: {Height}) -> Area: {area}");
            return area;
        }
    }
}