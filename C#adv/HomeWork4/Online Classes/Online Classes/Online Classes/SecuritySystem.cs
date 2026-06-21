public class SecuritySystem
{
    public void OnUnauthorizedUserFound(string userName)
    {
        Console.WriteLine($"{userName} Users Found. Sending Email to Administration.");
        SendEmail();
        StartAlarm();
    }

    private void SendEmail()
    {
        Console.WriteLine("Email Sent.");
    }

    private void StartAlarm()
    {
        Console.WriteLine("Warning Alarm Started.");
    }
}