using TimeTracking.Domain.Enums;
using TimeTracking.Domain.Models;
using TimeTracking.Services.Helpers;
using TimeTracking.Services.Interfaces;

namespace TimeTracking.Services.Implementations
{
    public class UIService : IUIService
    {
        private User? _currentUser;

        public UIService(User? currentUser = null)
        {
            _currentUser = currentUser;
        }

        private int DisplayMenu(string title, List<string> options)
        {
            while (true)
            {
                Console.Clear();
                Console.WriteLine($"=== {title} ===\n");
                for (int i = 0; i < options.Count; i++)
                {
                    Console.WriteLine($"{i + 1}. {options[i]}");
                }
                Console.WriteLine();

                string? input = Console.ReadLine();
                int choice = ValidationHelper.ValidateNumber(input, options.Count);

                if (choice == -1)
                {
                    MessageHelper.PrintError("Please enter a valid number from the menu!");
                    Console.ReadKey();
                    continue;
                }
                return choice;
            }
        }

        public int ShowLoginMenu()
        {
            return DisplayMenu("LOGIN MENU", new List<string>
            {
                "Login",
                "Register",
                "Exit"
            });
        }

        public int ShowMainMenu()
        {
            List<string> options = new List<string>
            {
                "Track Activity",
                "View Statistics",
                "Account Management",
                "Log Out"
            };
            return DisplayMenu("MAIN MENU", options);
        }

        public int ShowActivitiesMenu()
        {
            List<string> options = Enum.GetNames(typeof(ActivityTypeEnum))
                .Select(x => x.Replace("OtherHobbies", "Other Hobbies"))
                .ToList();
            options.Add("Back to Main Menu");
            return DisplayMenu("SELECT ACTIVITY", options);
        }

        public int ShowStatisticsMenu()
        {
            List<string> options = new List<string>
            {
                "Reading Statistics",
                "Exercising Statistics",
                "Working Statistics",
                "Hobbies Statistics",
                "Global Statistics",
                "Back to Main Menu"
            };
            return DisplayMenu("STATISTICS MENU", options);
        }

        public int ShowAccountMenu()
        {
            List<string> options = new List<string>
            {
                "Change Password",
                "Change First Name",
                "Change Last Name",
                "Deactivate Account",
                "Back to Main Menu"
            };
            return DisplayMenu("ACCOUNT MANAGEMENT", options);
        }

        public User GetRegistrationData()
        {
            Console.Clear();
            Console.WriteLine("=== REGISTRATION ===\n");

            // First Name
            string firstName;
            do
            {
                Console.Write("First Name (min 2 characters, no numbers): ");
                firstName = Console.ReadLine() ?? string.Empty;
                if (!ValidationHelper.ValidateFirstName(firstName))
                {
                    MessageHelper.PrintError("First name must be at least 2 characters and contain no numbers!");
                }
            } while (!ValidationHelper.ValidateFirstName(firstName));

            // Last Name
            string lastName;
            do
            {
                Console.Write("Last Name (min 2 characters, no numbers): ");
                lastName = Console.ReadLine() ?? string.Empty;
                if (!ValidationHelper.ValidateLastName(lastName))
                {
                    MessageHelper.PrintError("Last name must be at least 2 characters and contain no numbers!");
                }
            } while (!ValidationHelper.ValidateLastName(lastName));

            // Age
            int age;
            do
            {
                Console.Write("Age (18-120): ");
                string ageInput = Console.ReadLine() ?? "0";
                int.TryParse(ageInput, out age);
                if (!ValidationHelper.ValidateAge(age))
                {
                    MessageHelper.PrintError("Age must be between 18 and 120!");
                }
            } while (!ValidationHelper.ValidateAge(age));

            // Username
            string username;
            do
            {
                Console.Write("Username (min 5 characters): ");
                username = Console.ReadLine() ?? string.Empty;
                if (!ValidationHelper.ValidateUsername(username))
                {
                    MessageHelper.PrintError("Username must be at least 5 characters!");
                }
            } while (!ValidationHelper.ValidateUsername(username));

            // Password
            string password;
            do
            {
                Console.Write("Password (min 6 chars, 1 capital, 1 number): ");
                password = Console.ReadLine() ?? string.Empty;
                if (!ValidationHelper.ValidatePassword(password))
                {
                    MessageHelper.PrintError("Password must be at least 6 characters, contain 1 capital letter and 1 number!");
                }
            } while (!ValidationHelper.ValidatePassword(password));

            return new User
            {
                FirstName = firstName,
                LastName = lastName,
                Age = age,
                Username = username,
                Password = password
            };
        }
        public string GetUsername()
        {
            Console.Write("Username: ");
            return Console.ReadLine() ?? string.Empty;
        }

