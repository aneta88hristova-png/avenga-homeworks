using TeacherNotificator.Models;

class Program
{
    static void Main(string[] args)
    {
        // Create 1 professor
        Teacher professor = new Teacher
        {
            Name = "John",
            Age = 45,
            Email = "john@school.com",
            Subject = "Math"
        };

        // Create 3 students
        Student alice = new Student
        {
            Name = "Alice",
            Age = 20,
            Email = "alice@student.com",
            Subject = "Math"
        };

        Student bob = new Student
        {
            Name = "Bob",
            Age = 22,
            Email = "bob@student.com",
            Subject = "Math"
        };

        Student charlie = new Student
        {
            Name = "Charlie",
            Age = 21,
            Email = "charlie@student.com",
            Subject = "Math"
        };

        // Subscribe all students
        professor.Subscribe(alice);
        professor.Subscribe(bob);
        professor.Subscribe(charlie);

        Console.WriteLine();

        // First notification
        professor.SendNotification();

        Console.WriteLine();

        // Unsubscribe 2 students (Alice and Charlie)
        professor.Unsubscribe(alice);
        professor.Unsubscribe(charlie);

        Console.WriteLine();

        // Second notification
        professor.SendNotification();

        Console.ReadKey();
    }
}