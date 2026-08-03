using System.Text.Json;
using TimeTracking.Domain.Models;

namespace TimeTracking.Services.Helpers
{
    public static class FileStorageHelper
    {
        private static string _filePath = "users.json";

        public static void SaveUsers(List<User> users)
        {
            try
            {
                var options = new JsonSerializerOptions { WriteIndented = true };
                string json = JsonSerializer.Serialize(users, options);
                File.WriteAllText(_filePath, json);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error saving data: {ex.Message}");
            }
        }

        public static List<User> LoadUsers()
        {
            try
            {
                if (!File.Exists(_filePath))
                    return new List<User>();

                string json = File.ReadAllText(_filePath);
                return JsonSerializer.Deserialize<List<User>>(json) ?? new List<User>();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error loading data: {ex.Message}");
                return new List<User>();
            }
        }
    }
}