        public string GetPassword()
        {
            Console.Write("Password: ");
            return Console.ReadLine() ?? string.Empty;
        }

        public ActivityTypeEnum SelectActivityType()
        {
            int choice = ShowActivitiesMenu();
            if (choice == 6)
                return ActivityTypeEnum.OtherHobbies;
            return (ActivityTypeEnum)choice;
        }

        public (int pages, ReadingTypeEnum type) GetReadingExtraInfo()
        {
            Console.Write("Enter number of pages: ");
            string? pagesInput = Console.ReadLine() ?? "0";
            int pages = ValidationHelper.ValidatePositiveNumber(pagesInput);
            while (pages == -1)
            {
                MessageHelper.PrintError("Please enter a valid number of pages");
                pagesInput = Console.ReadLine() ?? "0";
                pages = ValidationHelper.ValidatePositiveNumber(pagesInput);
            }

            Console.WriteLine("\nSelect Reading Type:");
            var types = Enum.GetValues(typeof(ReadingTypeEnum));
            for (int i = 0; i < types.Length; i++)
            {
                Console.WriteLine($"{i + 1}. {types.GetValue(i)}");
            }
            string? typeInput = Console.ReadLine() ?? "0";
            int typeChoice = ValidationHelper.ValidateNumber(typeInput, types.Length);
            while (typeChoice == -1)
            {
                MessageHelper.PrintError("Please select a valid reading type");
                typeInput = Console.ReadLine() ?? "0";
                typeChoice = ValidationHelper.ValidateNumber(typeInput, types.Length);
            }

            return (pages, (ReadingTypeEnum)typeChoice);
        }

        public ExercisingTypeEnum GetExercisingType()
        {
            Console.WriteLine("\nSelect Exercising Type:");
            var types = Enum.GetValues(typeof(ExercisingTypeEnum));
            for (int i = 0; i < types.Length; i++)
            {
                Console.WriteLine($"{i + 1}. {types.GetValue(i)}");
            }
            string? input = Console.ReadLine() ?? "0";
            int choice = ValidationHelper.ValidateNumber(input, types.Length);
            while (choice == -1)
            {
                MessageHelper.PrintError("Please select a valid exercising type");
                input = Console.ReadLine() ?? "0";
                choice = ValidationHelper.ValidateNumber(input, types.Length);
            }
            return (ExercisingTypeEnum)choice;
        }

        public WorkingTypeEnum GetWorkingType()
        {
            Console.WriteLine("\nSelect Working Location:");
            var types = Enum.GetValues(typeof(WorkingTypeEnum));
            for (int i = 0; i < types.Length; i++)
            {
                Console.WriteLine($"{i + 1}. {types.GetValue(i)}");
            }
            string? input = Console.ReadLine() ?? "0";
            int choice = ValidationHelper.ValidateNumber(input, types.Length);
            while (choice == -1)
            {
                MessageHelper.PrintError("Please select a valid working location");
                input = Console.ReadLine() ?? "0";
                choice = ValidationHelper.ValidateNumber(input, types.Length);
            }
            return (WorkingTypeEnum)choice;
        }

        public string GetHobbyName()
        {
            Console.Write("Enter hobby name: ");
            return Console.ReadLine() ?? "Unknown Hobby";
        }

        public int GetValidatedNumber(string prompt, int range)
        {
            while (true)
            {
                Console.Write(prompt);
                string? input = Console.ReadLine() ?? "0";
                int result = ValidationHelper.ValidateNumber(input, range);
                if (result != -1)
                    return result;
                MessageHelper.PrintError($"Please enter a number between 1 and {range}");
            }
        }

        public int GetValidatedPositiveNumber(string prompt)
        {
            while (true)
            {
                Console.Write(prompt);
                string? input = Console.ReadLine() ?? "0";
                int result = ValidationHelper.ValidatePositiveNumber(input);
                if (result != -1)
                    return result;
                MessageHelper.PrintError("Please enter a positive number");
            }
        }
    }
}