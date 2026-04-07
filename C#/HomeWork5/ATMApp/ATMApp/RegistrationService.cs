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
            Console.WriteLine("Feature coming soon!");
        }
    }
}