using System.Collections.Generic;

namespace SimpleATMApp
{
    public static class DataSeeder
    {
        public static List<Customer> CreateCustomers()
        {
            List<Customer> customers = new List<Customer>();

            customers.Add(new Customer("11112222", "1234", "John Smith", 1500m));
            customers.Add(new Customer("33334444", "4321", "Emma Johnson", 2500m));
            customers.Add(new Customer("55556666", "1111", "Michael Brown", 500m));
            customers.Add(new Customer("77778888", "2222", "Sarah Wilson", 3200m));

            return customers;
        }
    }
}