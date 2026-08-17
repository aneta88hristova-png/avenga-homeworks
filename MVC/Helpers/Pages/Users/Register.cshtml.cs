using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorFormDemo.Models;

namespace RazorFormDemo.Pages.Users;

public class RegisterModel : PageModel
{
    [BindProperty]
    public UserModel UserInfo { get; set; } = new();

    public void OnGet()
    {
    }

    public IActionResult OnPost()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        // ✅ Ladda alla befintliga användare från fil
        var users = UserStorage.LoadUsers();

        // ✅ Lägg till nya användaren
        UserInfo.Id = users.Count + 1;
        users.Add(UserInfo);

        // ✅ Spara alla användare till fil
        UserStorage.SaveUsers(users);

        TempData["SuccessMessage"] = $"Welcome {UserInfo.FirstName}! Total users: {users.Count}";

        return RedirectToPage("Confirmation");
    }

    // Metod för att hämta alla användare
    public static List<UserModel> GetSavedUsers()
    {
        return UserStorage.LoadUsers();
    }
}