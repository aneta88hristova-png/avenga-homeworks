using System.Text.Json;

namespace RazorFormDemo.Models;

public static class UserStorage
{
    private static string FilePath = "users.json";

    // Spara alla användare till fil
    public static void SaveUsers(List<UserModel> users)
    {
        var json = JsonSerializer.Serialize(users, new JsonSerializerOptions { WriteIndented = true });
        File.WriteAllText(FilePath, json);
    }

    // Hämta alla användare från fil
    public static List<UserModel> LoadUsers()
    {
        if (!File.Exists(FilePath))
        {
            return new List<UserModel>();
        }

        var json = File.ReadAllText(FilePath);
        return JsonSerializer.Deserialize<List<UserModel>>(json) ?? new List<UserModel>();
    }
}