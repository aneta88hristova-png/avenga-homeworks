using TimeTracking.Domain.Enums;

namespace TimeTracking.Domain.Models
{
    public class ActivityRecord : BaseEntity
    {
        public ActivityTypeEnum ActivityType { get; set; }
        public int MinutesSpent { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int UserId { get; set; }


        public int? Pages { get; set; }
        public ReadingTypeEnum? ReadingType { get; set; }

       
        public ExercisingTypeEnum? ExercisingType { get; set; }


        public WorkingTypeEnum? WorkingType { get; set; }

      
        public string? HobbyName { get; set; }  

        public override string GetInfo()
        {
            return $"{ActivityType} - {MinutesSpent} min on {StartTime.ToShortDateString()}";
        }
    }
}