using HomeWork1_1.Interfaces;
namespace HomeWork1_1.Models
{
    public class Document : ISearchable
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }

        public Document(string title, string content, string author)
        {
            Title = title;
            Content = content;
            Author = author;
        }

        public bool Search(string word)
        {
            bool foundInTitle = Title?.IndexOf(word, StringComparison.OrdinalIgnoreCase) >= 0;
            bool foundInContent = Content?.IndexOf(word, StringComparison.OrdinalIgnoreCase) >= 0;
            bool foundInAuthor = Author?.IndexOf(word, StringComparison.OrdinalIgnoreCase) >= 0;

            if (foundInTitle || foundInContent || foundInAuthor)
            {
                Console.WriteLine($"  ✓ Found '{word}' in Document '{Title}'");
                return true;
            }

            Console.WriteLine($"  ✗ '{word}' NOT found in Document '{Title}'");
            return false;
        }
    }
}