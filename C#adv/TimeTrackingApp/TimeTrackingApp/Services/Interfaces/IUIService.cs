using TimeTracking.Domain.Enums;
using TimeTracking.Domain.Models;

namespace TimeTracking.Services.Interfaces
{
    public interface IUIService
    {
        // Menu methods
        int ShowLoginMenu();
        int ShowMainMenu();
        int ShowActivitiesMenu();
        int ShowStatisticsMenu();
        int ShowAccountMenu();

        // User input methods
        User GetRegistrationData();
        string GetUsername();
        string GetPassword();

        // Activity tracking
        ActivityTypeEnum SelectActivityType();
        (int pages, ReadingTypeEnum type) GetReadingExtraInfo();
        ExercisingTypeEnum GetExercisingType();
        WorkingTypeEnum GetWorkingType();
        string GetHobbyName();

        // Validation methods
        int GetValidatedNumber(string prompt, int range);
        int GetValidatedPositiveNumber(string prompt);
    }
}