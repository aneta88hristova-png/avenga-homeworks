namespace TimeTracking.Services.Helpers
{
    public static class MessageHelper
    {
        public static void PrintMessage(string message, ConsoleColor color)
        {
            Console.ForegroundColor = color;
            Console.WriteLine(message);
            Console.ResetColor();
        }

        public static void PrintError(string message)
        {
            PrintMessage($"[ERROR] {message}", ConsoleColor.Red);
        }

        public static void PrintSuccess(string message)
        {
            PrintMessage($"[SUCCESS] {message}", ConsoleColor.Green);
        }

        public static void PrintWarning(string message)
        {
            PrintMessage($"[WARNING] {message}", ConsoleColor.Yellow);
        }
    }
}