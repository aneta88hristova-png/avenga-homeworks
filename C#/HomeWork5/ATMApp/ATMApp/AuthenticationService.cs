using System;
using System.Collections.Generic;

namespace SimpleATMApp
{
    class AuthenticationService
    {
        private List<Customer> customers;

        public AuthenticationService(List<Customer> allCustomers)
        {
            customers = allCustomers;
        }

        public Customer? Login()
        {
            Console.Clear();
            Console.WriteLine("=== ATM LOGIN ===");
            Console.Write("Enter Card Number: ");
            string cardNumber = Console.ReadLine();
            Console.Write("Enter PIN: ");
            string pin = Console.ReadLine();

            foreach (Customer c in customers)
            {
                if (c.CardNumber == cardNumber && c.ValidatePin(pin))
                {
                    return c;
                }
            }
            return null;
        }
    }
}