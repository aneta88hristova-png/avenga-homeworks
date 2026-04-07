using System;
using System.Collections.Generic;

namespace SimpleATMApp
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Customer> customers = DataSeeder.CreateCustomers();
            AuthenticationService auth = new AuthenticationService(customers);
            MenuService menu = new MenuService();
            BalanceService balance = new BalanceService();
            WithdrawalService withdraw = new WithdrawalService();
            DepositService deposit = new DepositService();
            RegistrationService register = new RegistrationService(customers);

            while (true)
            {
                Console.Clear();
                Console.WriteLine("=== WELCOME TO SIMPLE ATM ===");
                Console.WriteLine("1. Login");
                Console.WriteLine("2. Register New Card");
                Console.WriteLine("3. Exit");
                Console.Write("Choose (1-3): ");

                string choice = Console.ReadLine();

                if (choice == "1")
                {
                    Customer currentCustomer = auth.Login();

                    if (currentCustomer == null)
                    {
                        Console.WriteLine("Invalid card or PIN!");
                        menu.PressAnyKey();
                        continue;
                    }

                    bool loggedIn = true;

                    while (loggedIn)
                    {
                        Console.Clear();
                        Console.WriteLine("=== WELCOME " + currentCustomer.FullName.ToUpper() + " ===");
                        Console.WriteLine("");
                        Console.WriteLine("1. Check Balance");
                        Console.WriteLine("2. Withdraw Cash");
                        Console.WriteLine("3. Deposit Cash");
                        Console.WriteLine("4. Logout");
                        Console.Write("Choose (1-4): ");

                        string userChoice = Console.ReadLine();

                        if (userChoice == "1")
                        {
                            balance.CheckBalance(currentCustomer);
                            menu.PressAnyKey();
                        }
                        else if (userChoice == "2")
                        {
                            withdraw.WithdrawCash(currentCustomer);
                            menu.PressAnyKey();
                        }
                        else if (userChoice == "3")
                        {
                            deposit.DepositCash(currentCustomer);
                            menu.PressAnyKey();
                        }
                        else if (userChoice == "4")
                        {
                            Console.Clear();
                            Console.WriteLine("Goodbye " + currentCustomer.FullName + "!");
                            loggedIn = false;
                        }
                        else
                        {
                            Console.WriteLine("Invalid choice!");
                            menu.PressAnyKey();
                        }
                    }
                }
                else if (choice == "2")
                {
                    register.RegisterNewCard();
                }
                else if (choice == "3")
                {
                    Console.WriteLine("Thank you for using Simple ATM!");
                    break;
                }
                else
                {
                    Console.WriteLine("Invalid choice!");
                    menu.PressAnyKey();
                }
            }
        }
    }
}