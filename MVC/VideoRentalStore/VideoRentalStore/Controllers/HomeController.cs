using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using VideoRentalStore.Models;

namespace VideoRentalStore.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var userId = HttpContext.Session.GetInt32("UserId");
        if (userId != null)
        {
            ViewBag.UserName = HttpContext.Session.GetString("UserFullName");
        }
        return View();
    }

    public IActionResult Login()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Login(string cardNumber)
    {
        var user = StaticDb.Users.FirstOrDefault(u => u.CardNumber == cardNumber);

        if (user == null)
        {
            ViewBag.Error = "Invalid card number. Please try again.";
            return View();
        }

        HttpContext.Session.SetInt32("UserId", user.Id);
        HttpContext.Session.SetString("UserFullName", user.FullName);

        return RedirectToAction("Index", "Movies");
    }

    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index", "Home");
    }
}