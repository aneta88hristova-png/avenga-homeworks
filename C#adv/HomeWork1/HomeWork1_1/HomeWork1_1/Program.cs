using HomeWork1_1.Interfaces;
using HomeWork1_1.Models;

namespace HomeWork1_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== SEARCHABLE INTERFACE DEMO ===\n");

            Document doc1 = new Document(
                "C# Programming Guide",
                "C# is a modern object-oriented programming language developed by Microsoft.",
                "John Doe"
            );

            Document doc2 = new Document(
                "Advanced C# Patterns",
                "Learn about design patterns, SOLID principles, and best practices.",
                "Jane Smith"
            );

            Document doc3 = new Document(
                "Introduction to SQL",
                "SQL is used for managing relational databases.",
                "Bob Johnson"
            );

            Document doc4 = new Document(
                "Microsoft Azure Fundamentals",
                "Learn about cloud computing with Microsoft Azure.",
                "Sarah Williams"
            );

            WebPage page1 = new WebPage(
                "https://dotnet.microsoft.com",
                "Microsoft's official .NET platform for building applications.",
                "Official .NET documentation",
                new List<string> { "dotnet", "microsoft", "csharp", "framework" }
            );

            WebPage page2 = new WebPage(
                "https://stackoverflow.com/questions/csharp",
                "Q&A community for C# developers.",
                "Stack Overflow - C# questions",
                new List<string> { "stackoverflow", "csharp", "help", "questions" }
            );

            WebPage page3 = new WebPage(
                "https://github.com/search?q=csharp",
                "Search GitHub repositories for C# projects.",
                "GitHub - C# repositories",
                new List<string> { "github", "opensource", "csharp", "repositories" }
            );

            WebPage page4 = new WebPage(
                "https://learn.microsoft.com/en-us/dotnet/csharp/",
                "Official Microsoft Learn documentation for C#.",
                "Microsoft Learn - C# documentation",
                new List<string> { "microsoft", "learn", "csharp", "tutorial" }
            );

            List<ISearchable> searchableItems = new List<ISearchable>
            {
                doc1, doc2, doc3, doc4,
                page1, page2, page3, page4
            };

            Console.WriteLine("📝 SEARCHING FOR: 'C#'\n");
            SearchAll(searchableItems, "C#");

            Console.WriteLine("\n" + new string('-', 60));
            Console.WriteLine("\n🔍 SEARCHING FOR: 'Microsoft'\n");
            SearchAll(searchableItems, "Microsoft");

            Console.WriteLine("\n" + new string('-', 60));
            Console.WriteLine("\n🔍 SEARCHING FOR: 'Python'\n");
            SearchAll(searchableItems, "Python");

            Console.WriteLine("\n" + new string('-', 60));
            Console.WriteLine("\n🔍 SEARCHING FOR: 'SQL'\n");
            SearchAll(searchableItems, "SQL");

            Console.WriteLine("\n" + new string('=', 60));
            Console.WriteLine("\n🎯 POLYMORPHISM DEMO:\n");

            ISearchable[] searchableArray = { doc1, page1, doc3, page2 };

            foreach (var item in searchableArray)
            {
                item.Search("programming");
            }

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }

        static void SearchAll(List<ISearchable> items, string keyword)
        {
            int foundCount = 0;

            foreach (var item in items)
            {
                if (item.Search(keyword))
                {
                    foundCount++;
                }
            }

            Console.WriteLine($"\n  📊 Summary: Found '{keyword}' in {foundCount} out of {items.Count} items");
        }
    }
}