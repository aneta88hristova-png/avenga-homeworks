public class Publisher
{
    public delegate void MessageDelegate(string message);
    public event MessageDelegate MessageEvent;

    public void ProcessData(string message)
    {
        Console.WriteLine("Processing data...");
        Thread.Sleep(2000);
        OnMessageProcessed(message);
    }

    protected void OnMessageProcessed(string message)
    {
        if (MessageEvent != null)
        {
            MessageEvent(message);
        }
    }
}