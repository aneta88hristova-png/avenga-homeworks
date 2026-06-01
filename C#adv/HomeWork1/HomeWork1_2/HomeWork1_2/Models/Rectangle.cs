using HomeWork1_2.Interfaces;

namespace HomeWork1_2.Models
{
    public class Rectangle : IShape
    {
        public double Width { get; set; }
        public double Height { get; set; }

        public Rectangle(double width, double height)
        {
            Width = width;
            Height = height;
        }

        public double GetArea()
        {
            double area = Width * Height;
            Console.WriteLine($"  Rectangle ({Width} x {Height}) -> Area: {area}");
            return area;
        }
    }
}