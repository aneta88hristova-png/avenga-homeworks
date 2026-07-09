using VideoRentalStore.Enums;

namespace VideoRentalStore.Models;

public class User
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public int Age { get; set; }
    public string CardNumber { get; set; } = string.Empty;
    public DateTime CreatedOn { get; set; }
    public bool IsSubscriptionExpired { get; set; }
    public SubscriptionType SubscriptionType { get; set; }
}