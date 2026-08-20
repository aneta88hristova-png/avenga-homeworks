using BooksApi.Models;
using BooksApi;
using Microsoft.AspNetCore.Mvc;

namespace BooksApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {

        [HttpGet]
        public IActionResult GetAllBooks()
        {
            return Ok(StaticDb.Books);
        }


        [HttpGet("by-index")] 
        public IActionResult GetBookByIndex([FromQuery] int index)
        {
            if (index < 0 || index >= StaticDb.Books.Count)
            {
                return NotFound($"Book with index {index} not found");
            }

            return Ok(StaticDb.Books[index]);
        }

   
        [HttpGet("search")]
        public IActionResult SearchBooks(
            [FromQuery] string? author,
            [FromQuery] string? title)
        {
            var result = StaticDb.Books.AsEnumerable();

            if (!string.IsNullOrEmpty(author))
            {
                result = result.Where(b => b.Author.Contains(author, StringComparison.OrdinalIgnoreCase));
            }

            if (!string.IsNullOrEmpty(title))
            {
                result = result.Where(b => b.Title.Contains(title, StringComparison.OrdinalIgnoreCase));
            }

            var books = result.ToList();

            if (!books.Any())
            {
                return NotFound("No books found matching your criteria");
            }

            return Ok(books);
        }

 
        [HttpPost]
        public IActionResult CreateBook([FromBody] Book newBook)
        {
            if (string.IsNullOrEmpty(newBook.Author) || string.IsNullOrEmpty(newBook.Title))
            {
                return BadRequest("Author and Title are required");
            }

            StaticDb.Books.Add(newBook);
            return Created("", newBook);
        }

        [HttpPost("bulk")]
        public IActionResult CreateBooks([FromBody] List<Book> newBooks)
        {
            if (newBooks == null || newBooks.Count == 0)
            {
                return BadRequest("Please provide at least one book");
            }

            foreach (var book in newBooks)
            {
                StaticDb.Books.Add(book);
            }

            var titles = newBooks.Select(b => b.Title).ToList();
            return Ok(titles);
        }
    }
}