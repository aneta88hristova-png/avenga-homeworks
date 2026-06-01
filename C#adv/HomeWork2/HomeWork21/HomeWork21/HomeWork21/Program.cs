
using HomeWork21.Models;
using HomeWork21.Database;

namespace HomeWork21
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== USER DATABASE SEARCH SYSTEM ===\n");

            bool running = true;

            while (running)
            {
                Console.WriteLine("\n" + new string('=', 60));
                Console.WriteLine("MAIN MENU");
                Console.WriteLine(new string('=', 60));
                Console.WriteLine("1. Search by ID");
                Console.WriteLine("2. Search by Name");
                Console.WriteLine("3. Search by Age (exact match)");
                Console.WriteLine("4. Search by Age Range");
                Console.WriteLine("5. Search by Name AND Age");
                Console.WriteLine("6. Universal Search (ID, Name, or Age)");
                Console.WriteLine("7. Display All Users");
                Console.WriteLine("8. Add New User");
                Console.WriteLine("9. Remove User by ID");
                Console.WriteLine("0. Exit");
                Console.Write("\nChoose an option (0-9): ");

                string choice = Console.ReadLine();

                switch (choice)
                {
                    case "1":
                        SearchByIdMenu();
                        break;
                    case "2":
                        SearchByNameMenu();
                        break;
                    case "3":
                        SearchByAgeMenu();
                        break;
                    case "4":
                        SearchByAgeRangeMenu();
                        break;
                    case "5":
                        SearchByNameAndAgeMenu();
                        break;
                    case "6":
                        UniversalSearchMenu();
                        break;
                    case "7":
                        UserDatabase.DisplayAllUsers();
                        break;
                    case "8":
                        AddUserMenu();
                        break;
                    case "9":
                        RemoveUserMenu();
                        break;
                    case "0":
                        running = false;
                        Console.WriteLine("\nThank you for using User Database System!");
                        break;
                    default:
                        Console.WriteLine("\n Invalid choice! Press any key to continue...");
                        Console.ReadKey();
                        break;
                }
            }
        }

        static void SearchByIdMenu()
        {
            Console.Clear();
            Console.WriteLine("=== SEARCH BY ID ===\n");

            int id = GetValidInt("Enter User ID: ");
            User user = UserDatabase.SearchById(id);

            if (user != null)
            {
                Console.WriteLine("\n User found:");
                user.DisplayInfo();
            }
            else
            {
                Console.WriteLine($"\n No user found with ID: {id}");
            }

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static void SearchByNameMenu()
        {
            Console.Clear();
            Console.WriteLine("=== SEARCH BY NAME ===\n");
            Console.WriteLine("(Case-insensitive, partial match allowed)\n");

            Console.Write("Enter Name (or part of name): ");
            string name = Console.ReadLine();

            List<User> results = UserDatabase.SearchByName(name);

            Console.WriteLine("\n SEARCH RESULTS:");
            Console.WriteLine(new string('-', 50));

            if (results.Count > 0)
            {
                foreach (User user in results)
                {
                    user.DisplayInfo();
                }
                Console.WriteLine($"\n  Found {results.Count} user(s)");
            }
            else
            {
                Console.WriteLine("  No users found matching that name.");
            }

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static void SearchByAgeMenu()
        {
            Console.Clear();
            Console.WriteLine("=== SEARCH BY AGE (EXACT MATCH) ===\n");

            int age = GetValidInt("Enter Age: ");
            List<User> results = UserDatabase.SearchByAge(age);

            Console.WriteLine("\n SEARCH RESULTS:");
            Console.WriteLine(new string('-', 50));

            if (results.Count > 0)
            {
                foreach (User user in results)
                {
                    user.DisplayInfo();
                }
                Console.WriteLine($"\n  Found {results.Count} user(s)");
            }
            else
            {
                Console.WriteLine($"  No users found with age: {age}");
            }

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static void SearchByAgeRangeMenu()
        {
            Console.Clear();
            Console.WriteLine("=== SEARCH BY AGE RANGE ===\n");

            int minAge = GetValidInt("Enter Minimum Age: ");
            int maxAge = GetValidInt("Enter Maximum Age: ");

            if (minAge > maxAge)
            {
                Console.WriteLine("\n Error: Minimum age cannot be greater than maximum age!");
            }
            else
            {
                List<User> results = UserDatabase.SearchByAgeRange(minAge, maxAge);

                Console.WriteLine($"\n USERS BETWEEN AGES {minAge} AND {maxAge}:");
                Console.WriteLine(new string('-', 50));

                if (results.Count > 0)
                {
                    foreach (User user in results)
                    {
                        user.DisplayInfo();
                    }
                    Console.WriteLine($"\n  Found {results.Count} user(s)");
                }
                else
                {
                    Console.WriteLine($"  No users found between ages {minAge} and {maxAge}");
                }
            }

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static void SearchByNameAndAgeMenu()
        {
            Console.Clear();
            Console.WriteLine("=== SEARCH BY NAME AND AGE ===\n");

            Console.Write("Enter Name: ");
            string name = Console.ReadLine();
            int age = GetValidInt("Enter Age: ");

            List<User> results = UserDatabase.SearchByNameAndAge(name, age);

            Console.WriteLine("\n SEARCH RESULTS:");
            Console.WriteLine(new string('-', 50));

            if (results.Count > 0)
            {
                foreach (User user in results)
                {
                    user.DisplayInfo();
                }
                Console.WriteLine($"\n  Found {results.Count} user(s)");
            }
            else
            {
                Console.WriteLine($"  No users found matching Name '{name}' and Age {age}");
            }

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static void UniversalSearchMenu()
        {
            Console.Clear();
            Console.WriteLine("=== UNIVERSAL SEARCH ===\n");
            Console.WriteLine("Search by ID, Name, or Age");
            Console.WriteLine("Examples: 'Alice', '5', '25'\n");

            Console.Write("Enter search keyword: ");
            string keyword = Console.ReadLine();

            List<User> results = UserDatabase.Search(keyword);

            Console.WriteLine("\n SEARCH RESULTS:");
            Console.WriteLine(new string('-', 50));

            if (results.Count > 0)
            {
                foreach (User user in results)
                {
                    user.DisplayInfo();
                }
                Console.WriteLine($"\n  Found {results.Count} user(s)");
            }
            else
            {
                Console.WriteLine($"  No users found matching '{keyword}'");
            }

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static void AddUserMenu()
        {
            Console.Clear();
            Console.WriteLine("=== ADD NEW USER ===\n");

            int id = GetValidInt("Enter User ID: ");

            // Check if ID already exists
            if (UserDatabase.SearchById(id) != null)
            {
                Console.WriteLine($"\n User with ID {id} already exists!");
                Console.WriteLine("\nPress any key to continue...");
                Console.ReadKey();
                return;
            }

            Console.Write("Enter Name: ");
            string name = Console.ReadLine();

            if (string.IsNullOrWhiteSpace(name))
            {
                Console.WriteLine("\n Name cannot be empty!");
                Console.WriteLine("\nPress any key to continue...");
                Console.ReadKey();
                return;
            }

            int age = GetValidInt("Enter Age: ");

            User newUser = new User(id, name, age);
            UserDatabase.AddUser(newUser);

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static void RemoveUserMenu()
        {
            Console.Clear();
            Console.WriteLine("=== REMOVE USER BY ID ===\n");

            UserDatabase.DisplayAllUsers();

            Console.WriteLine();
            int id = GetValidInt("Enter User ID to remove: ");

            UserDatabase.RemoveUser(id);

            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }

        static int GetValidInt(string prompt)
        {
            int result;
            while (true)
            {
                Console.Write(prompt);
                string input = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(input))
                {
                    Console.WriteLine("  ERROR: You must enter a value!");
                    continue;
                }

                if (!int.TryParse(input, out result) || result <= 0)
                {
                    Console.WriteLine("   ERROR: Enter a valid positive integer!");
                    continue;
                }

                return result;
            }
        }
    }
}