using System;

namespace SimpleATMApp
{
    class WithdrawalService
    {
        public void WithdrawCash(Customer customer)
        {
            Console.Clear();
            Console.WriteLine("=== CASH WITHDRAWAL ===");
            Console.Write("Amount to withdraw: $");

            string? input = Console.ReadLine();
            if (decimal.TryParse(input, out decimal amount) && amount > 0)
            {
                if (customer.Withdraw(amount))
                {
                    Console.WriteLine($"Success! New balance: ${customer.GetBalance():F2}");
                }
                else
                {
                    Console.WriteLine("Insufficient funds!");
                }
            }
            else
            {
                Console.WriteLine("Invalid amount!");
            }
        }
    }
}