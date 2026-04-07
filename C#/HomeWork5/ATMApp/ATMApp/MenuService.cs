using System;

namespace SimpleATMApp
{
    class MenuService
    {
        public void ShowWelcomeMessage(Customer customer)
        {
            Console.Clear();
            Console.WriteLine("=== WELCOME " + customer.FullName.ToUpper() + " ===");
        }

        public int GetUserChoice()
        {
            Console.WriteLine("");
            Console.WriteLine("1. Balance Checking");
            Console.WriteLine("2. Cash Withdrawal");
            Console.WriteLine("3. Cash Deposit");
            Console.WriteLine("4. Register New Card");
            Console.WriteLine("5. Logout");
            Console.Write("Your choice (1-5): ");

            string input = Console.ReadLine();
            if (int.TryParse(input, out int choice) && choice >= 1 && choice <= 5)
            {
                return choice;
            }
            return 0;
        }

        public bool AskForAnotherAction()
        {
            Console.Write("Another action? (Y/N): ");
            string? answer = Console.ReadLine()?.ToUpper();
            return answer == "Y";
        }

        public void PressAnyKey()
        {
            Console.WriteLine("");
            Console.WriteLine("Press any key to continue...");
            Console.ReadKey();
        }
    }
}