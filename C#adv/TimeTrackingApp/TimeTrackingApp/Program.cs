using TimeTracking.Domain.Enums;
using TimeTracking.Domain.Models;
using TimeTracking.Services.Implementations;
using TimeTracking.Services.Helpers;
using TimeTracking.Services.Interfaces;

namespace TimeTracking
{
    class Program
    {
        private static UserService _userService = new UserService();
        private static User? _currentUser = null;
        private static int _loginAttempts = 0;
        private const int MAX_LOGIN_ATTEMPTS = 3;

        static void Main(string[] args)
        {
            SeedData();
            Console.Title = "Time Tracking App ⏳";

            // Spara när appen stängs
            AppDomain.CurrentDomain.ProcessExit += (s, e) =>
            {
                var allUsers = _userService.GetAllUsers();
                FileStorageHelper.SaveUsers(allUsers);
                Console.WriteLine("\n💾 Data saved successfully!");
            };

            MainLoop();
        }

        static void MainLoop()
        {
            while (true)
            {
                if (_currentUser == null)
                {
                    ShowLoginScreen();
                }
                else
                {
                    ShowMainMenu();
                }
            }
        }

        static void ShowLoginScreen()
        {
            IUIService ui = new UIService();
            int choice = ui.ShowLoginMenu();

            switch (choice)
            {
                case 1: 
                    HandleLogin(ui);
                    break;
                case 2:
                    HandleRegister(ui);
                    break;
                case 3:
                    Console.WriteLine("Goodbye! 👋");
                    Environment.Exit(0);
                    break;
            }
        }

        static void HandleLogin(IUIService ui)
        {
            Console.Clear();
            Console.WriteLine("=== LOGIN ===\n");

            string username = ui.GetUsername();
            if (string.IsNullOrEmpty(username))
            {
                MessageHelper.PrintError("Username cannot be empty!");
                Console.ReadKey();
                return;
            }

            string password = ui.GetPassword();
            if (string.IsNullOrEmpty(password))
            {
                MessageHelper.PrintError("Password cannot be empty!");
                Console.ReadKey();
                return;
            }

            _currentUser = _userService.Login(username, password);

            if (_currentUser == null)
            {
                _loginAttempts++;
                int remaining = MAX_LOGIN_ATTEMPTS - _loginAttempts;
                MessageHelper.PrintError($"Login failed! {remaining} attempts remaining.");

                if (_loginAttempts >= MAX_LOGIN_ATTEMPTS)
                {
                    Console.WriteLine("Too many failed attempts. Goodbye! 👋");
                    Environment.Exit(0);
                }
                Console.ReadKey();
            }
            else
            {
                _loginAttempts = 0;
                MessageHelper.PrintSuccess($"Welcome back, {_currentUser.FirstName}! 🎉");
                Console.ReadKey();
            }
        }

        static void HandleRegister(IUIService ui)
        {
            User newUser = ui.GetRegistrationData();
            _currentUser = _userService.Register(newUser);

            if (_currentUser != null)
            {
                Console.ReadKey();
            }
        }

        static void ShowMainMenu()
        {
            IUIService ui = new UIService(_currentUser);
            int choice = ui.ShowMainMenu();

            switch (choice)
            {
                case 1:
                    HandleTrackActivity();
                    break;
                case 2:
                    HandleStatistics();
                    break;
                case 3:
                    HandleAccountManagement();
                    break;
                case 4:
                    HandleLogOut();
                    break;
            }
        }

        static void HandleTrackActivity()
        {
            IUIService ui = new UIService(_currentUser);

            int activityChoice = ui.ShowActivitiesMenu();

            if (activityChoice == 6)
            {
                return;
            }

            ActivityTypeEnum selectedActivity = (ActivityTypeEnum)activityChoice;

            Console.Clear();
            Console.WriteLine($"Starting {selectedActivity} tracking... ⏱️");
            MessageHelper.PrintMessage("Press ENTER to stop tracking...", ConsoleColor.Yellow);

            DateTime startTime = DateTime.Now;
            Console.ReadLine();
            DateTime endTime = DateTime.Now;

            int minutesSpent = (int)(endTime - startTime).TotalMinutes;
            if (minutesSpent == 0) minutesSpent = 1;

            ActivityRecord record = new ActivityRecord
            {
                ActivityType = selectedActivity,
                StartTime = startTime,
                EndTime = endTime,
                MinutesSpent = minutesSpent
            };

            switch (selectedActivity)
            {
                case ActivityTypeEnum.Reading:
                    var readingInfo = ui.GetReadingExtraInfo();
                    record.Pages = readingInfo.pages;
                    record.ReadingType = readingInfo.type;
                    break;
                case ActivityTypeEnum.Exercising:
                    record.ExercisingType = ui.GetExercisingType();
                    break;
                case ActivityTypeEnum.Working:
                    record.WorkingType = ui.GetWorkingType();
                    break;
                case ActivityTypeEnum.OtherHobbies:
                    record.HobbyName = ui.GetHobbyName();
                    break;
            }

            _userService.AddActivityRecord(_currentUser!, record);
            MessageHelper.PrintSuccess($"Activity tracked! You spent {minutesSpent} minutes on {selectedActivity}.");
            Console.ReadKey();
        }

