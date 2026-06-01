
using HomeWork31.Utilities;

namespace HomeWork31
{
 
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }

        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public override string ToString()
        {
            return $"{Name} ({Age} years)";
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== GENERIC PRINT IN CONSOLE DEMO ===\n");

            Console.WriteLine("Print() - Single Items\n");

            PrintInConsole.Print(42);                          
            PrintInConsole.Print(3.14159);                   
            PrintInConsole.Print("Hello World");              
            PrintInConsole.Print(true);                       
            PrintInConsole.Print(new Person("Alice", 30));     
            PrintInConsole.Print((string)null);              

        
            Console.WriteLine("\n Print() with Label\n");

            PrintInConsole.Print("Age", 25);
            PrintInConsole.Print("Price", 99.99);
            PrintInConsole.Print("Message", "Success!");
            PrintInConsole.Print("Person", new Person("Bob", 35));

    
            Console.WriteLine("\n PrintFormatted()\n");

            PrintInConsole.PrintFormatted(12345.6789, "F2");  
            PrintInConsole.PrintFormatted(0.12345, "P1");      
            PrintInConsole.PrintFormatted(42, "X");           

   
            Console.WriteLine("\n PrintCollection()\n");

       
            List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
            List<string> names = new List<string> { "Alice", "Bob", "Charlie", "Diana" };
            List<double> prices = new List<double> { 19.99, 29.99, 39.99 };
            List<Person> people = new List<Person>
            {
                new Person("John", 25),
                new Person("Emma", 28),
                new Person("Michael", 32)
            };

            Console.WriteLine("Integers:");
            PrintInConsole.PrintCollection(numbers);

            Console.WriteLine("\nStrings:");
            PrintInConsole.PrintCollection(names);

            Console.WriteLine("\nDoubles:");
            PrintInConsole.PrintCollection(prices);

            Console.WriteLine("\nCustom Objects (Person):");
            PrintInConsole.PrintCollection(people);

            
            Console.WriteLine("\n PrintCollection() with Header\n");

            PrintInConsole.PrintCollection(numbers, " NUMBERS LIST");
            PrintInConsole.PrintCollection(names, " NAMES LIST");
            PrintInConsole.PrintCollection(people, " PEOPLE LIST");

      
            Console.WriteLine("\n PrintCollectionWithIndex()\n");

            PrintInConsole.PrintCollectionWithIndex(names);
            Console.WriteLine();
            PrintInConsole.PrintCollectionWithIndex(prices, 1);

           
            Console.WriteLine("\n PrintCollectionAsLine()\n");

            PrintInConsole.PrintCollectionAsLine(numbers);
            PrintInConsole.PrintCollectionAsLine(names, " → ");
            PrintInConsole.PrintCollectionAsLine(prices, " - ");

   
            Console.WriteLine("\n PrintDictionary()\n");

            Dictionary<int, string> employees = new Dictionary<int, string>
            {
                { 101, "Alice Johnson" },
                { 102, "Bob Smith" },
                { 103, "Charlie Brown" }
            };

            Dictionary<string, double> productPrices = new Dictionary<string, double>
            {
                { "Laptop", 999.99 },
                { "Mouse", 29.99 },
                { "Keyboard", 79.99 }
            };

            PrintInConsole.PrintDictionary(employees);
            Console.WriteLine();
            PrintInConsole.PrintDictionary(productPrices);

            Console.WriteLine("\n PrintCollectionFormatted()\n");

            PrintInConsole.PrintCollectionFormatted(people, p => $"{p.Name} is {p.Age} years old");
            PrintInConsole.PrintCollectionFormatted(numbers, n => $"Number {n} (square: {n * n})");

 
            Console.WriteLine("\n PrintLine()\n");

            PrintInConsole.PrintLine(1, 2, 3, 4, 5);
            PrintInConsole.PrintLine("Apple", "Banana", "Orange");
            PrintInConsole.PrintLine(10, "items", true, 3.14);
            PrintInConsole.PrintLine(new Person("Sarah", 29), "works at", "Company", 2024);

           
            Console.WriteLine("\n PrintTable() - Table Format\n");

            PrintInConsole.PrintTable(people, p => p.Name, p => p.Age);
            PrintInConsole.PrintTable(numbers, n => "Value: " + n, n => "Square: " + n * n);

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine("\n WORKING WITH DIFFERENT COLLECTION TYPES\n");

            Console.WriteLine("Array (string[]):");
            string[] colors = { "Red", "Green", "Blue", "Yellow" };
            PrintInConsole.PrintCollection(colors);

            Console.WriteLine("\nHashSet (int):");
            HashSet<int> uniqueNumbers = new HashSet<int> { 10, 20, 30, 40, 50 };
            PrintInConsole.PrintCollection(uniqueNumbers);

            Console.WriteLine("\nQueue (string):");
            Queue<string> queue = new Queue<string>();
            queue.Enqueue("First");
            queue.Enqueue("Second");
            queue.Enqueue("Third");
            PrintInConsole.PrintCollection(queue);

            Console.WriteLine("\nStack (int):");
            Stack<int> stack = new Stack<int>();
            stack.Push(100);
            stack.Push(200);
            stack.Push(300);
            PrintInConsole.PrintCollection(stack);

            Console.WriteLine("\nEmpty List:");
            List<string> emptyList = new List<string>();
            PrintInConsole.PrintCollection(emptyList);

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine("\n All generic print methods demonstrated successfully!");
            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }
    }
}