namespace HomeWork1_3.Models
{
    public abstract class Shape
    {
    
        public abstract double CalculateArea();
        public abstract double CalculatePerimeter();

        public void DisplayInfo()
        {
            Console.WriteLine($"\n Shape: {this.GetType().Name}");
            Console.WriteLine($"   Area: {CalculateArea():F2} cm²");
            Console.WriteLine($"   Perimeter: {CalculatePerimeter():F2} cm");
        }
    }
}