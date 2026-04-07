using System;

namespace SimpleATMApp
{
    public class Customer
    {
        private string _pin;
        private decimal _balance;

        public string CardNumber { get; set; }
        public string FullName { get; set; }

        public Customer(string cardNumber, string pin, string fullName, decimal balance)
        {
            CardNumber = cardNumber;
            _pin = pin;
            FullName = fullName;
            _balance = balance;
        }

        public bool ValidatePin(string enteredPin)
        {
            return _pin == enteredPin;
        }

        public decimal GetBalance()
        {
            return _balance;
        }

        public bool Withdraw(decimal amount)
        {
            if (amount > 0 && amount <= _balance)
            {
                _balance -= amount;
                return true;
            }
            return false;
        }

        public void Deposit(decimal amount)
        {
            if (amount > 0)
            {
                _balance += amount;
            }
        }
    }
}