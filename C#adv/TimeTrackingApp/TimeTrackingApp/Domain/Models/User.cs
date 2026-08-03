using TimeTracking.Domain.Enums;

namespace TimeTracking.Domain.Models
{
    public class User : BaseEntity
    {
        public string FirstName { get; set; } = string.Empty;  
        public string LastName { get; set; } = string.Empty;   
        public int Age { get; set; }
        public string Username { get; set; } = string.Empty;   
        public string Password { get; set; } = string.Empty;   
        public UserRoleEnum Role { get; set; }
        public bool IsActive { get; set; } = true;
        public List<ActivityRecord> Activities { get; set; } = new List<ActivityRecord>(); 

        public User()
        {
            Activities = new List<ActivityRecord>();
            Role = UserRoleEnum.Standard;
        }

        public override string GetInfo()
        {
            return $"{FirstName} {LastName} ({Username})";
        }
    }
}