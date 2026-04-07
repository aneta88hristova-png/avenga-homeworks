using System;

namespace SimpleATMApp
{
    class DepositService
    {
        public void DepositCash(Customer customer)
        {
            Console.Clear();
            Console.Write("Amount to deposit: $");

            string input = Console.ReadLine();
            if (decimal.TryParse(input, out decimal amount) && amount > 0)
            {
                customer.Deposit(amount);
                Console.WriteLine($"Success! New balance: ${customer.GetBalance():F2}");
            }
            else
            {
                Console.WriteLine("Invalid amount!");
            }
        }
    }
}