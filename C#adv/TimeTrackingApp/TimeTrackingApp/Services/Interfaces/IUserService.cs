using TimeTracking.Domain.Models;

namespace TimeTracking.Services.Interfaces
{
    public interface IUserService
    {
        User? Login(string username, string password);
        User? Register(User user);
        User GetById(int id);
        void ChangePassword(int userId, string oldPassword, string newPassword);
        void ChangeFirstName(int userId, string newFirstName);
        void ChangeLastName(int userId, string newLastName);
        void DeactivateAccount(int userId);
        void ActivateAccount(int userId);
        User? GetByUsername(string username);
        void AddActivityRecord(User user, ActivityRecord record);
    }
}