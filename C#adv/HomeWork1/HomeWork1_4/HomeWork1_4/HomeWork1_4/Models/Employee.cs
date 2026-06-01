namespace HomeWork1_4.Models
{
    public abstract class Employee
    {
        // Properties common to all employees
        public string Name { get; set; }
        public int EmployeeId { get; set; }

        protected Employee(string name, int employeeId)
        {
            Name = name;
            EmployeeId = employeeId;
        }

        // Abstract methods - must be implemented by subclasses
        public abstract double CalculateSalary();
        public abstract void DisplayInfo();

        // Concrete method - common for all employees
        public void Greeting()
        {
            Console.WriteLine($"Hello, I'm employee {EmployeeId}, {Name}");
        }
    }
}