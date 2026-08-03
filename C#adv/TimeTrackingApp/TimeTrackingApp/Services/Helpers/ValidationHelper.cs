namespace TimeTracking.Services.Helpers
{
    public static class ValidationHelper
    {
        public static bool ValidateFirstName(string firstName)
        {
            if (string.IsNullOrEmpty(firstName) || firstName.Length < 2)
                return false;
            return !firstName.Any(char.IsDigit);
        }

        public static bool ValidateLastName(string lastName)
        {
            if (string.IsNullOrEmpty(lastName) || lastName.Length < 2)
                return false;
            return !lastName.Any(char.IsDigit);
        }

        public static bool ValidateUsername(string username)
        {
            if (string.IsNullOrEmpty(username) || username.Length < 5)
                return false;
            return true;
        }

        public static bool ValidatePassword(string password)
        {
            if (string.IsNullOrEmpty(password) || password.Length < 6)
                return false;

            if (!password.Any(char.IsUpper))
                return false;

            if (!password.Any(char.IsDigit))
                return false;

            return true;
        }

        public static bool ValidateAge(int age)
        {
            return age >= 18 && age <= 120;
        }

        public static int ValidateNumber(string? input, int range)  
        {
            if (string.IsNullOrEmpty(input))
                return -1;

            bool isNum = int.TryParse(input, out int num);
            if (!isNum || num < 1 || num > range)
                return -1;
            return num;
        }

        public static int ValidatePositiveNumber(string? input)  
        {
            if (string.IsNullOrEmpty(input))
                return -1;

            bool isNum = int.TryParse(input, out int num);
            if (!isNum || num < 0)
                return -1;
            return num;
        }
    }
}