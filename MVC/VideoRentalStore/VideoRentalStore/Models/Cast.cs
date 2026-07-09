using VideoRentalStore.Enums;

namespace VideoRentalStore.Models;

public class Cast
{
    public int Id { get; set; }
    public int MovieId { get; set; }
    public string Name { get; set; } = string.Empty;
    public Part Part { get; set; }
}