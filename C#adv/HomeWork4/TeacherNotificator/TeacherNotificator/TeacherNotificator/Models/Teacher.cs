using System;

namespace TeacherNotificator.Models
{
    public class Teacher
    {
        public string? Name { get; set; }
        public int Age { get; set; }
        public string? Email { get; set; }
        public string? Subject { get; set; }

        public delegate void NotificationHandler(string message);
        public event NotificationHandler? OnNotificationSent;

        public void Subscribe(Student student)
        {
            OnNotificationSent += student.GetNotification;
            Console.WriteLine($"{student.Name} subscribed to Professor {Name}'s notifications.");
        }

        public void Unsubscribe(Student student)
        {
            OnNotificationSent -= student.GetNotification;
            Console.WriteLine($"{student.Name} unsubscribed from Professor {Name}'s notifications.");
        }

        public void SendNotification()
        {
            Console.WriteLine("Sending notifications....");

            string message = $"Notification from Professor {Name}: Class for {Subject} will start at 10 AM.";

            OnNotificationSent?.Invoke(message);
        }
    }
}