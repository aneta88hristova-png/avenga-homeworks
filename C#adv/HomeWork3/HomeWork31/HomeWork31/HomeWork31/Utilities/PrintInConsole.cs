namespace HomeWork31.Utilities
{
    public static class PrintInConsole
    {
  
        public static void Print<T>(T item)
        {
            Console.WriteLine(item?.ToString() ?? "null");
        }

        public static void Print<T>(string label, T item)
        {
            Console.WriteLine($"{label}: {item?.ToString() ?? "null"}");
        }

        public static void PrintFormatted<T>(T item, string format)
        {
            if (item == null)
            {
                Console.WriteLine("null");
                return;
            }

            if (item is IFormattable formattable)
            {
                Console.WriteLine(formattable.ToString(format, null));
            }
            else
            {
                Console.WriteLine(item.ToString());
            }
        }

        public static void PrintCollection<T>(IEnumerable<T> collection)
        {
            if (collection == null)
            {
                Console.WriteLine("Collection is null");
                return;
            }

            var list = collection.ToList();

            if (!list.Any())
            {
                Console.WriteLine("Collection is empty");
                return;
            }

            Console.WriteLine($"Collection contains {list.Count} item(s):");

            for (int i = 0; i < list.Count; i++)
            {
                Console.WriteLine($"  [{i}] {list[i]?.ToString() ?? "null"}");
            }
        }

        public static void PrintCollection<T>(IEnumerable<T> collection, string header)
        {
            if (collection == null)
            {
                Console.WriteLine("Collection is null");
                return;
            }

            var list = collection.ToList();

            Console.WriteLine($"\n{header}");
            Console.WriteLine(new string('-', 40));

            if (!list.Any())
            {
                Console.WriteLine("  (empty)");
            }
            else
            {
                for (int i = 0; i < list.Count; i++)
                {
                    Console.WriteLine($"  • {list[i]?.ToString() ?? "null"}");
                }
            }
        }

        public static void PrintCollectionWithIndex<T>(IEnumerable<T> collection, int startIndex = 0)
        {
            if (collection == null)
            {
                Console.WriteLine("Collection is null");
                return;
            }

            var list = collection.ToList();

            if (!list.Any())
            {
                Console.WriteLine("Collection is empty");
                return;
            }

            for (int i = 0; i < list.Count; i++)
            {
                Console.WriteLine($"{startIndex + i}. {list[i]?.ToString() ?? "null"}");
            }
        }

        public static void PrintCollectionAsLine<T>(IEnumerable<T> collection, string separator = ", ")
        {
            if (collection == null)
            {
                Console.WriteLine("Collection is null");
                return;
            }

            var list = collection.ToList();

            if (!list.Any())
            {
                Console.WriteLine("Collection is empty");
                return;
            }

            string result = string.Join(separator, list);
            Console.WriteLine(result);
        }

        public static void PrintDictionary<TKey, TValue>(Dictionary<TKey, TValue> dictionary) where TKey : notnull
        {
            if (dictionary == null)
            {
                Console.WriteLine("Dictionary is null");
                return;
            }

            if (!dictionary.Any())
            {
                Console.WriteLine("Dictionary is empty");
                return;
            }

            Console.WriteLine($"Dictionary contains {dictionary.Count} item(s):");

            foreach (var kvp in dictionary)
            {
                Console.WriteLine($"  {kvp.Key} -> {kvp.Value?.ToString() ?? "null"}");
            }
        }

        public static void PrintCollectionFormatted<T>(IEnumerable<T> collection, Func<T, string> formatter)
        {
            if (collection == null)
            {
                Console.WriteLine("Collection is null");
                return;
            }

            var list = collection.ToList();

            if (!list.Any())
            {
                Console.WriteLine("Collection is empty");
                return;
            }

            for (int i = 0; i < list.Count; i++)
            {
                string formatted = formatter?.Invoke(list[i]) ?? list[i]?.ToString() ?? "null";
                Console.WriteLine($"  {i}. {formatted}");
            }
        }

        public static void PrintLine(params object[] items)
        {
            if (items == null || items.Length == 0)
            {
                Console.WriteLine("(no items)");
                return;
            }

            string result = string.Join(" | ", items.Select(i => i?.ToString() ?? "null"));
            Console.WriteLine(result);
        }

        public static void PrintLine<T>(params T[] items)
        {
            if (items == null || items.Length == 0)
            {
                Console.WriteLine("(no items)");
                return;
            }

            string result = string.Join(" | ", items.Select(i => i?.ToString() ?? "null"));
            Console.WriteLine(result);
        }

        public static void PrintTable<T>(IEnumerable<T> collection, params Func<T, object>[] propertySelectors)
        {
            if (collection == null || !collection.Any())
            {
                Console.WriteLine("No data to display");
                return;
            }

            var list = collection.ToList();

            Console.WriteLine("\n" + new string('=', 60));
            foreach (var item in list)
            {
                var values = propertySelectors.Select(selector => selector(item)?.ToString() ?? "null");
                Console.WriteLine("  " + string.Join(" | ", values));
            }
            Console.WriteLine(new string('=', 60));
        }
    }
}