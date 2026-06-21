public class FileManager
{
    private string folderPath = "Files";
    private string filePath = "Files/names.txt";

    public void CreateFolderAndFile()
    {
        try
        {
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
                Console.WriteLine($"Folder '{folderPath}' created successfully!");
            }
            else
            {
                Console.WriteLine($"Folder '{folderPath}' already exists.");
            }

            if (!File.Exists(filePath))
            {
                File.Create(filePath).Close();
                Console.WriteLine($"File '{filePath}' created successfully!");
            }
            else
            {
                Console.WriteLine($"File '{filePath}' already exists.");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error creating folder/file: {ex.Message}");
        }
    }

    public void AddNamesToFile()
    {
        try
        {
            Console.WriteLine("\n=== Add Names to File ===");
            Console.WriteLine("Enter names (one per line). Type 'done' or press Enter on empty line to finish:");

            List<string> names = new List<string>();
            string input;

            while (true)
            {
                Console.Write("Enter name: ");
                input = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(input) || input.ToLower() == "done")
                    break;

                names.Add(input);
            }

            if (names.Count > 0)
            {
                File.AppendAllLines(filePath, names);
                Console.WriteLine($"\n{names.Count} names have been added to the file!");
            }
            else
            {
                Console.WriteLine("No names were added.");
            }

            DisplayFileContent();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error adding names: {ex.Message}");
        }
    }

    public void FilterNamesByLetter()
    {
        try
        {
            Console.WriteLine("\n=== Filter Names by Letter (Task 3) ===");

            if (!File.Exists(filePath))
            {
                Console.WriteLine("The file 'names.txt' does not exist!");
                return;
            }

            List<string> allNames = File.ReadAllLines(filePath)
                                       .Where(name => !string.IsNullOrWhiteSpace(name))
                                       .ToList();

            if (allNames.Count == 0)
            {
                Console.WriteLine("The file is empty. No names to filter.");
                return;
            }

            Console.WriteLine($"Total names in file: {allNames.Count}");

            for (char letter = 'A'; letter <= 'Z'; letter++)
            {
                var filteredNames = allNames
                    .Where(name => name.ToUpper().StartsWith(letter.ToString()))
                    .ToList();

                if (filteredNames.Count > 0)
                {
                    string newFileName = $"Files/namesStartingWith_{letter}.txt";
                    File.WriteAllLines(newFileName, filteredNames);
                    Console.WriteLine($"Created {newFileName} with {filteredNames.Count} names starting with '{letter}'");
                }
            }

            Console.WriteLine("\nFiltering completed!");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error filtering names: {ex.Message}");
        }
    }

    public void AppendNamesToFiles()
    {
        try
        {
            Console.WriteLine("\n=== Append Names to Files (Task 4) ===");

            if (!File.Exists(filePath))
            {
                Console.WriteLine("The file 'names.txt' does not exist!");
                return;
            }

            List<string> allNames = File.ReadAllLines(filePath)
                                       .Where(name => !string.IsNullOrWhiteSpace(name))
                                       .ToList();

            if (allNames.Count == 0)
            {
                Console.WriteLine("The file is empty. No names to process.");
                return;
            }

            Console.WriteLine($"Total names in file: {allNames.Count}");

            for (char letter = 'A'; letter <= 'Z'; letter++)
            {
                string newFileName = $"Files/namesStartingWith_{letter}.txt";
                var filteredNames = allNames
                    .Where(name => name.ToUpper().StartsWith(letter.ToString()))
                    .ToList();

                if (filteredNames.Count > 0)
                {
                    if (File.Exists(newFileName))
                    {
                        var existingNames = File.ReadAllLines(newFileName)
                                                .Where(name => !string.IsNullOrWhiteSpace(name))
                                                .ToList();

                        var newNamesToAdd = filteredNames
                            .Where(name => !existingNames.Contains(name))
                            .ToList();

                        if (newNamesToAdd.Count > 0)
                        {
                            File.AppendAllLines(newFileName, newNamesToAdd);
                            Console.WriteLine($"Added {newNamesToAdd.Count} new names to {newFileName} (existing: {existingNames.Count})");
                        }
                        else
                        {
                            Console.WriteLine($"No new names to add to {newFileName} (already has {existingNames.Count} names)");
                        }
                    }
                    else
                    {
                        File.WriteAllLines(newFileName, filteredNames);
                        Console.WriteLine($"Created {newFileName} with {filteredNames.Count} names starting with '{letter}'");
                    }
                }
            }

            Console.WriteLine("\nAppending completed!");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error appending names: {ex.Message}");
        }
    }

    private void DisplayFileContent()
    {
        if (File.Exists(filePath))
        {
            var names = File.ReadAllLines(filePath);
            Console.WriteLine($"\nCurrent content of names.txt ({names.Length} names):");
            for (int i = 0; i < names.Length; i++)
            {
                Console.WriteLine($"{i + 1}. {names[i]}");
            }
        }
    }
}