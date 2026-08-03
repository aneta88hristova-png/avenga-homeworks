using TimeTracking.Domain.Database;
using TimeTracking.Domain.Models;
using TimeTracking.Services.Helpers;
using TimeTracking.Services.Interfaces;

namespace TimeTracking.Services.Implementations
{
    public class UserService : IUserService
    {
        private IDatabase<User> _database;

        public UserService()
        {
            _database = new Database<User>();
        }

        public User? Login(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            User? user = _database.GetAll().FirstOrDefault(x =>
                x.Username == username &&
                x.Password == password &&
                x.IsActive == true);

            if (user == null)
            {
                User? inactiveUser = _database.GetAll().FirstOrDefault(x =>
                    x.Username == username && x.Password == password && x.IsActive == false);

                if (inactiveUser != null)
                {
                    MessageHelper.PrintWarning("Your account is deactivated. Do you want to reactivate it? (y/n)");
                    string? response = Console.ReadLine()?.ToLower();
                    if (response == "y" || response == "yes")
                    {
                        ActivateAccount(inactiveUser.Id);
                        return _database.GetById(inactiveUser.Id);
                    }
                    return null;
                }
                return null;
            }
            return user;
        }

        public User? Register(User user)
        {
            if (_database.GetAll().Any(x => x.Username == user.Username))
            {
                MessageHelper.PrintError("Username already exists!");
                return null;
            }

            int id = _database.Insert(user);
            MessageHelper.PrintSuccess("Registration successful!");
            return _database.GetById(id);
        }

        public User GetById(int id)
        {
            return _database.GetById(id);
        }

        public User? GetByUsername(string username)
        {
            if (string.IsNullOrEmpty(username)) return null;
            return _database.GetAll().FirstOrDefault(x => x.Username == username);
        }

        public void ChangePassword(int userId, string oldPassword, string newPassword)
        {
            if (string.IsNullOrEmpty(oldPassword) || string.IsNullOrEmpty(newPassword))
            {
                MessageHelper.PrintError("Password cannot be empty!");
                return;
            }

            User user = _database.GetById(userId);
            if (user.Password != oldPassword)
            {
                MessageHelper.PrintError("Old password is incorrect");
                return;
            }

   
            if (!ValidationHelper.ValidatePassword(newPassword))
            {
                MessageHelper.PrintError("New password must be at least 6 characters, contain 1 capital letter and 1 number");
                return;
            }

            user.Password = newPassword;
            _database.Update(user);
            MessageHelper.PrintSuccess("Password changed successfully!");
        }

        public void ChangeFirstName(int userId, string newFirstName)
        {
            if (string.IsNullOrEmpty(newFirstName))
            {
                MessageHelper.PrintError("First name cannot be empty!");
                return;
            }

            if (!ValidationHelper.ValidateFirstName(newFirstName))
            {
                MessageHelper.PrintError("First name must be at least 2 characters and contain no numbers");
                return;
            }

            User user = _database.GetById(userId);
            user.FirstName = newFirstName;
            _database.Update(user);
            MessageHelper.PrintSuccess("First name changed successfully!");
        }

        public void ChangeLastName(int userId, string newLastName)
        {
            if (string.IsNullOrEmpty(newLastName))
            {
                MessageHelper.PrintError("Last name cannot be empty!");
                return;
            }

        
            if (!ValidationHelper.ValidateLastName(newLastName))
            {
                MessageHelper.PrintError("Last name must be at least 2 characters and contain no numbers");
                return;
            }

            User user = _database.GetById(userId);
            user.LastName = newLastName;
            _database.Update(user);
            MessageHelper.PrintSuccess("Last name changed successfully!");
        }

        public void DeactivateAccount(int userId)
        {
            User user = _database.GetById(userId);
            user.IsActive = false;
            _database.Update(user);
            MessageHelper.PrintSuccess("Account deactivated successfully!");
        }

        public void ActivateAccount(int userId)
        {
            User user = _database.GetById(userId);
            user.IsActive = true;
            _database.Update(user);
            MessageHelper.PrintSuccess("Account reactivated successfully!");
        }

        public void AddActivityRecord(User user, ActivityRecord record)
        {
            if (user == null || record == null) return;
            record.UserId = user.Id;
            user.Activities.Add(record);
            _database.Update(user);
        }

        public List<User> GetAllUsers()
        {
            return _database.GetAll();
        }
    }
}