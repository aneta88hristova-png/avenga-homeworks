using LibraryApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApi.Controllers
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

        [HttpGet("{id}")]
        public IActionResult GetBookById(int id)
        {
            var book = StaticDb.Books.FirstOrDefault(b => b.Id == id);

            if (book == null)
            {
                return NotFound($"Book with ID {id} not found");
            }

            return Ok(book);
        }

        [HttpGet("search")]
        public IActionResult SearchBooks(
            [FromQuery] string? genre,
            [FromQuery] int? year,
            [FromQuery] string? author)
        {
            var result = StaticDb.Books.AsEnumerable();

            if (!string.IsNullOrEmpty(genre))
            {
                result = result.Where(b => b.Genre.Contains(genre, StringComparison.OrdinalIgnoreCase));
            }

            if (year.HasValue)
            {
                result = result.Where(b => b.Year == year.Value);
            }

            if (!string.IsNullOrEmpty(author))
            {
                result = result.Where(b => b.Author.Contains(author, StringComparison.OrdinalIgnoreCase));
            }

            return Ok(result.ToList());
        }

        [HttpPost]
        public IActionResult CreateBook([FromBody] Book newBook)
        {
            if (StaticDb.Books.Count == 0)
            {
                newBook.Id = 1;
            }
            else
            {
                newBook.Id = StaticDb.Books.Max(b => b.Id) + 1;
            }

            StaticDb.Books.Add(newBook);

            return CreatedAtAction(nameof(GetBookById), new { id = newBook.Id }, newBook);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, [FromBody] Book updatedBook)
        {
            var existingBook = StaticDb.Books.FirstOrDefault(b => b.Id == id);

            if (existingBook == null)
            {
                return NotFound($"Book with ID {id} not found");
            }

            existingBook.Title = updatedBook.Title;
            existingBook.Author = updatedBook.Author;
            existingBook.Year = updatedBook.Year;
            existingBook.Genre = updatedBook.Genre;

            return Ok(existingBook);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = StaticDb.Books.FirstOrDefault(b => b.Id == id);

            if (book == null)
            {
                return NotFound($"Book with ID {id} not found");
            }

            StaticDb.Books.Remove(book);
            return Ok($"Book '{book.Title}' deleted successfully");
        }
    }
}