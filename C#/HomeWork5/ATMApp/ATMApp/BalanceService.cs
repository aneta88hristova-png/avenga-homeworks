using System;

namespace SimpleATMApp
{
    class BalanceService
    {
        public void CheckBalance(Customer customer)
        {
            Console.Clear();
            Console.WriteLine("=== BALANCE CHECK ===");
            Console.WriteLine($"Your balance: ${customer.GetBalance():F2}");
        }
    }
}