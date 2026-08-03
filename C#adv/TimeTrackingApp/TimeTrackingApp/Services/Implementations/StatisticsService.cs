using TimeTracking.Domain.Enums;
using TimeTracking.Domain.Models;
using TimeTracking.Services.Helpers;

namespace TimeTracking.Services.Implementations
{
    public class StatisticsService
    {
        public static void ShowReadingStatistics(User user)
        {
            var readingRecords = user.Activities
                .Where(a => a.ActivityType == ActivityTypeEnum.Reading)
                .ToList();

            if (!readingRecords.Any())
            {
                MessageHelper.PrintWarning("No reading activities recorded yet!");
                Console.ReadKey();
                return;
            }

            int totalMinutes = readingRecords.Sum(a => a.MinutesSpent);
            double totalHours = totalMinutes / 60.0;
            double averageMinutes = readingRecords.Average(a => a.MinutesSpent);
            int totalPages = readingRecords.Sum(a => a.Pages ?? 0);

            // Favorite type
            var favoriteType = readingRecords
                .GroupBy(a => a.ReadingType)
                .OrderByDescending(g => g.Count())
                .Select(g => new { Type = g.Key, Count = g.Count() })
                .FirstOrDefault();

            Console.WriteLine("\n=== READING STATISTICS ===\n");
            Console.WriteLine($"Total Time: {totalHours:F2} hours");
            Console.WriteLine($"Average Time: {averageMinutes:F1} minutes");
            Console.WriteLine($"Total Pages: {totalPages}");
            Console.WriteLine($"Favorite Type: {favoriteType?.Type}");
            Console.WriteLine($"Total Sessions: {readingRecords.Count}");
            Console.ReadKey();
        }

        public static void ShowExercisingStatistics(User user)
        {
            var exerciseRecords = user.Activities
                .Where(a => a.ActivityType == ActivityTypeEnum.Exercising)
                .ToList();

            if (!exerciseRecords.Any())
            {
                MessageHelper.PrintWarning("No exercising activities recorded yet!");
                Console.ReadKey();
                return;
            }

            int totalMinutes = exerciseRecords.Sum(a => a.MinutesSpent);
            double totalHours = totalMinutes / 60.0;
            double averageMinutes = exerciseRecords.Average(a => a.MinutesSpent);

            var favoriteType = exerciseRecords
                .GroupBy(a => a.ExercisingType)
                .OrderByDescending(g => g.Count())
                .Select(g => new { Type = g.Key, Count = g.Count() })
                .FirstOrDefault();

            Console.WriteLine("\n=== EXERCISING STATISTICS ===\n");
            Console.WriteLine($"Total Time: {totalHours:F2} hours");
            Console.WriteLine($"Average Time: {averageMinutes:F1} minutes");
            Console.WriteLine($"Favorite Type: {favoriteType?.Type}");
            Console.WriteLine($"Total Sessions: {exerciseRecords.Count}");
            Console.ReadKey();
        }

        public static void ShowWorkingStatistics(User user)
        {
            var workRecords = user.Activities
                .Where(a => a.ActivityType == ActivityTypeEnum.Working)
                .ToList();

            if (!workRecords.Any())
            {
                MessageHelper.PrintWarning("No working activities recorded yet!");
                Console.ReadKey();
                return;
            }

            int totalMinutes = workRecords.Sum(a => a.MinutesSpent);
            double totalHours = totalMinutes / 60.0;
            double averageMinutes = workRecords.Average(a => a.MinutesSpent);

            int homeHours = workRecords
                .Where(a => a.WorkingType == WorkingTypeEnum.FromHome)
                .Sum(a => a.MinutesSpent) / 60;
            int officeHours = workRecords
                .Where(a => a.WorkingType == WorkingTypeEnum.AtOffice)
                .Sum(a => a.MinutesSpent) / 60;

            Console.WriteLine("\n=== WORKING STATISTICS ===\n");
            Console.WriteLine($"Total Time: {totalHours:F2} hours");
            Console.WriteLine($"Average Time: {averageMinutes:F1} minutes");
            Console.WriteLine($"Home vs Office: Home: {homeHours}h, Office: {officeHours}h");
            Console.WriteLine($"Total Sessions: {workRecords.Count}");
            Console.ReadKey();
        }

        public static void ShowHobbiesStatistics(User user)
        {
            var hobbyRecords = user.Activities
                .Where(a => a.ActivityType == ActivityTypeEnum.OtherHobbies)
                .ToList();

            if (!hobbyRecords.Any())
            {
                MessageHelper.PrintWarning("No hobbies recorded yet!");
                Console.ReadKey();
                return;
            }

            int totalMinutes = hobbyRecords.Sum(a => a.MinutesSpent);
            double totalHours = totalMinutes / 60.0;
            double averageMinutes = hobbyRecords.Average(a => a.MinutesSpent);

            var uniqueHobbies = hobbyRecords
                .Where(a => !string.IsNullOrEmpty(a.HobbyName))
                .Select(a => a.HobbyName)
                .Distinct()
                .ToList();

            Console.WriteLine("\n=== HOBBIES STATISTICS ===\n");
            Console.WriteLine($"Total Time: {totalHours:F2} hours");
            Console.WriteLine($"Average Time: {averageMinutes:F1} minutes");
            Console.WriteLine($"Unique Hobbies: {string.Join(", ", uniqueHobbies)}");
            Console.WriteLine($"Total Sessions: {hobbyRecords.Count}");
            Console.ReadKey();
        }

        public static void ShowGlobalStatistics(User user)
        {
            var allActivities = user.Activities;

            if (!allActivities.Any())
            {
                MessageHelper.PrintWarning("No activities recorded yet!");
                Console.ReadKey();
                return;
            }

            int totalMinutes = allActivities.Sum(a => a.MinutesSpent);
            double totalHours = totalMinutes / 60.0;

            var favoriteActivity = allActivities
                .GroupBy(a => a.ActivityType)
                .OrderByDescending(g => g.Count())
                .Select(g => new { Type = g.Key, Count = g.Count() })
                .FirstOrDefault();

            Console.WriteLine("\n=== GLOBAL STATISTICS ===\n");
            Console.WriteLine($"Total Time Across All Activities: {totalHours:F2} hours");
            Console.WriteLine($"Favorite Activity: {favoriteActivity?.Type} ({favoriteActivity?.Count} sessions)");
            Console.WriteLine($"Total Sessions: {allActivities.Count}");
            Console.ReadKey();
        }
    }
}