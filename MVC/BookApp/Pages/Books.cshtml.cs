using Microsoft.AspNetCore.Mvc.RazorPages;
using BookApp.Models;
using BookApp.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace BookApp.Pages
{
    public class BooksModel : PageModel
    {
        private List<Book> GetBooks()
        {
            return new List<Book>
            {
                new Book
                {
                    Id = 1,
                    Title = "1984",
                    Author = "George Orwell",
                    Year = 1949,
                    Price = 15.99m,
                    IsAvailable = true,
                    Genre = "Science Fiction",
                    Pages = 328,
                    Publisher = "Secker & Warburg",
                    CreatedDate = new DateTime(2023, 1, 15),
                    InternalCode = "TOP-SECRET-001"
                },
                new Book
                {
                    Id = 2,
                    Title = "To Kill a Mockingbird",
                    Author = "Harper Lee",
                    Year = 1960,
                    Price = 12.50m,
                    IsAvailable = true,
                    Genre = "Drama",
                    Pages = 281,
                    Publisher = "J.B. Lippincott",
                    CreatedDate = new DateTime(2023, 2, 20),
                    InternalCode = "TOP-SECRET-002"
                },
                new Book
                {
                    Id = 3,
                    Title = "The Great Gatsby",
                    Author = "F. Scott Fitzgerald",
                    Year = 1925,
                    Price = 10.99m,
                    IsAvailable = false,
                    Genre = "Classic",
                    Pages = 180,
                    Publisher = "Scribner",
                    CreatedDate = new DateTime(2023, 3, 10),
                    InternalCode = "TOP-SECRET-003"
                },
                new Book
                {
                    Id = 4,
                    Title = "Pride and Prejudice",
                    Author = "Jane Austen",
                    Year = 1813,
                    Price = 9.99m,
                    IsAvailable = true,
                    Genre = "Romance",
                    Pages = 279,
                    Publisher = "T. Egerton",
                    CreatedDate = new DateTime(2023, 4, 5),
                    InternalCode = "TOP-SECRET-004"
                },
                new Book
                {
                    Id = 5,
                    Title = "The Hobbit",
                    Author = "J.R.R. Tolkien",
                    Year = 1937,
                    Price = 18.99m,
                    IsAvailable = true,
                    Genre = "Fantasy",
                    Pages = 310,
                    Publisher = "Allen & Unwin",
                    CreatedDate = new DateTime(2023, 5, 12),
                    InternalCode = "TOP-SECRET-005"
                }
            };
        }

        // ViewModels 
        public List<BookViewModel> Books { get; set; } = new List<BookViewModel>();

        public void OnGet()
        {
            // Hämta Domain Models
            var domainBooks = GetBooks();

            // Mappa Domain Models → ViewModels
            Books = domainBooks.Select(book => new BookViewModel
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                // Formatera priset
                FormattedPrice = $"{book.Price:C}",  
                // Skapa status-text
                AvailabilityStatus = book.IsAvailable ? "✅ I lager" : "❌ Slut i lager",
                // Skapa display-text
                DisplayText = $"{book.Title} av {book.Author} ({book.Year})",
                // Formatera år
                YearDisplay = book.Year < 1950 ? $"{book.Year} (äldre bok)" : book.Year.ToString(),
                // Formatera genre
                GenreDisplay = $"📚 {book.Genre}"
            }).ToList();
        }
    }
}