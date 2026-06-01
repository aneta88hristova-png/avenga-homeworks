namespace HomeWork21.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }

        public User(int id, string name, int age)
        {
            Id = id;
            Name = name;
            Age = age;
        }

        public void DisplayInfo()
        {
            Console.WriteLine($"  ID: {Id}, Name: {Name}, Age: {Age}");
        }

        public override string ToString()
        {
            return $"User [ID: {Id}, Name: {Name}, Age: {Age}]";
        }
    }
}