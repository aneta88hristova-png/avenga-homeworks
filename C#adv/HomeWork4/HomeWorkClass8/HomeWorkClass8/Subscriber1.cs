public class Subscriber1
{
    public void DisplayMessage(string message)
    {
        Console.WriteLine($"Subscriber 1 received: {message.ToUpper()}");
    }
}