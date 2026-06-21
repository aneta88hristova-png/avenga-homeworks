public class UserManager
{
    public delegate void UnauthorizedUserHandler(string userName);
    public event UnauthorizedUserHandler? UnauthorizedUserFound;

    private readonly string[] unauthorizedUsers = { "Bob", "Jill", "Alice" };

    public void ValidateUser(string? userName)
    {
        if (string.IsNullOrWhiteSpace(userName))
        {
            Console.WriteLine("No name provided.");
            return;
        }

        foreach (string unauthorized in unauthorizedUsers)
        {
            if (userName.Equals(unauthorized, StringComparison.OrdinalIgnoreCase))
            {
                UnauthorizedUserFound?.Invoke(userName);
                Console.WriteLine("Loging out.");
                return;
            }
        }

        Console.WriteLine($"Welcome {userName}.");
    }
}