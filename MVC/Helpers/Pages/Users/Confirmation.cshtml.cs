using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorFormDemo.Models;

namespace RazorFormDemo.Pages.Users;

public class ConfirmationModel : PageModel
{
    public string? Message { get; set; }
    public List<UserModel> AllUsers { get; set; } = new();

    public void OnGet()
    {
        Message = TempData["SuccessMessage"] as string ?? "Registration successful!";

        // ✅ Hämta alla användare från fil
        AllUsers = UserStorage.LoadUsers();
    }
}