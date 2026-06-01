namespace HomeWork1_4.Models
{
    public class Manager : Employee
    {
        public double BaseSalary { get; set; }
        public double Bonus { get; set; }
        public int NumberOfSubordinates { get; set; }

        public Manager(string name, int employeeId, double baseSalary, double bonus, int numberOfSubordinates)
            : base(name, employeeId)
        {
            BaseSalary = baseSalary;
            Bonus = bonus;
            NumberOfSubordinates = numberOfSubordinates;
        }

        public override double CalculateSalary()
        {
            double subordinateBonus = NumberOfSubordinates * 500;
            return BaseSalary + Bonus + subordinateBonus;
        }

        public override void DisplayInfo()
        {
            Console.WriteLine("\n" + new string('=', 50));
            Console.WriteLine(" MANAGER INFORMATION");
            Console.WriteLine(new string('=', 50));
            Console.WriteLine($"  Name: {Name}");
            Console.WriteLine($"  Employee ID: {EmployeeId}");
            Console.WriteLine($"  Position: Manager");
            Console.WriteLine($"  Base Salary: {BaseSalary:C}");
            Console.WriteLine($"  Bonus: {Bonus:C}");
            Console.WriteLine($"  Subordinates: {NumberOfSubordinates}");
            Console.WriteLine($"  Subordinate Bonus: {NumberOfSubordinates * 500:C}");
            Console.WriteLine($"  Total Salary: {CalculateSalary():C}");
        }
    }
}