public class Program
{
    public static void Main(string[] args)
    {
        Publisher publisher = new Publisher();
        Subscriber1 sub1 = new Subscriber1();
        Subscriber2 sub2 = new Subscriber2();

        publisher.MessageEvent += sub1.DisplayMessage;
        publisher.MessageEvent += sub2.ShowMessage;

        Console.WriteLine("First call - both subscribers:");
        publisher.ProcessData("Hello everyone!");

        Console.WriteLine("\nUnsubscribing Subscriber2...");
        publisher.MessageEvent -= sub2.ShowMessage;

        Console.WriteLine("\nSecond call - only Subscriber1:");
        publisher.ProcessData("Second message!");
    }
}