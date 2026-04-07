using System;
using System.Collections.Generic;

namespace SimpleATMApp
{
    class RegistrationService
    {
        private List<Customer> _customers;

        public RegistrationService(List<Customer> customers)
        {
            _customers = customers;
        }

        public void RegisterNewCard()
        {
            Console.Clear();
            Console.WriteLine("=== REGISTER NEW CARD ===");

           
            Console.Write("Enter your full name: ");
            string fullName = Console.ReadLine();

            Random rand = new Random();
            string cardNumber = rand.Next(10000000, 99999999).ToString();

            Console.Write("Create a 4-digit PIN: ");
            string pin = Console.ReadLine();

            Console.Write("Initial deposit amount: $");
            decimal balance = decimal.Parse(Console.ReadLine());

            Customer newCustomer = new Customer(cardNumber, pin, fullName, balance);
            _customers.Add(newCustomer);

            Console.WriteLine("\n✅ Account created successfully!");
            Console.WriteLine($"Your card number: {cardNumber}");
            Console.WriteLine($"Your PIN: {pin}");
            Console.WriteLine($"Balance: ${balance}");
            Console.WriteLine("\nPress any key to continue...");
            Console.ReadKey();
        }
    }
}