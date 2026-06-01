namespace HomeWork1_4.Models
{
    public class Programmer : Employee
    {
     
        public double HourlyRate { get; set; }
        public int HoursWorked { get; set; }
        public string ProgrammingLanguage { get; set; }

        public Programmer(string name, int employeeId, double hourlyRate, int hoursWorked, string programmingLanguage)
            : base(name, employeeId)
        {
            HourlyRate = hourlyRate;
            HoursWorked = hoursWorked;
            ProgrammingLanguage = programmingLanguage;
        }

        public override double CalculateSalary()
        {
            return HourlyRate * HoursWorked;
        }

        public override void DisplayInfo()
        {
            Console.WriteLine("\n" + new string('=', 50));
            Console.WriteLine("💻 PROGRAMMER INFORMATION");
            Console.WriteLine(new string('=', 50));
            Console.WriteLine($"  Name: {Name}");
            Console.WriteLine($"  Employee ID: {EmployeeId}");
            Console.WriteLine($"  Position: Programmer");
            Console.WriteLine($"  Programming Language: {ProgrammingLanguage}");
            Console.WriteLine($"  Hourly Rate: {HourlyRate:C}");
            Console.WriteLine($"  Hours Worked: {HoursWorked}");
            Console.WriteLine($"  Total Salary: {CalculateSalary():C}");
        }
    }
}