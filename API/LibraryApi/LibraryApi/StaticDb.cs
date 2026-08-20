using LibraryApi.Models;

namespace LibraryApi
{
	public static class StaticDb
	{
		public static List<Book> Books = new List<Book>
		{
			new Book { Id = 1, Title = "The Hobbit", Author = "J.R.R. Tolkien", Year = 1937, Genre = "Fantasy" },
			new Book { Id = 2, Title = "1984", Author = "George Orwell", Year = 1949, Genre = "Dystopian" },
			new Book { Id = 3, Title = "Pride and Prejudice", Author = "Jane Austen", Year = 1813, Genre = "Romance" },
			new Book { Id = 4, Title = "The Catcher in the Rye", Author = "J.D. Salinger", Year = 1951, Genre = "Fiction" },
			new Book { Id = 5, Title = "To Kill a Mockingbird", Author = "Harper Lee", Year = 1960, Genre = "Fiction" }
		};
	}
}