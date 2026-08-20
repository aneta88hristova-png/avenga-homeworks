using BooksApi.Models;

namespace BooksApi
{
    public static class StaticDb
    {
        public static List<Book> Books = new List<Book>
        {
            new Book { Author = "Себастијан Фицек", Title = "Пациентот" },
            new Book { Author = "Крис Картер", Title = "Скулптор на смртта" },
            new Book { Author = "Агата Кристи", Title = "И не остана ниту еден" },
            new Book { Author = "Шеви Стивенс", Title = "Исчезната без трага" },
            new Book { Author = "Алекс Мајклидис", Title = "Немата пациентка" }
        };
    }
}