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

            Console.WriteLine("=== WELCOME TO SIMPLE ATM ===");
            Console.WriteLine("Test accounts: 11112222/1234, 33334444/4321, 55556666/1111");

            while (true)
            {
                Customer currentCustomer = auth.Login();
                if (currentCustomer == null)
                {
                    Console.WriteLine("Invalid card or PIN!");
                    menu.PressAnyKey();
                    continue;
                }

                menu.ShowWelcomeMessage(currentCustomer);
                menu.PressAnyKey();
                bool customerSession = true;

                while (customerSession)
                {
                    menu.ShowWelcomeMessage(currentCustomer);
                    int choice = menu.GetUserChoice();

                    switch (choice)
                    {
                        case 1:
                            balance.CheckBalance(currentCustomer);
                            break;
                        case 2:
                            withdraw.WithdrawCash(currentCustomer);
                            break;
                        case 3:
                            deposit.DepositCash(currentCustomer);
                            break;
                        case 4:
                            register.RegisterNewCard();
                            break;
                        case 5:
                            Console.Clear();
                            Console.WriteLine("Goodbye " + currentCustomer.FullName + "!");
                            customerSession = false;
                            break;
                        default:
                            Console.WriteLine("Invalid choice!");
                            break;
                    }

                    if (customerSession && choice >= 1 && choice <= 4)
                    {
                        menu.PressAnyKey();
                        customerSession = menu.AskForAnotherAction();
                    }
                }
            }
        }
    }
}