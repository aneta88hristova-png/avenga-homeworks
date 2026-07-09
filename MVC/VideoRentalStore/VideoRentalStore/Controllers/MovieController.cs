using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using VideoRentalStore.Models;

namespace VideoRentalStore.Controllers;

public class MoviesController : Controller
{
    public IActionResult Index()
    {
        if (HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Login", "Home");
        }

        var movies = StaticDb.Movies;
        ViewBag.UserName = HttpContext.Session.GetString("UserFullName");
        return View(movies);
    }

    public IActionResult Details(int id)
    {
        if (HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Login", "Home");
        }

        var movie = StaticDb.Movies.FirstOrDefault(m => m.Id == id);

        if (movie == null)
        {
            return NotFound();
        }

        var cast = StaticDb.Casts.Where(c => c.MovieId == id).ToList();
        ViewBag.Cast = cast;
        ViewBag.UserName = HttpContext.Session.GetString("UserFullName");

        return View(movie);
    }

    [HttpPost]
    public IActionResult Rent(int movieId)
    {
        var userId = HttpContext.Session.GetInt32("UserId");

        if (userId == null)
        {
            return RedirectToAction("Login", "Home");
        }

        var movie = StaticDb.Movies.FirstOrDefault(m => m.Id == movieId);

        if (movie == null || movie.Quantity <= 0)
        {
            ViewBag.Error = "Movie is not available for rent.";
            return RedirectToAction("Details", new { id = movieId });
        }

        var rental = new Rental
        {
            Id = StaticDb.Rentals.Count + 1,
            MovieId = movieId,
            UserId = userId.Value,
            RentedOn = DateTime.Now,
            ReturnedOn = null
        };

        StaticDb.Rentals.Add(rental);
        movie.Quantity--;

        return RedirectToAction("MyRentals");
    }

    public IActionResult MyRentals()
    {
        var userId = HttpContext.Session.GetInt32("UserId");

        if (userId == null)
        {
            return RedirectToAction("Login", "Home");
        }

        var activeRentals = StaticDb.Rentals
            .Where(r => r.UserId == userId && r.ReturnedOn == null)
            .ToList();

        var rentalViewModels = new List<object>();

        foreach (var rental in activeRentals)
        {
            var movie = StaticDb.Movies.FirstOrDefault(m => m.Id == rental.MovieId);
            rentalViewModels.Add(new
            {
                RentalId = rental.Id,
                MovieTitle = movie?.Title ?? "Unknown",
                MovieId = movie?.Id ?? 0,
                RentedOn = rental.RentedOn
            });
        }

        ViewBag.Rentals = rentalViewModels;
        ViewBag.UserName = HttpContext.Session.GetString("UserFullName");
        return View();
    }

    [HttpPost]
    public IActionResult Return(int rentalId)
    {
        var userId = HttpContext.Session.GetInt32("UserId");

        if (userId == null)
        {
            return RedirectToAction("Login", "Home");
        }

        var rental = StaticDb.Rentals.FirstOrDefault(r => r.Id == rentalId && r.UserId == userId);

        if (rental == null)
        {
            return NotFound();
        }

        rental.ReturnedOn = DateTime.Now;

        var movie = StaticDb.Movies.FirstOrDefault(m => m.Id == rental.MovieId);
        if (movie != null)
        {
            movie.Quantity++;
        }

        return RedirectToAction("MyRentals");
    }
}