        static void HandleStatistics()
        {
            IUIService ui = new UIService(_currentUser);
            int choice = ui.ShowStatisticsMenu();

            switch (choice)
            {
                case 1: 
                    StatisticsService.ShowReadingStatistics(_currentUser!);
                    break;
                case 2: 
                    StatisticsService.ShowExercisingStatistics(_currentUser!);
                    break;
                case 3: 
                    StatisticsService.ShowWorkingStatistics(_currentUser!);
                    break;
                case 4: 
                    StatisticsService.ShowHobbiesStatistics(_currentUser!);
                    break;
                case 5: 
                    StatisticsService.ShowGlobalStatistics(_currentUser!);
                    break;
                case 6: 
                    return;
            }
        }

        static void HandleAccountManagement()
        {
            IUIService ui = new UIService(_currentUser);
            int choice = ui.ShowAccountMenu();

            switch (choice)
            {
                case 1: 
                    HandleChangePassword();
                    break;
                case 2: 
                    HandleChangeFirstName();
                    break;
                case 3: 
                    HandleChangeLastName();
                    break;
                case 4: 
                    HandleDeactivateAccount();
                    break;
                case 5: 
                    return;
            }
        }

        static void HandleChangePassword()
        {
            Console.Clear();
            Console.WriteLine("=== CHANGE PASSWORD ===\n");
            Console.Write("Current Password: ");
            string? oldPassword = Console.ReadLine();
            Console.Write("New Password: ");
            string? newPassword = Console.ReadLine();

            _userService.ChangePassword(_currentUser!.Id, oldPassword ?? string.Empty, newPassword ?? string.Empty);
            Console.ReadKey();
        }

        static void HandleChangeFirstName()
        {
            Console.Clear();
            Console.WriteLine("=== CHANGE FIRST NAME ===\n");
            Console.Write("New First Name: ");
            string? newFirstName = Console.ReadLine();

            _userService.ChangeFirstName(_currentUser!.Id, newFirstName ?? string.Empty);
            Console.ReadKey();
        }

        static void HandleChangeLastName()
        {
            Console.Clear();
            Console.WriteLine("=== CHANGE LAST NAME ===\n");
            Console.Write("New Last Name: ");
            string? newLastName = Console.ReadLine();

            _userService.ChangeLastName(_currentUser!.Id, newLastName ?? string.Empty);
            Console.ReadKey();
        }

        static void HandleDeactivateAccount()
        {
            Console.Clear();
            Console.WriteLine("=== DEACTIVATE ACCOUNT ===\n");
            MessageHelper.PrintWarning("Are you sure you want to deactivate your account? (y/n)");
            string? response = Console.ReadLine()?.ToLower();

            if (response == "y" || response == "yes")
            {
                _userService.DeactivateAccount(_currentUser!.Id);
                _currentUser = null;
                MessageHelper.PrintSuccess("You have been logged out.");
                Console.ReadKey();
            }
        }

        static void HandleLogOut()
        {
            _currentUser = null;
            MessageHelper.PrintSuccess("Logged out successfully!");
            Console.ReadKey();
        }

        static void SeedData()
        {
            User? existingUser = _userService.GetByUsername("testuser");
            if (existingUser == null)
            {
                var testUser = new User
                {
                    FirstName = "Test",
                    LastName = "User",
                    Age = 25,
                    Username = "testuser",
                    Password = "Test123",
                    IsActive = true
                };

                User? user = _userService.Register(testUser);

                if (user != null)
                {
                    var records = new List<ActivityRecord>
                    {
                        new ActivityRecord
                        {
                            ActivityType = ActivityTypeEnum.Reading,
                            MinutesSpent = 45,
                            Pages = 30,
                            ReadingType = ReadingTypeEnum.Fiction,
                            StartTime = DateTime.Now.AddDays(-5),
                            EndTime = DateTime.Now.AddDays(-5).AddMinutes(45),
                            UserId = user.Id
                        },
                        new ActivityRecord
                        {
                            ActivityType = ActivityTypeEnum.Exercising,
                            MinutesSpent = 30,
                            ExercisingType = ExercisingTypeEnum.Running,
                            StartTime = DateTime.Now.AddDays(-3),
                            EndTime = DateTime.Now.AddDays(-3).AddMinutes(30),
                            UserId = user.Id
                        },
                        new ActivityRecord
                        {
                            ActivityType = ActivityTypeEnum.Working,
                            MinutesSpent = 60,
                            WorkingType = WorkingTypeEnum.FromHome,
                            StartTime = DateTime.Now.AddDays(-2),
                            EndTime = DateTime.Now.AddDays(-2).AddMinutes(60),
                            UserId = user.Id
                        },
                        new ActivityRecord
                        {
                            ActivityType = ActivityTypeEnum.OtherHobbies,
                            MinutesSpent = 90,
                            HobbyName = "Painting",
                            StartTime = DateTime.Now.AddDays(-1),
                            EndTime = DateTime.Now.AddDays(-1).AddMinutes(90),
                            UserId = user.Id
                        }
                    };

                    foreach (var record in records)
                    {
                        _userService.AddActivityRecord(user, record);
                    }
                }
            }
        }
    }
}