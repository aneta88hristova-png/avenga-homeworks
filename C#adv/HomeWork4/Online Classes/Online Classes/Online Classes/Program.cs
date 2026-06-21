class Program
{
    static void Main(string[] args)
    {
        UserManager userManager = new UserManager();
        SecuritySystem security = new SecuritySystem();

        userManager.UnauthorizedUserFound += security.OnUnauthorizedUserFound;

        Console.Write("Enter your name: ");
        string? userName = Console.ReadLine();

        userManager.ValidateUser(userName);

        Console.ReadKey();
    }
}