public class Car
{
    public string Model { get; set; }
    public int Speed { get; set; }
    public Driver Driver { get; set; }

    public Car(string model, int speed)
    {
        Model = model;
        Speed = speed;
        Driver = null!;
    }

    public int CalculateSpeed(Driver driver)
    {
        return Speed * driver.Skill;
    }
}