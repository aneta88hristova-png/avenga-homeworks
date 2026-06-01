
using HomeWork21.Models;

namespace HomeWork21.Database
{
    public static class UserDatabase
    {
 
        private static List<User> _users = new List<User>();

        static UserDatabase()
        {
          
            _users.Add(new User(1, "Alice Johnson", 25));
            _users.Add(new User(2, "Bob Smith", 30));
            _users.Add(new User(3, "Charlie Brown", 22));
            _users.Add(new User(4, "Diana Prince", 28));
            _users.Add(new User(5, "Evan Wright", 35));
            _users.Add(new User(6, "Fiona Davis", 40));
            _users.Add(new User(7, "George Harris", 19));
            _users.Add(new User(8, "Hannah White", 33));
            _users.Add(new User(9, "Ian Miller", 27));
            _users.Add(new User(10, "Julia Roberts", 45));
        }


        public static User SearchById(int id)
        {
            return _users.FirstOrDefault(u => u.Id == id);
        }


        public static List<User> SearchByName(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
                return new List<User>();

            return _users.Where(u => u.Name.IndexOf(name, StringComparison.OrdinalIgnoreCase) >= 0).ToList();
        }

        public static List<User> SearchByAge(int age)
        {
            return _users.Where(u => u.Age == age).ToList();
        }

        public static List<User> SearchByAgeRange(int minAge, int maxAge)
        {
            return _users.Where(u => u.Age >= minAge && u.Age <= maxAge).ToList();
        }

        public static List<User> SearchByNameAndAge(string name, int age)
        {
            return _users.Where(u => u.Name.IndexOf(name, StringComparison.OrdinalIgnoreCase) >= 0 && u.Age == age).ToList();
        }

        public static List<User> Search(string keyword)
        {
            if (string.IsNullOrWhiteSpace(keyword))
                return new List<User>();

            if (int.TryParse(keyword, out int number))
            {
             
                return _users.Where(u => u.Id == number || u.Age == number).ToList();
            }
            else
            {
              
                return _users.Where(u => u.Name.IndexOf(keyword, StringComparison.OrdinalIgnoreCase) >= 0).ToList();
            }
        }

        public static List<User> GetAllUsers()
        {
            return _users.ToList();
        }

     
        public static void AddUser(User user)
        {
            if (user != null)
            {
                _users.Add(user);
                Console.WriteLine($" User '{user.Name}' added successfully!");
            }
        }

        public static bool RemoveUser(int id)
        {
            User user = SearchById(id);
            if (user != null)
            {
                _users.Remove(user);
                Console.WriteLine($" User '{user.Name}' (ID: {id}) removed successfully!");
                return true;
            }
            Console.WriteLine($" User with ID {id} not found!");
            return false;
        }

        public static void DisplayAllUsers()
        {
            Console.WriteLine("\n ALL USERS IN DATABASE:");
            Console.WriteLine(new string('-', 50));

            if (_users.Count == 0)
            {
                Console.WriteLine("  No users found in database.");
            }
            else
            {
                foreach (User user in _users)
                {
                    user.DisplayInfo();
                }
                Console.WriteLine($"\n  Total users: {_users.Count}");
            }
            Console.WriteLine(new string('-', 50));
        }
    }
}