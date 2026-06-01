namespace HomeWork1_3.Models
{
    public class Triangle : Shape
    {
        public double SideA { get; set; }
        public double SideB { get; set; }
        public double SideC { get; set; }
        public double Base { get; set; }
        public double Height { get; set; }

        public Triangle(double sideA, double sideB, double sideC, double baseLength, double height)
        {
            SideA = sideA;
            SideB = sideB;
            SideC = sideC;
            Base = baseLength;
            Height = height;
        }

        public Triangle(double baseLength, double height)
        {
            Base = baseLength;
            Height = height;
            SideA = SideB = SideC = baseLength; 
        }

        public override double CalculateArea()
        {
            return (Base * Height) / 2;
        }

        public override double CalculatePerimeter()
        {
            return SideA + SideB + SideC;
        }
    }
}