class Program
{
    static void Main(string[] args)
    {
        FileManager fileManager = new FileManager();

        fileManager.CreateFolderAndFile();
        fileManager.AddNamesToFile();

        Console.WriteLine("\nPress any key to continue to Task 3...");
        Console.ReadKey();

        fileManager.FilterNamesByLetter();

        Console.WriteLine("\nPress any key to continue to Task 4...");
        Console.ReadKey();

        fileManager.AppendNamesToFiles();

        Console.WriteLine("\nAll tasks completed!");
        Console.ReadKey();
    }
}