using HomeWork1_4.Models;

namespace HomeWork1_4
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== EMPLOYEE SALARY SYSTEM ===\n");

            CreateEmployeesManually();

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }

        static void CreateEmployeesManually()
        {
            Console.WriteLine("Enter employee information in USD ($)\n");

            Console.WriteLine(" MANAGER");
            Console.Write("  Enter Manager Name: ");
            string managerName = Console.ReadLine();

            int managerId = GetValidInt("  Enter Employee ID: ");
            double managerBaseSalary = GetValidDouble("  Enter Base Salary ($): ");
            double managerBonus = GetValidDouble("  Enter Bonus ($): ");
            int subordinates = GetValidInt("  Enter Number of Subordinates: ");

            Manager manager = new Manager(managerName, managerId, managerBaseSalary, managerBonus, subordinates);

            Console.WriteLine("\n PROGRAMMER");
            Console.Write("  Enter Programmer Name: ");
            string programmerName = Console.ReadLine();

            int programmerId = GetValidInt("  Enter Employee ID: ");
            double hourlyRate = GetValidDouble("  Enter Hourly Rate ($): ");
            int hoursWorked = GetValidInt("  Enter Hours Worked: ");

            Console.Write("  Enter Programming Language: ");
            string programmingLanguage = Console.ReadLine();

            Programmer programmer = new Programmer(programmerName, programmerId, hourlyRate, hoursWorked, programmingLanguage);

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine("\n📊 ALL EMPLOYEES SUMMARY\n");

            manager.DisplayInfo();
            programmer.DisplayInfo();

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine("\n POLYMORPHISM DEMO (List<Employee>):\n");

            List<Employee> employees = new List<Employee>
            {
                manager,
                programmer,
                new Manager("Alice Johnson", 103, 6000, 2000, 5),
                new Programmer("Bob Wilson", 104, 45, 160, "Python"),
                new Manager("Carol Brown", 105, 7500, 3000, 8),
                new Programmer("David Lee", 106, 55, 150, "JavaScript")
            };

            double totalSalary = 0;

            foreach (Employee emp in employees)
            {
                emp.Greeting();
                Console.WriteLine($"   Salary: {emp.CalculateSalary():C}\n");
                totalSalary += emp.CalculateSalary();
            }

            Console.WriteLine(new string('=', 60));
            Console.WriteLine($"\n💰 TOTAL SALARY EXPENSES: {totalSalary:C}");
            Console.WriteLine($"💰 AVERAGE SALARY: {totalSalary / employees.Count:C}");
        }

        static void CreatePreDefinedEmployees()
        {
           
            Manager manager1 = new Manager("John Doe", 101, 5000, 1000, 3);
            Manager manager2 = new Manager("Jane Smith", 102, 6000, 1500, 5);

            Programmer programmer1 = new Programmer("Bob Johnson", 103, 40, 160, "C#");
            Programmer programmer2 = new Programmer("Alice Brown", 104, 45, 150, "Java");
            Programmer programmer3 = new Programmer("Charlie Wilson", 105, 50, 140, "Python");

            List<Employee> employees = new List<Employee>
            {
                manager1,
                manager2,
                programmer1,
                programmer2,
                programmer3
            };

            Console.WriteLine("EMPLOYEE REPORT\n");

            foreach (Employee emp in employees)
            {
                emp.DisplayInfo();
            }

            // Calculate total salary
            double totalSalary = 0;
            foreach (Employee emp in employees)
            {
                totalSalary += emp.CalculateSalary();
            }

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine($"\n TOTAL MONTHLY SALARY EXPENSES: {totalSalary:C}");
            Console.WriteLine($" AVERAGE SALARY: {totalSalary / employees.Count:C}");

            // Find highest paid employee
            Employee highestPaid = employees[0];
            foreach (Employee emp in employees)
            {
                if (emp.CalculateSalary() > highestPaid.CalculateSalary())
                {
                    highestPaid = emp;
                }
            }

            Console.WriteLine($"\n HIGHEST PAID EMPLOYEE: {highestPaid.Name} with {highestPaid.CalculateSalary():C}");
        }

        // Helper method for integer input with validation
        static int GetValidInt(string prompt)
        {
            int result;
            while (true)
            {
                Console.Write(prompt);
                string input = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(input))
                {
                    Console.WriteLine("   ERROR: You must enter a value!\n");
                    continue;
                }

                if (!int.TryParse(input, out result) || result <= 0)
                {
                    Console.WriteLine("   ERROR: Enter a valid positive integer!\n");
                    continue;
                }

                return result;
            }
        }

        // Helper method for double input with validation
        static double GetValidDouble(string prompt)
        {
            double result;
            while (true)
            {
                Console.Write(prompt);
                string input = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(input))
                {
                    Console.WriteLine("   ERROR: You must enter a value!\n");
                    continue;
                }

                if (!double.TryParse(input, out result) || result <= 0)
                {
                    Console.WriteLine("   ERROR: Enter a valid positive number (use '.' for decimals)!\n");
                    continue;
                }

                return result;
            }
        }
    }
}